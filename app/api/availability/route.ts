import { NextResponse } from "next/server";
import { busyTimes, calendarConnected } from "../../lib/google";
import { parisDayISO, parisToDate } from "../../lib/paris";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* GET /api/availability -> the busy times from your Google Calendar for the next 3 weeks.
   The page hides every website slot that overlaps one of them. */
export async function GET() {
  if (!calendarConnected()) return NextResponse.json({ connected: false, busy: [] });
  try {
    const busy = await busyTimes(parisToDate(parisDayISO(0), "00:00"), parisToDate(parisDayISO(22), "00:00"));
    return NextResponse.json({ connected: true, busy }, { headers: { "Cache-Control": "no-store" } });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ connected: false, busy: [] });
  }
}
