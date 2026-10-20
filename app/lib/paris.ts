/* Paris-time helpers shared by the page and the API (work in the browser and on the server). */
export const TZ = "Europe/Paris";

/** Offset of Paris from UTC (in minutes) at a given instant, e.g. 120 in summer, 60 in winter. */
function parisOffset(at: number): number {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: TZ, hourCycle: "h23", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit",
  }).formatToParts(new Date(at));
  const v = (t: string) => Number(parts.find((p) => p.type === t)?.value);
  const asUTC = Date.UTC(v("year"), v("month") - 1, v("day"), v("hour"), v("minute"), v("second"));
  return Math.round((asUTC - at) / 60000);
}

/** "2026-10-27" + "14:00" in Paris -> the real instant (Date). */
export function parisToDate(dateISO: string, time: string): Date {
  const [y, m, d] = dateISO.split("-").map(Number);
  const [hh, mm] = time.split(":").map(Number);
  const guess = Date.UTC(y, m - 1, d, hh, mm);
  const first = guess - parisOffset(guess) * 60000;
  return new Date(guess - parisOffset(first) * 60000);
}

/** Today's date in Paris as "YYYY-MM-DD", shifted by n days. */
export function parisDayISO(n = 0): string {
  const today = new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
  const [y, m, d] = today.split("-").map(Number);
  const x = new Date(Date.UTC(y, m - 1, d + n));
  return x.toISOString().slice(0, 10);
}
