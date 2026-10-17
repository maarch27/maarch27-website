import { ArrowDownRight, ArrowUpRight, Instagram, Mail, Code2, Lightbulb, Clapperboard, Camera, BarChart3, Quote } from "lucide-react";
import CalendlyBooking from "./components/CalendlyBooking";

const work = [
  { id: "01", category: "BEAUTY", format: "VIDEO", title: "Beauty that feels like you", note: "UGC video · Hook + product story", asset: "Add your video or thumbnail", className: "workMedia workBeauty", metric: "Add verified views / saves" },
  { id: "02", category: "TECH", format: "VIDEO", title: "Technology, made human", note: "Tech UGC · Demo + storytelling", asset: "Add your video or thumbnail", className: "workMedia workTech", metric: "Add verified performance" },
  { id: "03", category: "FASHION", format: "PHOTO", title: "A point of view in every frame", note: "Fashion · Editorial photography", asset: "Add your campaign photo", className: "workMedia workFashion", metric: "Add campaign details" },
  { id: "04", category: "LIFESTYLE", format: "VIDEO", title: "Come along with me", note: "Lifestyle vlog · Creator-led story", asset: "Add your video or thumbnail", className: "workMedia workLifestyle", metric: "Add verified views / reach" },
  { id: "05", category: "TRAVEL", format: "PHOTO", title: "Places worth remembering", note: "Travel · Destination storytelling", asset: "Add your travel photo", className: "workMedia workTravel", metric: "Add campaign details" },
  { id: "06", category: "BEAUTY", format: "PHOTO", title: "The details make the story", note: "Skincare · Product photography", asset: "Add your product photo", className: "workMedia workSkincare", metric: "Add campaign details" },
];

const reasons = [
  { icon: Lightbulb, title: "A recognisable point of view", body: "I bring my own voice, taste and ideas to each brief, so the content feels human rather than interchangeable." },
  { icon: Clapperboard, title: "Hooks with a purpose", body: "I think about the opening seconds, pacing and story arc, then shape the concept around the audience and the brand goal." },
  { icon: Code2, title: "Creator + software engineer", body: "My technical background helps me communicate clearly about products, especially in tech, apps and digital experiences." },
  { icon: BarChart3, title: "Creative and performance-aware", body: "I look beyond a pretty frame: the hook, message, format and available performance insights all matter." },
];

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <a className="wordmark" href="#top" aria-label="MAARCH 27 home">MAARCH<span>_27</span></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a><a href="#about">About</a><a href="#why">Why me</a><a href="#booking">Booking</a>
        </nav>
        <a className="headerCta" href="#booking">LET&apos;S CREATE <ArrowUpRight size={14} /></a>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow"><span className="eyebrowDot" /> CREATOR · UGC · SOFTWARE ENGINEER</p>
          <h1>Creative content.<br /><em>Real connection.</em></h1>
          <p className="heroIntro">I’m Mariam — a creator with a point of view, making fashion, beauty, lifestyle, travel and tech stories for brands across the U.S. and France.</p>
          <div className="heroActions">
            <a className="button buttonDark" href="#work">Explore my work <ArrowDownRight size={16} /></a>
            <a className="textLink" href="#booking">Book a conversation <ArrowUpRight size={15} /></a>
          </div>
          <div className="heroFootnote"><span>UGC & SHORT-FORM VIDEO</span><span>PHOTOGRAPHY</span><span>CREATOR CAMPAIGNS</span></div>
        </div>
        <div className="heroVisual">
          <div className="heroPhoto" role="img" aria-label="Editorial portrait placeholder; replace with Mariam's own image" />
          <div className="photoLabel"><span>MAARCH_27</span><span>CREATOR PORTFOLIO — 2026</span></div>
          <div className="floatingNote"><span className="floatingStar">✳</span><span>Ideas with intention.<br />Content with a point of view.</span></div>
        </div>
        <div className="heroIndex">CREATIVE PARTNER / 01</div>
      </section>

      <section className="proofBar" aria-label="Creator highlights">
        <div><strong>160K+</strong><span>INSTAGRAM FOLLOWERS*</span></div>
        <div><strong>500+</strong><span>BRANDS COLLABORATED WITH*</span></div>
        <div><strong>U.S. + FRANCE</strong><span>MARKETS & STORIES</span></div>
        <p>*Creator-reported figures. Refresh before launch.</p>
      </section>

      <section className="workSection sectionPad" id="work">
        <div className="sectionHeading">
          <div><p className="eyebrow">THE PORTFOLIO</p><h2>Different formats.<br /><em>One clear point of view.</em></h2></div>
          <p className="sectionAside">A focused selection of videos, photography and creator campaigns. We’ll replace every sample tile with your actual work and link out to Instagram posts where useful.</p>
        </div>
        <div className="workGrid">
          {work.map((item) => (
            <article className="workCard" key={item.id}>
              <div className={item.className}>
                <span className="workNumber">{item.id}</span>
                <span className="mediaTag">{item.format}</span>
                <span className="mediaPlaceholder">{item.asset}</span>
                <a href="#booking" className="workArrow" aria-label={`Ask about ${item.title}`}><ArrowUpRight size={18} /></a>
              </div>
              <div className="workMeta"><span>{item.category}</span><span>{item.format}</span></div>
              <h3>{item.title}</h3><p>{item.note}</p>
              <div className="workMetric">{item.metric}</div>
            </article>
          ))}
        </div>
        <p className="sectionFootnote">Portfolio tiles are currently placeholders. No campaign results or client endorsements are being invented.</p>
      </section>

      <section className="insightsSection sectionPad" id="insights">
        <div className="sectionHeading">
          <div><p className="eyebrow">THE NUMBERS BEHIND THE STORY</p><h2>Creative is the start.<br /><em>Evidence adds context.</em></h2></div>
          <p className="sectionAside">Selected post insights can show brands how content performed. We’ll use screenshots or verified figures from your own account, with dates and context.</p>
        </div>
        <div className="insightGrid">
          <div className="insightCard"><span>01 / REACH</span><strong>Add reach</strong><p>Insert an Instagram Insights screenshot or verified reach figure.</p></div>
          <div className="insightCard"><span>02 / VIEWS</span><strong>Add video views</strong><p>Feature one strong Reel or UGC example with its reporting period.</p></div>
          <div className="insightCard"><span>03 / ENGAGEMENT</span><strong>Add saves & shares</strong><p>Show meaningful signals when available, not just a large view count.</p></div>
        </div>
        <p className="sectionFootnote">Performance examples should identify the platform, date range and whether results are organic, paid or combined. Use redacted screenshots if needed.</p>
      </section>

      <section className="aboutSection sectionPad" id="about">
        <div className="aboutImage"><span>REPLACE WITH YOUR PORTRAIT</span></div>
        <div className="aboutCopy">
          <p className="eyebrow">THE PERSON BEHIND THE CONTENT</p>
          <h2>Hi, I’m Mariam.<br /><em>Creator and builder.</em></h2>
          <p>I’m the creator behind MAARCH_27, working with brands across the U.S. and France. My content moves between beauty, skincare, fashion, lifestyle, travel, entertaining vlogs and tech.</p>
          <p>I’m also a software engineer. That combination gives me a creative eye and a technical way of thinking: I enjoy making products understandable, finding the human angle and turning a brief into a story people want to keep watching.</p>
          <div className="signature">Mariam <span>— MAARCH_27</span></div>
          <a className="button buttonOutline" href="#booking">Let&apos;s create together <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section className="whySection sectionPad" id="why">
        <p className="eyebrow">WHY MAARCH_27</p>
        <h2>Not just content.<br /><em>A creative partner.</em></h2>
        <div className="reasonGrid">
          {reasons.map(({icon: Icon, title, body}, index) => (
            <article className="reasonCard" key={title}>
              <span className="reasonNumber">0{index + 1}</span><Icon size={20} strokeWidth={1.5} />
              <h3>{title}</h3><p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="testimonialsSection sectionPad" id="recommendations">
        <div className="testimonialIntro"><p className="eyebrow">KIND WORDS</p><h2>Good work builds<br /><em>good relationships.</em></h2><p>We’ll feature short, approved recommendations from real brand partners here.</p></div>
        <div className="testimonialPlaceholder"><Quote size={22} /><p>“Add a real client recommendation here once approved for publication.”</p><span>CLIENT NAME · BRAND · WITH PERMISSION</span></div>
      </section>

      <section className="bookingSection sectionPad" id="booking">
        <div className="bookingIntro">
          <p className="eyebrow">HAVE A BRIEF? LET&apos;S TALK.</p>
          <h2>Let’s make<br /><em>something memorable.</em></h2>
          <p>Book a first conversation or send a campaign inquiry. For paid partnerships, include the deliverables, usage needs, budget and timeline so I can understand the brief.</p>
          <a className="bookingEmail" href="mailto:Collaborationmaarch@gmail.com"><Mail size={17} /> Collaborationmaarch@gmail.com</a>
          <a className="socialLink" href="https://www.instagram.com/maarch_27/" target="_blank" rel="noreferrer"><Instagram size={17} /> @maarch_27 <ArrowUpRight size={14} /></a>
          <div className="bookingCallout"><strong>Prefer a meeting?</strong><span>Choose an available time in the calendar. Calendly needs your event URL before it can accept bookings.</span></div>
          <CalendlyBooking />
        </div>
        <form className="inquiryForm" action="mailto:Collaborationmaarch@gmail.com" method="post" encType="text/plain">
          <p className="formNote">PAID COLLABORATION INQUIRY <span>01 — 05</span></p>
          <label htmlFor="name">Your name / brand *</label><input id="name" name="Name / brand" placeholder="Name / company" required />
          <label htmlFor="email">Work email *</label><input id="email" name="Email" type="email" placeholder="you@brand.com" required />
          <label htmlFor="market">Campaign market</label><select id="market" name="Market" defaultValue=""><option value="" disabled>Select market</option><option>United States</option><option>France</option><option>International / other</option></select>
          <label htmlFor="type">Project type *</label><select id="type" name="Project type" defaultValue="" required><option value="" disabled>Select project type</option><option>UGC video</option><option>Sponsored creator campaign</option><option>Photography</option><option>Tech / app content</option><option>Long-term partnership</option><option>Event / launch</option><option>Other</option></select>
          <label htmlFor="budget">Estimated budget</label><select id="budget" name="Budget" defaultValue=""><option value="" disabled>Select a range</option><option>Under €500 / $500</option><option>€500–€1,000 / $500–$1,000</option><option>€1,000–€2,500 / $1,000–$2,500</option><option>€2,500+ / $2,500+</option><option>To be discussed</option></select>
          <label htmlFor="details">Brief, deliverables & timeline *</label><textarea id="details" name="Project details" placeholder="What are you launching? What content do you need? When is it due?" rows={4} required />
          <button className="button buttonDark submitButton" type="submit">Prepare inquiry <ArrowUpRight size={16} /></button>
          <p className="privacyNote">Starter form only: opens your email app. It does not store or securely submit inquiries until a server-side form service is connected.</p>
        </form>
      </section>

      <footer className="siteFooter">
        <a className="wordmark" href="#top">MAARCH<span>_27</span></a>
        <p>Creator instinct. Engineer mindset. Stories with a point of view.</p>
        <div><a href="https://www.instagram.com/maarch_27/" target="_blank" rel="noreferrer">INSTAGRAM <ArrowUpRight size={12} /></a><a href="mailto:Collaborationmaarch@gmail.com">EMAIL <ArrowUpRight size={12} /></a></div>
        <span className="copyright">© 2026 MAARCH_27</span>
      </footer>
    </main>
  );
}
