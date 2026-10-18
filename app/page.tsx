import { ArrowDownRight, ArrowUpRight, Instagram, Mail, Play, Sparkles, Camera, Clapperboard, PenTool, Video, Menu } from "lucide-react";
import CalendlyBooking from "../CalendlyBooking";

const projects = [
  { n: "01", type: "BEAUTY FILM", title: "The everyday ritual", format: "UGC · PRODUCT STORY", tone: "projectBeauty", asset: "YOUR BEAUTY VIDEO" },
  { n: "02", type: "FASHION STORY", title: "Dressed in a point of view", format: "EDITORIAL · PHOTOGRAPHY", tone: "projectFashion", asset: "YOUR FASHION PHOTOS" },
  { n: "03", type: "TECH, MADE HUMAN", title: "A smarter daily routine", format: "TECH · DEMO · VOICEOVER", tone: "projectTech", asset: "YOUR TECH VIDEO" },
  { n: "04", type: "LIFE IN MOTION", title: "Little moments, beautifully told", format: "LIFESTYLE · VLOG", tone: "projectLife", asset: "YOUR LIFESTYLE VIDEO" },
  { n: "05", type: "SOMEWHERE ELSE", title: "A place becomes a feeling", format: "TRAVEL · VISUAL DIARY", tone: "projectTravel", asset: "YOUR TRAVEL PHOTOS" },
  { n: "06", type: "THE DETAILS", title: "Objects with a story", format: "PRODUCT · CREATIVE DIRECTION", tone: "projectObjects", asset: "YOUR PRODUCT CONTENT" },
];

const services = [
  { n: "01", title: "UGC & short-form video", detail: "Product demos, unboxings, talking videos, voiceovers, ASMR, hooks and story-led Reels.", icon: Video },
  { n: "02", title: "Photography & visual assets", detail: "Editorial-inspired imagery, product details, styling and social-first campaign photographs.", icon: Camera },
  { n: "03", title: "Video editing", detail: "Pacing, transitions, captions, sound, storytelling and platform-ready edits.", icon: Clapperboard },
  { n: "04", title: "Creative direction", detail: "Concepts, scripts, shot lists, visual references and a clear creative point of view.", icon: PenTool },
];

export default function Home() {
  return (
    <main id="top" className="editorialSite">
      <header className="siteHeader">
        <a className="wordmark" href="#top" aria-label="Maarch 27 home">maarch<span>27.</span></a>
        <nav aria-label="Main navigation"><a href="#work">Selected work</a><a href="#about">The creator</a><a href="#services">What I do</a><a href="#brands">Brand world</a></nav>
        <a className="headerCta" href="#inquire">LET'S TALK <ArrowUpRight size={14} /></a>
        <a className="mobileMenu" href="#inquire" aria-label="Go to inquiries"><Menu size={21} /></a>
      </header>

      <section className="heroEditorial">
        <div className="heroTopline"><span>INDEPENDENT CREATOR & CREATIVE PARTNER</span><span>FRANCE · WORKING WORLDWIDE</span></div>
        <div className="heroTitleWrap">
          <p className="heroKicker"><span className="goldLine" /> FASHION / BEAUTY / LIFESTYLE / TECH</p>
          <h1>Made to be<br /><em>remembered.</em></h1>
          <p className="heroStatement">I’m Mariam — creator, designer, editor and the creative mind behind <strong>maarch_27.</strong> I turn ideas, products and everyday moments into stories people want to stop for.</p>
          <div className="heroButtons"><a className="button buttonDark" href="#work">Explore my world <ArrowDownRight size={16} /></a><a className="quietLink" href="#inquire">Work with me <ArrowUpRight size={15} /></a></div>
        </div>
        <div className="heroCollage" aria-label="Mariam's editorial photo collage">
          <div className="collageImage collageMain"><span className="imageCaption">01 / THE CREATIVE</span></div>
          <div className="collageImage collageDetail"><span className="imageCaption">02 / THE DETAILS</span></div>
          <div className="collageImage collageMood"><span className="imageCaption">03 / THE POINT OF VIEW</span></div>
          <div className="collageStamp"><Sparkles size={16} /><span>CREATIVE<br />BY INSTINCT</span></div>
          <p className="collageNote">A visual diary of<br />things worth noticing.</p>
        </div>
        <div className="heroBottomline"><span>CONTENT WITH CHARACTER.</span><span>STRATEGY WITH SOUL.</span><a href="#work">SCROLL TO DISCOVER ↓</a></div>
      </section>

      <section className="numbersRibbon" aria-label="Creator highlights">
        <div><strong>160K+</strong><span>INSTAGRAM COMMUNITY</span></div>
        <i />
        <div><strong>500+</strong><span>BRANDS WORKED WITH</span></div>
        <i />
        <div><strong>4+ YEARS</strong><span>CREATING & COLLABORATING</span></div>
        <p>Creator-reported figures · confirm before publication</p>
      </section>

      <section className="introSection" id="about">
        <div className="sectionEyebrow"><span>01</span> A LITTLE ABOUT ME</div>
        <div className="introGrid">
          <h2>Not just content.<br /><em>A point of view.</em></h2>
          <div className="introCopy"><p>I’m a multi-disciplinary creator with a love for fashion, beauty, lifestyle, travel and technology. I care about how a story looks, how it feels, and why someone would keep watching.</p><p>From the first concept to the final edit, I bring together visual taste, hands-on production and a marketing-aware mindset — with a personal touch that keeps the content human.</p><a className="quietLink" href="https://maarch27.my.canva.site/media-kit" target="_blank" rel="noreferrer">Explore my media kit <ArrowUpRight size={15} /></a></div>
        </div>
      </section>

      <section className="workSection" id="work">
        <div className="workHeading"><div><div className="sectionEyebrow"><span>02</span> SELECTED CREATIVE WORLDS</div><h2>Stories, in different<br /><em>textures.</em></h2></div><p>Short-form video, still imagery and ideas shaped for the way people actually discover and connect with brands.</p></div>
        <div className="editorialProjects">
          {projects.map((project) => <article className="projectCard" key={project.n}>
            <a href="#inquire" className={"projectVisual " + project.tone} aria-label={"Ask about " + project.title}>
              <span className="projectNo">{project.n}</span><span className="projectFormat">{project.type}</span>
              <span className="projectAsset"><Play size={15} />{project.asset}</span><span className="projectGo"><ArrowUpRight size={19} /></span>
            </a>
            <div className="projectInfo"><span>{project.format}</span><h3>{project.title}</h3></div>
          </article>)}
        </div>
        <p className="assetNote">The frames are creative placeholders until your own photos and video covers are added. No stock portraits are used as a substitute for you.</p>
      </section>

      <section className="manifestoSection">
        <div className="manifestoPhoto"><span>THE PERSON BEHIND THE PERSPECTIVE</span></div>
        <div className="manifestoText"><div className="sectionEyebrow"><span>03</span> THE CREATIVE PROCESS</div><h2>Good taste gets<br />attention. <em>Good stories</em><br /><em>make it matter.</em></h2><p>I can be the face on camera, the eye behind it, and the editor shaping the final feeling. I love a strong opening, a considered frame and the tiny details that make a brand feel memorable.</p><div className="signature">Mariam <span>— MAARCH_27</span></div><a className="quietLink" href="#services">What I bring to the table <ArrowDownRight size={15} /></a></div>
      </section>

      <section className="servicesSection" id="services">
        <div className="sectionEyebrow"><span>04</span> THE OFFERING</div>
        <div className="serviceIntro"><h2>From first thought<br /><em>to final frame.</em></h2><p>Creative partnership for brands looking for thoughtful, polished content with personality.</p></div>
        <div className="serviceRows">{services.map(({n,title,detail,icon:Icon}) => <article className="serviceRow" key={n}><span className="serviceNo">{n}</span><Icon size={20} strokeWidth={1.4} /><h3>{title}</h3><p>{detail}</p><ArrowUpRight className="serviceArrow" size={17} /></article>)}</div>
      </section>

      <section className="brandSection" id="brands">
        <div className="brandIntro"><div className="sectionEyebrow"><span>05</span> THE BRAND WORLD</div><h2>Good things happen<br /><em>when worlds meet.</em></h2><p>Fashion, beauty, lifestyle and technology — I love building brand stories that feel considered, fresh and true to the product.</p></div>
        <div className="brandPanel"><span className="brandPanelLabel">SELECTED COLLABORATIONS</span><div className="brandNames"><span>SHEIN</span><span>STYLEWE</span><span>ANUA</span><span>CANON</span><span>AUPEN</span><span>DOSSIER</span><span>CIDER</span><span>TOTWOO</span><span>TEDDY BLAKE</span><span>MERCEDEs-BENZ</span></div><p>Final published brand list to be verified before launch.</p></div>
      </section>

      <section className="bookingSection" id="inquire">
        <div className="bookingIntro"><div className="sectionEyebrow"><span>06</span> LET'S MAKE SOMETHING</div><h2>Have a good<br /><em>feeling about this?</em></h2><p>Tell me what you're building, launching or dreaming up. For paid partnerships, share the deliverables, budget and timeline so we can see if it's a fit.</p><a className="bookingEmail" href="mailto:Collaborationmaarch@gmail.com"><Mail size={17} /> Collaborationmaarch@gmail.com</a><a className="socialLink" href="https://www.instagram.com/maarch_27/" target="_blank" rel="noreferrer"><Instagram size={17} /> @maarch_27 <ArrowUpRight size={14} /></a><div className="bookingCallout"><strong>Prefer a face-to-face conversation?</strong><span>Use the booking calendar to arrange an introductory call.</span></div><CalendlyBooking /></div>
        <form className="inquiryForm" action="mailto:Collaborationmaarch@gmail.com" method="post" encType="text/plain">
          <div className="formHeader"><span>PROJECT INQUIRY</span><span>LET'S START HERE ↗</span></div>
          <label htmlFor="brand-name">Your name / brand *</label><input id="brand-name" name="Name / brand" placeholder="Name or company" required />
          <label htmlFor="work-email">Work email *</label><input id="work-email" name="Email" type="email" placeholder="you@brand.com" required />
          <label htmlFor="project-type">What are you looking for? *</label><select id="project-type" name="Project type" defaultValue="" required><option value="" disabled>Choose a creative service</option><option>UGC video</option><option>Sponsored creator campaign</option><option>Photography</option><option>Video editing</option><option>Creative direction</option><option>Tech / app content</option><option>Long-term partnership</option><option>Event / launch</option><option>Other</option></select>
          <div className="formTwo"><div><label htmlFor="market">Campaign market</label><select id="market" name="Market" defaultValue=""><option value="">Choose market</option><option>United States</option><option>France</option><option>International / other</option></select></div><div><label htmlFor="budget">Budget range</label><select id="budget" name="Budget" defaultValue=""><option value="">Choose budget</option><option>Under €500 / $500</option><option>€500–€1,000 / $500–$1,000</option><option>€1,000–€2,500 / $1,000–$2,500</option><option>€2,500+ / $2,500+</option><option>To be discussed</option></select></div></div>
          <label htmlFor="brief">Tell me about the project *</label><textarea id="brief" name="Project details" placeholder="Deliverables, usage, timeline, goals..." rows={4} required />
          <button className="button buttonDark submitButton" type="submit">Send project inquiry <ArrowUpRight size={16} /></button><p className="privacyNote">This starter form opens your email app. A form service will be needed to receive inquiries directly on the website.</p>
        </form>
      </section>

      <footer className="siteFooter"><a className="wordmark" href="#top">maarch<span>27.</span></a><p>Made with intention, by Mariam.</p><div><a href="https://www.instagram.com/maarch_27/" target="_blank" rel="noreferrer">INSTAGRAM ↗</a><a href="https://www.tiktok.com/@maarch_27" target="_blank" rel="noreferrer">TIKTOK ↗</a><a href="https://www.pinterest.com/maarch_27/" target="_blank" rel="noreferrer">PINTEREST ↗</a><a href="mailto:Collaborationmaarch@gmail.com">EMAIL ↗</a></div><span>© 2026 MAARCH_27</span></footer>
    </main>
  );
}
