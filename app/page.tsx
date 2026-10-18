import { ArrowDown, ArrowUpRight, Instagram, Mail, Play, Sparkles, Camera, Clapperboard, PenTool, Video, Menu, Youtube, Globe2, Search, AudioLines } from "lucide-react";
import CalendlyBooking from "../CalendlyBooking";

const categories = [
  { id: "01", label: "TECH & APPS", title: "Make the useful irresistible.", kind: "tech", note: "Product demos · App walkthroughs · Voiceover", tiles: ["THE HOOK", "IN REAL LIFE", "HOW IT WORKS", "THE DETAILS", "MY VERDICT"] },
  { id: "02", label: "FASHION & STYLING", title: "A look is a whole language.", kind: "fashion", note: "Outfit stories · Styling · Editorial details", tiles: ["THE LOOK", "GET DRESSED WITH ME", "DETAIL STUDY", "TRY ON", "THE FINAL FRAME"] },
  { id: "03", label: "BEAUTY & ASMR", title: "Little rituals. Big feeling.", kind: "beauty", note: "Texture · Unboxing · Routines · Sound-led video", tiles: ["SOUND ON", "THE TEXTURE", "UNBOX WITH ME", "THE ROUTINE", "CLOSE UP"] },
  { id: "04", label: "LIFESTYLE & VLOGS", title: "Let them into the moment.", kind: "life", note: "Daily life · Talking videos · Story-led Reels", tiles: ["LIFE LATELY", "COME WITH ME", "THE STORYTIME", "A DAY IN FRANCE", "ON MY MIND"] },
  { id: "05", label: "TRAVEL & PLACES", title: "Make somewhere feel like a story.", kind: "travel", note: "Visual diaries · Destination content · Guides", tiles: ["POSTCARD", "A LITTLE ESCAPE", "THE PLACE", "TRAVEL DIARY", "SAVE THIS SPOT"] },
];

const services = [
  { n: "01", title: "UGC that earns the pause", detail: "Concept-led videos, product demos, testimonials, unboxings, talking-to-camera, voiceovers, ASMR and clear calls to action. Built around the hook, the audience and the reason to care.", icon: Video },
  { n: "02", title: "Creator campaigns & brand partnerships", detail: "Sponsored Reels, integrated storytelling and long-term collaborations that bring a brand into my world without losing my voice or the audience's trust.", icon: Sparkles },
  { n: "03", title: "Photography & visual direction", detail: "Campaign stills, product details, outfit imagery, moodboards, shot lists and a considered visual language from first reference to final frame.", icon: Camera },
  { n: "04", title: "Editing, hooks & storytelling", detail: "A sharper first second, intentional pacing, subtitles, sound, transitions, SEO-aware wording and platform-native edits designed to hold attention.", icon: Clapperboard },
  { n: "05", title: "Creative concept & strategy", detail: "Research, creative angles, scripts and formats shaped for the audience, the platform and the campaign objective—not a one-size-fits-all template.", icon: PenTool },
];

const brands = ["ANUA", "AUPEN", "CANON", "CIDER", "DOSSIER", "MERCEDES-BENZ", "SHEIN", "STYLEWE", "TEDDY BLAKE", "TOTWOO"];

export default function Home() {
  return (
    <main id="home" className="editorialSite">
      <header className="siteHeader">
        <a className="wordmark" href="#home" aria-label="maarch_27 home">maarch_27<span>®</span></a>
        <nav aria-label="Main navigation"><a href="#home">Home</a><a href="#work">The work</a><a href="#insights">Insights</a><a href="#about">About Mariam</a><a href="#contact">Brand deals</a></nav>
        <a className="headerCta" href="#contact">BOOK A PROJECT <ArrowUpRight size={14} /></a>
        <a className="mobileMenu" href="#contact" aria-label="Go to brand inquiries"><Menu size={21} /></a>
      </header>

      <section className="heroEditorial">
        <div className="heroTopline"><span>INDEPENDENT CREATOR · CREATIVE PARTNER · STORYTELLER</span><span>FRANCE BASED / WORLDWIDE COLLABORATIONS</span></div>
        <div className="heroLayout">
          <div className="heroTitleWrap">
            <p className="heroKicker"><span className="goldLine" /> THE PERSON BEHIND THE PERSPECTIVE</p>
            <h1>Ideas with<br /><em>main-character</em><br />energy<span className="heroPeriod">.</span></h1>
            <p className="heroStatement">I’m Mariam — the creative mind behind <strong>@maarch_27</strong>. Living in France, working with brands worldwide, and turning good ideas into content with a point of view.</p>
            <div className="heroButtons"><a className="button buttonDark" href="#work">Enter my creative world <ArrowDown size={15} /></a><a className="quietLink" href="#contact">Let’s create together <ArrowUpRight size={15} /></a></div>
            <div className="heroMicro"><span><i /> FASHION, BEAUTY, LIFESTYLE, TECH</span><span>CONCEPT → CAMERA → CUT</span></div>
          </div>
          <div className="heroCollage" aria-label="Editorial collage for Mariam's creative portfolio">
            <div className="heroPhoto heroPhotoOne"><span className="photoTag">THE CREATIVE / 01</span><b>YOUR<br/>POINT<br/><em>OF VIEW.</em></b></div>
            <div className="heroPhoto heroPhotoTwo"><span className="photoTag">OFF DUTY / 02</span><span className="scribble">life, lately ↗</span></div>
            <div className="heroPhoto heroPhotoThree"><span className="photoTag">ON SET / 03</span><span className="playDisk"><Play size={17} fill="currentColor" /></span></div>
            <div className="heroSticker"><Sparkles size={17}/><span>MADE BY A<br/>CREATIVE MIND</span></div>
            <div className="heroSideNote">a little taste<br/>of everything</div>
          </div>
        </div>
        <div className="heroBottomline"><span>NOT JUST A PRETTY FRAME.</span><span>A REASON TO KEEP WATCHING.</span><a href="#numbers">SCROLL MY WORLD ↓</a></div>
      </section>

      <section className="numbersRibbon" id="numbers" aria-label="Creator reach and experience">
        <div><strong>153K</strong><span>INSTAGRAM COMMUNITY</span></div><i />
        <div><strong>500+</strong><span>BRANDS COLLABORATED WITH</span></div><i />
        <div><strong>4+ YEARS</strong><span>CREATING & COLLABORATING</span></div><i />
        <div><strong>MILLIONS</strong><span>OF CONTENT VIEWS</span></div>
      </section>

      <section className="aboutSection" id="about">
        <div className="sectionEyebrow"><span>01 / THE HUMAN</span><span>MEET THE CREATIVE</span></div>
        <div className="aboutGrid">
          <div><p className="oversizedNote">Hi, I’m Mariam<span> ✳</span></p><h2>A creative mind<br/>with a <em>point of view.</em></h2></div>
          <div className="aboutCopy"><p>I’m a creator who genuinely loves fashion, beauty, lifestyle, travel and technology. I care about how a story looks, how it feels, and why someone would choose to keep watching.</p><p>From the first concept to the final edit, I bring together visual taste, hands-on creation, strong hooks, platform-aware storytelling and the little personal details that make content feel human—not copied from a trend report.</p><p>I can be the face on camera, the eye behind the lens, and the editor shaping the final feeling. I’m curious, detail-driven and intentional about making every frame earn its place.</p><a className="quietLink" href="https://maarch27.my.canva.site/media-kit" target="_blank" rel="noreferrer">A closer look at my media kit <ArrowUpRight size={15}/></a></div>
        </div>
        <div className="aboutPills"><span>VISUAL TASTE</span><span>HOOKS THAT LAND</span><span>SEO MINDED</span><span>EDITING WITH INTENTION</span><span>A DISTINCT VOICE</span></div>
      </section>

      <section className="workSection" id="work">
        <div className="workHeading"><div><div className="sectionEyebrow"><span>02 / THE PORTFOLIO</span><span>SCROLL, WATCH, FEEL</span></div><h2>Different formats.<br/><em>One unmistakable POV.</em></h2></div><p>Each story has its own texture. Explore the formats, moods and creative angles I bring to a campaign.</p></div>
        <div className="creativeCategories">
          {categories.map((cat) => <article className={"categoryCard category-" + cat.kind} key={cat.id}>
            <div className="categoryHead"><span>{cat.id} / {cat.label}</span><span className="categoryRound"><ArrowUpRight size={17}/></span></div>
            <h3>{cat.title}</h3><p className="categoryNote">{cat.note}</p>
            <div className="miniGallery">{cat.tiles.map((tile, i) => <div className={"miniTile miniTile" + (i + 1)} key={tile}><span className="miniIndex">0{i + 1}</span>{i === 0 && <span className="miniPlay"><Play size={12} fill="currentColor"/></span>}<b>{tile}</b></div>)}</div>
            <a className="categoryLink" href="#contact">LET’S BUILD THIS FORMAT <ArrowUpRight size={13}/></a>
          </article>)}
        </div>
        <p className="workFootnote">The portfolio is designed around real work: video covers, campaign stills and creator-led stories. Replace the visual panels with selected project media as we add your actual assets.</p>
      </section>

      <section className="insightsSection" id="insights">
        <div className="insightsHeader"><div className="sectionEyebrow"><span>03 / THE WHY</span><span>BEYOND THE AESTHETIC</span></div><h2>Pretty gets a glance.<br/><em>Purpose earns the pause.</em></h2></div>
        <div className="insightGrid">
          <article><span className="insightSymbol">↗</span><span className="insightNo">01 / THE HOOK</span><h3>Win the first second.</h3><p>I look for the scroll-stopper: a visual, question, feeling or opening line that gives people a reason to stay.</p></article>
          <article><span className="insightSymbol">✳</span><span className="insightNo">02 / THE STORY</span><h3>Make it feel human.</h3><p>People connect with a point of view. I turn features into moments, benefits into stories and products into something people can picture in their lives.</p></article>
          <article><span className="insightSymbol">⌁</span><span className="insightNo">03 / THE DISCOVERY</span><h3>Create for the platform.</h3><p>Search-aware language, relevant keywords, natural pacing, clear structure and edits that respect how people discover content.</p></article>
          <article><span className="insightSymbol">◎</span><span className="insightNo">04 / THE FINISH</span><h3>Details are the difference.</h3><p>Framing, texture, sound, subtitles and the final cut work together so the content feels polished without losing its personality.</p></article>
        </div>
      </section>

      <section className="manifestoSection">
        <div className="manifestoPhoto"><div className="manifestoPhotoFrame"><span>CREATIVE INSTINCT / PERSONAL TOUCH</span><b>THE MAGIC<br/>IS IN THE<br/><em>DETAIL.</em></b></div><span className="manifestoDoodle">stay curious ✳</span></div>
        <div className="manifestoText"><div className="sectionEyebrow"><span>04 / WHAT I BRING</span><span>THE CREATIVE PARTNER</span></div><h2>Good taste gets attention.<br/><em>Good stories make it matter.</em></h2><p>I bring a strong visual instinct, an eye for details, a clear creative opinion and a hands-on understanding of filming and editing. I’m comfortable being on camera, working behind it, or shaping the story from the first idea through delivery.</p><p>I care about the brief, but I also care about what makes the brief interesting. The goal isn’t content for content’s sake. It’s work with a feeling, a message and a reason to remember the brand.</p><div className="signature">Mariam <span>— THE MIND BEHIND @MAARCH_27</span></div></div>
      </section>

      <section className="servicesSection" id="services">
        <div className="sectionEyebrow"><span>05 / THE COLLABORATION</span><span>THOUGHTFUL BY DESIGN</span></div>
        <div className="serviceIntro"><h2>What I bring<br/><em>to the table.</em></h2><p>For brands that value a clear point of view, intentional creative and content made to do more than fill a feed.</p></div>
        <div className="serviceRows">{services.map(({n,title,detail,icon:Icon}) => <article className="serviceRow" key={n}><span className="serviceNo">{n}</span><Icon size={21} strokeWidth={1.4}/><h3>{title}</h3><p>{detail}</p><ArrowUpRight className="serviceArrow" size={17}/></article>)}</div>
        <div className="standardsStrip"><Sparkles size={19}/><p><strong>High standards. Intentional partnerships.</strong><br/>I take on projects selectively so every collaboration gets the creative attention, communication and care it deserves.</p></div>
      </section>

      <section className="brandSection" id="brands">
        <div className="brandIntro"><div className="sectionEyebrow"><span>06 / BRAND DEALS</span><span>GOOD COMPANY</span></div><h2>Brands I’ve had<br/>the pleasure to<br/><em>create with.</em></h2><p>Every partnership is a chance to find the story, the format and the feeling that make a brand stand out. Here are some names from my collaboration world.</p><a className="quietLink" href="#contact">Your brand could be next <ArrowUpRight size={15}/></a></div>
        <div className="brandOrbit"><span className="orbitLabel">SELECTED COLLABORATIONS</span><div className="brandCircles">{brands.map((brand, i) => <div className={"brandCircle brandCircle" + (i % 5 + 1)} key={brand}><span>{brand}</span></div>)}</div><p>Brand names shown as a snapshot of past collaborations.</p></div>
      </section>

      <section className="bookingSection" id="contact">
        <div className="bookingIntro"><div className="sectionEyebrow"><span>07 / YOUR MOVE</span><span>PAID PARTNERSHIPS & CREATIVE PROJECTS</span></div><h2>Have a good<br/><em>project in mind?</em></h2><p>If you’re building, launching or dreaming up something with a point of view, tell me about it. For paid partnerships, share the deliverables, budget, usage requirements and timeline so I can assess the fit.</p><p className="availabilityNote"><span className="availabilityDot"/> I work with a limited number of projects at a time to protect the quality of each collaboration. Availability is confirmed after reviewing the brief.</p><a className="bookingEmail" href="mailto:Collaborationmaarch@gmail.com"><Mail size={17}/> Collaborationmaarch@gmail.com</a>
          <div className="socialCluster"><a href="https://www.instagram.com/maarch_27/" target="_blank" rel="noreferrer"><Instagram size={16}/> Instagram <ArrowUpRight size={12}/></a><a href="https://www.tiktok.com/@maarch_27" target="_blank" rel="noreferrer"><AudioLines size={16}/> TikTok <ArrowUpRight size={12}/></a><a href="https://www.pinterest.com/maarch_27/" target="_blank" rel="noreferrer"><Sparkles size={16}/> Pinterest <ArrowUpRight size={12}/></a><a href="https://www.youtube.com/@maarch_27" target="_blank" rel="noreferrer"><Youtube size={16}/> YouTube <ArrowUpRight size={12}/></a></div>
          <div className="bookingCallout"><strong>Want to talk it through?</strong><span>Project calls and consulting time are booked separately and are paid. The fee and format are shared before a booking is confirmed.</span></div><CalendlyBooking />
        </div>
        <form className="inquiryForm" action="mailto:Collaborationmaarch@gmail.com" method="post" encType="text/plain">
          <div className="formHeader"><span>THE PROJECT BRIEF</span><span>LET’S START HERE ↗</span></div>
          <label htmlFor="brand-name">Your name / brand *</label><input id="brand-name" name="Name / brand" placeholder="Name or company" required/>
          <label htmlFor="work-email">Work email *</label><input id="work-email" name="Email" type="email" placeholder="you@brand.com" required/>
          <label htmlFor="project-type">What are you looking for? *</label><select id="project-type" name="Project type" defaultValue="" required><option value="" disabled>Choose a creative service</option><option>Paid UGC package</option><option>Sponsored creator campaign</option><option>Photography / visual assets</option><option>Video editing</option><option>Creative direction / strategy</option><option>Tech / app content</option><option>Long-term partnership</option><option>Event / launch</option><option>Paid consultation call</option><option>Other</option></select>
          <div className="formTwo"><div><label htmlFor="market">Campaign market</label><select id="market" name="Market" defaultValue=""><option value="">Choose market</option><option>United States</option><option>France</option><option>International / other</option></select></div><div><label htmlFor="budget">Budget range</label><select id="budget" name="Budget" defaultValue=""><option value="">Choose budget</option><option>Under €500 / $500</option><option>€500–€1,000 / $500–$1,000</option><option>€1,000–€2,500 / $1,000–$2,500</option><option>€2,500+ / $2,500+</option><option>To be discussed</option></select></div></div>
          <label htmlFor="brief">Deliverables, usage, goals & timeline *</label><textarea id="brief" name="Project details" placeholder="Tell me what you’re launching, what you need, the timeline and your budget..." rows={5} required/>
          <button className="button buttonDark submitButton" type="submit">Send the brief <ArrowUpRight size={16}/></button><p className="privacyNote">This inquiry starts in your email app. A form service can be connected later for direct website submissions.</p>
        </form>
      </section>

      <footer className="siteFooter"><a className="wordmark" href="#home">maarch_27<span>®</span></a><p>Creative by instinct. Intentional by design.</p><div><a href="https://www.instagram.com/maarch_27/" target="_blank" rel="noreferrer">INSTAGRAM ↗</a><a href="https://www.tiktok.com/@maarch_27" target="_blank" rel="noreferrer">TIKTOK ↗</a><a href="https://www.pinterest.com/maarch_27/" target="_blank" rel="noreferrer">PINTEREST ↗</a><a href="https://www.youtube.com/@maarch_27" target="_blank" rel="noreferrer">YOUTUBE ↗</a><a href="mailto:Collaborationmaarch@gmail.com">EMAIL ↗</a></div><span>© 2026 MAARCH_27</span></footer>
    </main>
  );
}
