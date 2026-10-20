import { createSign } from "node:crypto";

/* Google Calendar connection (server only).
   Needs three environment variables in Vercel (see GOOGLE_CALENDAR_SETUP.md):
   GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_CALENDAR_ID (your Gmail address). */
const CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL ?? "";
const PRIVATE_KEY = (process.env.GOOGLE_PRIVATE_KEY ?? "").replace(/\\n/g, "\n");
export const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID ?? "";

export const calendarConnected = () => Boolean(CLIENT_EMAIL && PRIVATE_KEY && CALENDAR_ID);

let cached: { token: string; exp: number } | null = null;

async function accessToken(): Promise<string> {
  if (cached && cached.exp > Date.now() + 60_000) return cached.token;
  const now = Math.floor(Date.now() / 1000);
  const b64 = (o: object) => Buffer.from(JSON.stringify(o)).toString("base64url");
  const unsigned = `${b64({ alg: "RS256", typ: "JWT" })}.${b64({
    iss: CLIENT_EMAIL, scope: "https://www.googleapis.com/auth/calendar",
    aud: "https://oauth2.googleapis.com/token", iat: now, exp: now + 3600,
  })}`;
  const signature = createSign("RSA-SHA256").update(unsigned).sign(PRIVATE_KEY, "base64url");
  const r = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: `${unsigned}.${signature}` }),
  });
  const j = (await r.json()) as { access_token?: string; expires_in?: number; error_description?: string };
  if (!r.ok || !j.access_token) throw new Error(`Google sign-in failed: ${j.error_description ?? r.status}`);
  cached = { token: j.access_token, exp: Date.now() + (j.expires_in ?? 3600) * 1000 };
  return j.access_token;
}

async function google<T>(path: string, body: object): Promise<T> {
  const r = await fetch(`https://www.googleapis.com/calendar/v3${path}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${await accessToken()}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
    cache: "no-store",
  });
  const j = (await r.json()) as T & { error?: { message?: string } };
  if (!r.ok) throw new Error(`Google Calendar error: ${j.error?.message ?? r.status}`);
  return j;
}

export type Busy = { start: string; end: string };

/** Times that are already taken in your calendar between two instants. */
export async function busyTimes(from: Date, to: Date): Promise<Busy[]> {
  const j = await google<{ calendars: Record<string, { busy?: Busy[] }> }>("/freeBusy", {
    timeMin: from.toISOString(), timeMax: to.toISOString(), timeZone: "Europe/Paris", items: [{ id: CALENDAR_ID }],
  });
  return j.calendars?.[CALENDAR_ID]?.busy ?? [];
}

/** Adds a booking to your calendar. Times are Paris local, e.g. "2026-10-27T14:00:00". */
export async function addBooking(e: { summary: string; description: string; start: string; end: string }) {
  return google<{ id: string; htmlLink: string }>(`/calendars/${encodeURIComponent(CALENDAR_ID)}/events`, {
    summary: e.summary,
    description: e.description,
    start: { dateTime: e.start, timeZone: "Europe/Paris" },
    end: { dateTime: e.end, timeZone: "Europe/Paris" },
    colorId: "11",
    reminders: { useDefault: false, overrides: [{ method: "popup", minutes: 60 }, { method: "email", minutes: 24 * 60 }] },
  });
}
