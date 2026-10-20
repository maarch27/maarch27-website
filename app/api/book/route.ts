import { NextResponse } from "next/server";
import { addBooking, busyTimes, calendarConnected } from "../../lib/google";
import { parisToDate } from "../../lib/paris";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = { date?: string; start?: string; end?: string; name?: string; email?: string; brand?: string; type?: string; details?: string; company_site?: string };
const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

/* POST /api/book -> puts the booking in your Google Calendar (if it is still free). */
export async function POST(req: Request) {
  let b: Body;
  try { b = (await req.json()) as Body; } catch { return NextResponse.json({ ok: false, error: "bad request" }, { status: 400 }); }
  if (b.company_site) return NextResponse.json({ ok: true, booked: false }); // spam trap
  const date = clean(b.date, 10), start = clean(b.start, 5), end = clean(b.end, 5);
  const name = clean(b.name, 120), email = clean(b.email, 160), brand = clean(b.brand, 160);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !/^\d{2}:\d{2}$/.test(start) || !/^\d{2}:\d{2}$/.test(end) || !name || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "missing details" }, { status: 400 });
  }
  if (!calendarConnected()) return NextResponse.json({ ok: true, booked: false, connected: false });

  const from = parisToDate(date, start), to = parisToDate(date, end);
  if (!(to > from) || from.getTime() < Date.now() + 60 * 60 * 1000) {
    return NextResponse.json({ ok: false, error: "time not available" }, { status: 409 });
  }
  try {
    if ((await busyTimes(from, to)).length) return NextResponse.json({ ok: false, error: "taken" }, { status: 409 });
    await addBooking({
      summary: `Booking: ${brand || name} (website)`,
      description: [
        `Booked from maarch27 website`, ``,
        `Name: ${name}`, `Email: ${email}`, `Brand / company: ${brand || "-"}`, `Project type: ${clean(b.type, 80) || "-"}`, ``,
        `Project details:`, clean(b.details, 3000) || "-",
      ].join("\n"),
      start: `${date}T${start}:00`,
      end: `${date}T${end}:00`,
    });
    return NextResponse.json({ ok: true, booked: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, error: "calendar error" }, { status: 502 });
  }
}
