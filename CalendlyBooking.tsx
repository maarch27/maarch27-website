import { CalendarDays, ExternalLink } from "lucide-react";

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;
const isConfigured = Boolean(calendlyUrl && /^https:\/\/calendly\.com\//i.test(calendlyUrl));

export default function CalendlyBooking() {
  return (
    <section className="calendarPanel" aria-labelledby="calendar-title">
      <div className="calendarPanelHeading">
        <span className="calendarIcon"><CalendarDays size={18} /></span>
        <div>
          <p className="eyebrow">MEETINGS & INTRO CALLS</p>
          <h3 id="calendar-title">Find a time to connect.</h3>
        </div>
      </div>
      {isConfigured ? (
        <iframe
          className="calendlyFrame"
          src={`${calendlyUrl}?hide_gdpr_banner=1&background_color=f4f0e9&text_color=201f1c&primary_color=8b7b67`}
          title="Book a meeting with MAARCH_27"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <div className="calendarSetupNotice">
          <p>Your meeting calendar will appear here once your Calendly booking link is connected.</p>
          <ol>
            <li>Create a Calendly event type for brand introduction calls.</li>
            <li>Add your event URL to <code>.env.local</code> as <code>NEXT_PUBLIC_CALENDLY_URL</code>.</li>
            <li>Restart the development server and test a booking.</li>
          </ol>
          <a href="https://calendly.com/" target="_blank" rel="noreferrer">Open Calendly <ExternalLink size={13} /></a>
        </div>
      )}
    </section>
  );
}
