import { ArrowDownRight, ArrowUpRight, Instagram, Mail, Code2, Lightbulb, Clapperboard, Camera, BarChart3, Quote } from "lucide-react";
import CalendlyBooking from "./CalendlyBooking";

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
          <a href="#work">Work</a><a href="#brands">Brands</a><a href="#about">About</a><a href="#services">Services</a><a href="#booking">Booking</a>
        </nav>
        <a className="headerCta" href="#booking">LET&apos;S CREATE <ArrowUpRight size={14} /></a>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow"><span className="eyebrowDot" /> FASHION · BEAUTY · LIFESTYLE · UGC</p>
          <h1>A creative soul.<br /><em>A signature story.</em></h1>
          <p className="heroIntro">I’m Mariam, the creative behind MAARCH_27. I turn fashion, beauty, lifestyle, travel and tech into polished, personality-led stories through short-form video, photography and UGC.</p>
          <div className="heroActions">
            <a className="button buttonDark" href="#work">Explore my work <ArrowDownRight size={16} /></a>
            <a className="textLink" href="https://maarch27.my.canva.site/media-kit" target="_blank" rel="noreferrer">View my media kit <ArrowUpRight size={15} /></a>
          </div>
          <div className="heroFootnote"><span>UGC & SHORT-FORM VIDEO</span><span>PHOTOGRAPHY</span><span>CREATOR CAMPAIGNS</span></div>
        </div>
        <div className="heroVisual">
          <div className="heroPhoto" role="img" aria-label="Editorial portrait placeholder; replace with Mariam's own image" />
          <div className="photoLabel"><span>MAARCH_27</span><span>CREATOR PORTFOLIO — 2026</span></div>
          <div className="floatingNote"><span className="floatingStar">✳</span><span>Curious by nature.<br />Creative by instinct.</span></div>
        </div>
        <div className="heroIndex">THE MAARCH_27 POINT OF VIEW / 01</div>
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
          <p className="sectionAside">From scroll-stopping hooks to cinematic details: explore the different ways I build stories for brands. Each project preview will open its video or campaign once the final media is connected.</p>
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


      <section className="brandSection sectionPad" id="brands">
        <div className="brandHeading">
          <p className="eyebrow">SELECTED BRAND EXPERIENCE</p>
          <h2>Good stories are<br /><em>better together.</em></h2>
          <p>From beauty and fashion to tech and lifestyle, I love finding the detail that makes a brand feel memorable.</p>
        </div>
        <div className="brandWall" aria-label="Selected brands">
          {["SHEIN", "STYLEWE", "CIDER", "ANUA", "CANON", "TEDDY BLAKE", "TOTWOO", "DOSSIER", "AUPEN", "MERCEDES-BENZ"].map((brand) => (
            <span key={brand} className="brandWord">{brand}</span>
          ))}
        </div>
        <p className="sectionFootnote">Selected names shown for portfolio direction; confirm the final list of published brand partnerships before launch.</p>
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
          <h2>Hi, I’m Mariam.<br /><em>The mind behind the mood.</em></h2>
          <p>I’m the creator behind MAARCH_27: a fashion-loving, idea-collecting, camera-ready creative who loves turning everyday moments and beautiful products into stories people want to watch.</p>
          <p>I’m also a graphic designer, video editor and software-engineering graduate. I can shape the concept, find the hook, film the details, edit the story and think about the marketing behind it. My work blends a visual point of view with strategy, curiosity and a little bit of obsession over the details.</p>
          <div className="signature">Mariam <span>— MAARCH_27</span></div>
          <a className="button buttonOutline" href="#booking">Let&apos;s create together <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section className="whySection sectionPad" id="why">
        <p className="eyebrow">WHY MAARCH_27</p>
        <h2>More than a pretty frame.<br /><em>A whole creative process.</em></h2>
        <div className="reasonGrid">
          {reasons.map(({icon: Icon, title, body}, index) => (
            <article className="reasonCard" key={title}>
              <span className="reasonNumber">0{index + 1}</span><Icon size={20} strokeWidth={1.5} />
              <h3>{title}</h3><p>{body}</p>
            </article>
          ))}
        </div>
      </section>


      <section className="servicesSection sectionPad" id="services">
        <div className="sectionHeading">
          <div><p className="eyebrow">WAYS WE CAN WORK TOGETHER</p><h2>From the first idea<br /><em>to the final frame.</em></h2></div>
          <p className="sectionAside">Thoughtful creative, polished production and content built around the story your brand needs to tell.</p>
        </div>
        <div className="serviceList">
          <div><span>01</span><h3>UGC & short-form video</h3><p>Hooks, unboxings, product demos, talking videos, voiceovers, ASMR and story-led Reels.</p><ArrowUpRight size={17} /></div>
          <div><span>02</span><h3>Fashion, beauty & lifestyle</h3><p>Editorial-inspired videos, styling, product details, everyday rituals and personal storytelling.</p><ArrowUpRight size={17} /></div>
          <div><span>03</span><h3>Photography & visual assets</h3><p>Campaign imagery, product photography and aesthetic visuals for social-first storytelling.</p><ArrowUpRight size={17} /></div>
          <div><span>04</span><h3>Creative direction & editing</h3><p>Concepts, scripts, viral-hook ideation, shot lists, editing, pacing and visual consistency.</p><ArrowUpRight size={17} /></div>
          <div><span>05</span><h3>Creator partnerships</h3><p>Sponsored content, launches, events and longer-term brand relationships.</p><ArrowUpRight size={17} /></div>
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
        <p>Curious by nature. Creative by instinct.</p>
        <div><a href="https://www.instagram.com/maarch_27/" target="_blank" rel="noreferrer">INSTAGRAM <ArrowUpRight size={12} /></a><a href="https://www.tiktok.com/@maarch_27" target="_blank" rel="noreferrer">TIKTOK <ArrowUpRight size={12} /></a><a href="https://www.pinterest.com/maarch_27/" target="_blank" rel="noreferrer">PINTEREST <ArrowUpRight size={12} /></a><a href="mailto:Collaborationmaarch@gmail.com">EMAIL <ArrowUpRight size={12} /></a></div>
        <span className="copyright">© 2026 MAARCH_27</span>
      </footer>
    </main>
  );
}
