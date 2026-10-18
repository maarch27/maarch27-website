"use client";

import { useEffect, useState } from "react";

/* =====================================================================
   YOUR DETAILS
   ===================================================================== */
const email = "Collaborationmaarch27@gmail.com";
const social = [
  { name: "Instagram", icon: "ig", handle: "@maarch_27", url: "https://www.instagram.com/maarch_27/" },
  { name: "TikTok", icon: "tt", handle: "@maarch_27", url: "https://www.tiktok.com/@maarch_27" },
  { name: "YouTube", icon: "yt", handle: "@maarch_27", url: "https://youtube.com/@maarch_27" },
  { name: "Pinterest", icon: "pin", handle: "maarch_27", url: "https://pin.it/3zNEyUu4A" },
  { name: "Email", icon: "mail", handle: email, url: `mailto:${email}` },
];
const franceIG = "https://www.instagram.com/maarch_in_france/";

/* =====================================================================
   PHOTOS
   Put photos in  public/image/  and run  node scripts/gen-images.mjs  once.
   It converts HEIC to JPG and writes public/image/index.json, so every
   photo in the folder shows up in the portfolio automatically.
   (If you skip that step, the site still tries the filenames below.)
   ===================================================================== */
const IMGDIR = "/image/";
const WEB = /\.(jpe?g|png|webp|avif)$/i;
const stripExt = (f: string) => f.replace(/\.[^.]+$/, "");
const GUESS = [".JPG", ".jpg", ".JPEG", ".jpeg", ".png", ".PNG", ".webp"];
const FALLBACK_NAMES = ["IMG_8716", "IMG_5214", "IMG_2319", "IMG_2092", "IMG_1701", "IMG_4616", "IMG_4816", "IMG_6704", "IMG_5216", "IMG_4560", "IMG_6559", "IMG_1434", "IMG_4830", "IMG_4554", "IMG_4562", "IMG_2092 2", "Tezza-8005", "Tezza-5004", "IMG_2688"];

function urls(base: string, files: string[] | null): string[] {
  if (files) return files.filter((f) => WEB.test(f) && stripExt(f).toLowerCase() === base.toLowerCase()).map((f) => IMGDIR + encodeURIComponent(f));
  return GUESS.map((e) => IMGDIR + encodeURIComponent(base) + e);
}

function PhotoInner({ cands, alt, pos, className, eager, onFail }: { cands: string[]; alt: string; pos: string; className?: string; eager?: boolean; onFail?: () => void }) {
  const [i, setI] = useState(0);
  const dead = i >= cands.length;
  useEffect(() => { if (dead) onFail?.(); }, [dead]); // eslint-disable-line react-hooks/exhaustive-deps
  if (dead) return null;
  // eslint-disable-next-line @next/next/no-img-element
  return <img className={className} src={cands[i]} alt={alt} style={{ objectPosition: pos }} loading={eager ? "eager" : "lazy"} onError={() => setI(i + 1)} />;
}
function Photo({ cands, alt, pos = "center 25%", className, eager, onFail }: { cands: string[]; alt: string; pos?: string; className?: string; eager?: boolean; onFail?: () => void }) {
  return <PhotoInner key={cands.join("|")} cands={cands} alt={alt} pos={pos} className={className} eager={eager} onFail={onFail} />;
}

function Icon({ name }: { name: string }) {
  const q = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  if (name === "ig") return <svg {...q}><rect x="3" y="3" width="18" height="18" rx="5.5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.3" cy="6.7" r=".6" fill="currentColor" /></svg>;
  if (name === "tt") return <svg {...q}><path d="M14 3v11.2a3.7 3.7 0 1 1-3.7-3.7" /><path d="M14 3c.4 2.6 2 4.3 4.8 4.6" /></svg>;
  if (name === "yt") return <svg {...q}><rect x="2.5" y="5.5" width="19" height="13" rx="4" /><path d="M10 9.5v5l4.5-2.5z" fill="currentColor" /></svg>;
  if (name === "pin") return <svg {...q}><circle cx="12" cy="12" r="9.2" /><path d="M10.6 17.5l1.7-7M9.8 13.2c-.6-2.6 1.1-4.4 3-4.4 1.6 0 2.7 1.1 2.7 2.6 0 2-1.2 3.4-2.6 3.4-.8 0-1.4-.6-1.2-1.3" /></svg>;
  return <svg {...q}><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M3.5 7l8.5 6.2L20.5 7" /></svg>;
}
const Rule = () => <div className="rule" aria-hidden="true"><i /><span>✦</span><i /></div>;

/* =====================================================================
   CONTENT
   ===================================================================== */
// Logos live in public/brands/<file>.png
const brands: [string, string][] = [
  ["Armani", "armani"], ["Kylie Cosmetics", "kylie-cosmetics"], ["Maybelline", "maybelline"], ["L’Oréal Paris", "loreal-paris"], ["NYX", "nyx"], ["Huda Beauty", "huda-beauty"],
  ["Anua", "anua"], ["Numbuzin", "numbuzin"], ["Glossybox", "glossybox"], ["Heimish", "heimish"], ["Halara", "halara"], ["Temu", "temu"],
  ["Shein", "shein"], ["Pepper Mayo", "pepper-mayo"], ["Italo Jewelry", "italo-jewelry"], ["JW Pei", "jw-pei"], ["Von Dutch", "von-dutch"], ["Bob and Brad", "bob-and-brad"],
  ["Totwoo", "totwoo"], ["Pascal", "pascal"], ["Doogee", "doogee"], ["Blackview", "blackview"], ["Perfect Corset", "perfect-corset"],
];
const tickerA = brands.slice(0, 12).map((b) => b[0]);
const tickerB = brands.slice(12).map((b) => b[0]);

const why = [
  ["Because your product should be the main character.", "I build each video around what your product does for a real person, so viewers see themselves using it."],
  ["Because the first second decides everything.", "I write the hook first, then cut the rest to earn the next second. You get three hook variations to test."],
  ["Because I do the whole thing myself.", "Concept, script, filming, lighting, editing and voice-over, all from my own studio. One person to brief, no handoffs."],
  ["Because my audience listens.", "153K followers, 95% in the USA and Europe, 70% women, and 1.0M views in the last 30 days."],
];
const skills = ["Creative direction", "Scriptwriting", "Video editing", "Viral hooks", "Voice-over", "On-camera", "Photography", "Graphic design"];

const services: [string, string, string][] = [
  ["UGC videos", "Natural, scroll-stopping video built around your product and campaign goal. Hook, script, filming and edit, all in one.", "Hook variations · Captions · Ready to post"],
  ["Instagram Reels", "Sponsored Reels with a strong first second, a clear story and pacing made for the feed.", "Concept · Filming · Editing"],
  ["Carousels & photos", "Styled product and lifestyle carousels with clean, editorial imagery for your feed and your site.", "Product shots · Lifestyle · Retouching"],
  ["UGC for paid ads", "Content built to convert on paid channels, with three hook variations and usage rights.", "Whitelisting · Spark Ads · Extra cuts"],
  ["Demos & unboxings", "First impressions, swatches, try-ons and tutorials that feel like a recommendation, not an ad.", "Unboxing · Try-on · Tutorials"],
  ["Testimonials & interviews", "On-camera reviews and interview-style videos in a natural, trustworthy voice.", "To camera · Q&A · Reviews"],
  ["Hotels, travel & experiences", "Stays, restaurants, events and trips filmed as one cinematic story.", "Hospitality · Events · Travel"],
  ["YouTube videos", "Longer reviews and storytelling edits for deeper product education.", "Review · Story edit · Thumbnail"],
  ["Voice-over & scripting", "Professional scriptwriting and narrated edits, written in your brand’s tone.", "Script · Voice-over · Revisions"],
];

type Cat = "Beauty" | "Fashion" | "Tech" | "Lifestyle" | "Travel";
type Reel = { id: string; type?: "p"; title: string; cat: Cat };
const reels: Reel[] = [
  { id: "Dc1Z3PEx-yz", title: "Skincare glow with Anua", cat: "Beauty" },
  { id: "DcctOHOoE_w", title: "Pixel Pure skincare", cat: "Beauty" },
  { id: "DV_nhb5CP56", title: "Beauty products", cat: "Beauty" },
  { id: "DSGG3RtCFDl", title: "Beauty products", cat: "Beauty" },
  { id: "DVeUDLMCDY-", title: "Hair care", cat: "Beauty" },
  { id: "DUnxGS0iN5e", title: "Hair care", cat: "Beauty" },
  { id: "Daiay-VImXK", title: "Bracelet & necklace", cat: "Fashion" },
  { id: "DeHstaVIgYr", title: "Pop-up bag", cat: "Fashion" },
  { id: "DeBBztMI6Rl", title: "Fashion week", cat: "Fashion" },
  { id: "Ddhn4UKiGif", type: "p", title: "Mercedes-Benz event style", cat: "Fashion" },
  { id: "DWGtfNoCJoY", title: "Fashion style", cat: "Fashion" },
  { id: "DKZhEQaBwW3", title: "Glasses", cat: "Fashion" },
  { id: "DeRvV7tIweA", title: "Camera battery charger & SSD", cat: "Tech" },
  { id: "DcubwVaIhYI", title: "Tech speaker", cat: "Tech" },
  { id: "DR2Q5m7iCjb", title: "Calorie counter app", cat: "Tech" },
  { id: "DX99Dl8xH5_", title: "Stress watch app", cat: "Tech" },
  { id: "DYvL3gFodut", title: "AirPods case accessories", cat: "Tech" },
  { id: "Db6Rv8fRZaU", title: "iPhone case & light holder", cat: "Tech" },
  { id: "DbYs4y6I9uN", title: "Fragment Dossier", cat: "Lifestyle" },
  { id: "DbBi7iToEXY", title: "Tottwoo couple bracelet", cat: "Lifestyle" },
  { id: "DWpYfPuiNXh", title: "Vlog", cat: "Lifestyle" },
];
const cats: Cat[] = ["Beauty", "Fashion", "Tech", "Lifestyle", "Travel"];
const palettes: Record<Cat, { note: string; colors: string[] }> = {
  Beauty: { note: "soft skin tones, rose and clean light", colors: ["#f4cfd0", "#c98a8f", "#8d4658", "#f6ede1"] },
  Fashion: { note: "deep tones, gold detail, high contrast", colors: ["#d8bd8f", "#6d4a2a", "#2a0a15", "#f6ede1"] },
  Tech: { note: "cool, quiet and precise", colors: ["#cfd6dd", "#6b7787", "#2f3744", "#1a0b14"] },
  Lifestyle: { note: "warm, lived-in and relaxed", colors: ["#e8d2b5", "#b98a6a", "#6a3b4a", "#2d1019"] },
  Travel: { note: "sea, light and open air", colors: ["#d9e4e3", "#8fa9a8", "#4a6b72", "#2a2330"] },
};
const igUrl = (r: { id: string; type?: "p" }) => `https://www.instagram.com/${r.type === "p" ? "p" : "reel"}/${r.id}/`;

// Brand messages from your UGC portfolio: public/proof/01.png … 10.png
const PROOF = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"].map((n) => [`/proof/${n}.png`]);

// Profile screenshots: public/stats/instagram.jpg, tiktok.png, youtube.jpg (add youtube.jpg when you have it)
const platforms = [
  { name: "Instagram", icon: "ig", url: social[0].url, shot: "/stats/instagram.jpg", cap: "153K followers · 1.0M views in the last 30 days" },
  { name: "TikTok", icon: "tt", url: social[1].url, shot: "/stats/tiktok.png", cap: "Sponsored TikTok and UGC" },
  { name: "YouTube", icon: "yt", url: social[2].url, shot: "/stats/youtube.jpg", cap: "Longer reviews and storytelling" },
];
const audience = [{ v: 70, big: "70%", l: "women" }, { v: 95, big: "95%", l: "USA & Europe" }];

// Your own video files: put them in public/videos/ and list them here.
const videos: { src: string; title: string; poster?: string }[] = [
  // { src: "/videos/my-film.mp4", title: "Skincare film", poster: "/image/IMG_2092.jpg" },
];
const projectTypes = ["UGC video", "Reel or carousel", "Product demo or unboxing", "Hotel or travel", "Photos", "Not sure yet"];

/* =====================================================================
   CALENDAR (rebuilt from today's date on every visit; next 7 days booked)
   ===================================================================== */
function Availability() {
  const [days, setDays] = useState<{ w: string; d: string; booked: boolean; today: boolean; full: string }[]>([]);
  useEffect(() => {
    setDays(Array.from({ length: 14 }, (_, i) => {
      const x = new Date(); x.setDate(x.getDate() + i);
      return { w: x.toLocaleDateString("en-GB", { weekday: "short" }), d: x.toLocaleDateString("en-GB", { day: "numeric", month: "short" }), booked: i < 7, today: i === 0, full: x.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" }) };
    }));
  }, []);
  return (
    <div className="avail" aria-label="Availability">
      {days.map((x) => x.booked
        ? <div className="slot booked" key={x.full} aria-label={`${x.full}, booked`}><span>{x.today ? "Today" : x.w}</span><b>{x.d}</b><i>Booked</i></div>
        : <a className="slot open" key={x.full} href={`mailto:${email}?subject=${encodeURIComponent("Booking request: " + x.full)}`}><span>{x.w}</span><b>{x.d}</b><i>Request</i></a>)}
    </div>
  );
}

/* =====================================================================
   PAGE
   ===================================================================== */
export default function Home() {
  const [files, setFiles] = useState<string[] | null | undefined>(undefined); // undefined = still loading
  const [cat, setCat] = useState<Cat>("Beauty");
  const [fcat, setFcat] = useState<Cat>("Beauty");
  const [lb, setLb] = useState<null | { items: string[][]; i: number }>(null);
  const [reel, setReel] = useState<null | Reel>(null);
  const [bad, setBad] = useState<Record<number, true>>({});
  const [noShot, setNoShot] = useState<Record<string, true>>({});
  const [f, setF] = useState({ name: "", email: "", brand: "", type: projectTypes[0], details: "" });

  useEffect(() => {
    let live = true;
    fetch("/image/index.json").then((r) => (r.ok ? r.json() : Promise.reject())).then((j) => live && setFiles(Array.isArray(j) ? (j as string[]) : null)).catch(() => live && setFiles(null));
    return () => { live = false; };
  }, []);

  const step = (d: number) => setLb((s) => (s ? { ...s, i: (s.i + d + s.items.length) % s.items.length } : s));
  useEffect(() => {
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setLb(null); setReel(null); }
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k);
  }, []);

  const pick = (...bases: string[]) => (files === undefined ? [] : bases.flatMap((b) => urls(b, files)));
  const gal: string[][] = files === undefined ? [] : files ? files.filter((n) => WEB.test(n)).map((n) => [IMGDIR + encodeURIComponent(n)]) : FALLBACK_NAMES.map((n) => urls(n, null));
  const visible = gal.map((g, i) => ({ g, i })).filter((x) => !bad[x.i]);
  const collage = [pick("IMG_4816", "IMG_2319"), pick("IMG_5214", "IMG_1701"), pick("IMG_6704", "IMG_4616"), pick("IMG_2092", "IMG_5216")];

  const worldReels = reels.filter((r) => r.cat === cat);
  const filmReels = reels.filter((r) => r.cat === fcat);
  const send = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const body = `Name: ${f.name}\nEmail: ${f.email}\nBrand / company: ${f.brand}\nProject type: ${f.type}\n\nProject details:\n${f.details}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent("Collaboration enquiry: " + f.brand)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="site">
      <header className="top">
        <a href="#home" className="logo">Maarch<span className="gold">27</span></a>
        <nav aria-label="Main"><a href="#about">About</a><a href="#proof">Proof</a><a href="#portfolio">Portfolio</a><a href="#services">Services</a><a href="#contact">Contact</a></nav>
        <a className="pill" href="#book">Book me</a>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Luxury UGC creator · USA &amp; France · Booked worldwide</p>
          <h1><span className="spark s1">✦</span><span className="spark s2">✦</span>Mariam <em className="gold">Ch</em></h1>
          <span className="rot" aria-hidden="true"><span>Beauty</span><span>Fashion</span><span>Tech</span><span>Lifestyle</span><span>Travel</span></span>
          <p className="lede">Films that make people stop, feel and buy. Made for 500+ brands, with a limited number of spots each month.</p>
          <div className="actions"><a className="btn" href="#book">Work with me</a><a className="btn line" href="#portfolio">See my work</a></div>
        </div>
        <div className="hero-img"><Photo cands={pick("IMG_2688", "IMG_8716", "IMG_5214", "Tezza-5004")} alt="Mariam, luxury UGC creator" pos="center 20%" eager /></div>
        <div className="chip a"><b className="gold">153K</b><span>Instagram followers</span></div>
        <div className="chip b"><b className="gold">500+</b><span>brands trusted me</span></div>
      </section>

      <div className="marquee" aria-label="Brands I have worked with">
        <div className="row">{[...tickerA, ...tickerA].map((b, i) => <span key={i}>{b}</span>)}</div>
        <div className="row">{[...tickerB, ...tickerB].map((b, i) => <span key={i}>{b}</span>)}</div>
      </div>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="collage">{collage.map((c, i) => <div key={i} className={`c c${i + 1}`}><Photo cands={c} alt={`Mariam, photo ${i + 1}`} /></div>)}</div>
        <div>
          <p className="no">01 — The creator</p>
          <h2>A creator who treats every video like a <em className="gold">campaign.</em></h2>
          <p>I’m a creator and graphic designer based between the USA and France, with 4+ years across beauty, skincare, fashion, travel, tech and lifestyle. I work with fast-growing startups and established international names alike.</p>
          <p>My work is strategy-driven: creative direction, storytelling, editing and viral hooks, tailored to each brand’s identity and goals. My pricing depends on scope, usage rights and production, not on follower count alone.</p>
          <ul className="tags">{skills.map((s) => <li key={s}>{s}</li>)}</ul>
        </div>
      </section>

      {/* WHY ME */}
      <section className="why" id="why">
        <p className="no">02 — Why me</p>
        <h2>Why <em className="gold">me?</em></h2>
        <ol>{why.map(([t, d]) => <li key={t}><h3>{t}</h3><p>{d}</p></li>)}</ol>
      </section>

      {/* PROOF: platforms */}
      <section className="proof" id="proof">
        <div className="head"><div><p className="no">03 — Proof</p><h2>Real profiles. <em className="gold">Real audience.</em></h2></div>
          <div className="donuts">{audience.map((a) => (
            <div key={a.l} className="donut"><i style={{ background: `conic-gradient(var(--gold-d) ${a.v * 3.6}deg, rgba(91,36,41,.14) 0)` }}><b>{a.big}</b></i><span>{a.l}</span></div>
          ))}</div>
        </div>
        <div className="plat">
          {platforms.map((p) => (
            <a key={p.name} className="pcard" href={p.url} target="_blank" rel="noreferrer">
              <div className="pshot">
                {noShot[p.name] ? <div className="pfallback"><Icon name={p.icon} /><b>{p.name}</b><span>Watch on {p.name}</span></div>
                  : <Photo cands={[p.shot]} alt={`${p.name} profile of Mariam`} pos="top" onFail={() => setNoShot((s) => ({ ...s, [p.name]: true }))} />}
              </div>
              <div className="pcap"><span className="pi"><Icon name={p.icon} />{p.name}</span><small>{p.cap}</small></div>
            </a>
          ))}
        </div>
      </section>

      {/* PROOF: brand messages */}
      <section className="says">
        <div className="head"><div><p className="no">04 — Kind words</p><h2>What brands <em className="gold">say.</em></h2></div><p>Real messages from brands I’ve worked with. Tap one to read it.</p></div>
        <div className="wall">{PROOF.map((c, i) => (
          <button key={i} className="shot" onClick={() => setLb({ items: PROOF, i })} aria-label={`Open brand message ${i + 1}`}><Photo cands={c} alt={`Message from a brand, ${i + 1}`} /></button>
        ))}</div>
      </section>

      {/* PORTFOLIO */}
      <section className="work" id="portfolio">
        <div className="head"><div><p className="no">05 — Selected work</p><h2>A portfolio <em className="gold">in light.</em></h2></div><p>Tap any photo to see it larger.</p></div>
        <div className="gal">{gal.map((g, i) => bad[i] ? null : (
          <button key={i} className="g" onClick={() => setLb({ items: visible.map((v) => v.g), i: Math.max(0, visible.findIndex((v) => v.i === i)) })} aria-label={`Open photo ${i + 1}`}>
            <Photo cands={g} alt={`Mariam portfolio photo ${i + 1}`} onFail={() => setBad((s) => ({ ...s, [i]: true }))} />
          </button>
        ))}</div>
      </section>

      {/* PICK A WORLD */}
      <section className="reels" id="reels">
        <div className="head"><div><p className="no">06 — Campaigns</p><h2>Pick a world. <em className="gold">Press play.</em></h2></div><p>Real campaigns from my Instagram. Choose a category, then press a cover to watch.</p></div>
        <div className="chips" role="tablist">{cats.map((c) => <button key={c} role="tab" aria-selected={cat === c} className={cat === c ? "on" : ""} onClick={() => setCat(c)}>{c}</button>)}</div>
        <div className="palette"><div>{palettes[cat].colors.map((c) => <i key={c} style={{ background: c }} title={c} />)}</div><p>{cat} palette: {palettes[cat].note}</p></div>
        <div className="reel-grid">
          {worldReels.length ? worldReels.map((r) => (
            <button key={r.id} className="reel" onClick={() => setReel(r)} aria-label={`Play ${r.title}`}>
              <iframe className="embed" src={`${igUrl(r)}embed`} title="" loading="lazy" tabIndex={-1} aria-hidden="true" />
              <Photo cands={[`/reels/${r.id}.jpg`, `/reels/${r.id}.png`]} alt="" className="cover" />
              <span className="play" aria-hidden="true">▶</span><strong>{r.title}</strong>
            </button>
          )) : (
            <a className="reel" href={franceIG} target="_blank" rel="noreferrer"><span className="play" aria-hidden="true">↗</span><strong>Life in France on @maarch_in_france</strong></a>
          )}
        </div>
      </section>

      {/* FEATURED FILMS (all films, same worlds) */}
      <section className="films">
        <div className="head"><div><p className="no">07 — Films</p><h2>Featured <em className="gold">films.</em></h2></div><p>Every film, by world. Press play right here.</p></div>
        <div className="chips dark" role="tablist">{cats.map((c) => <button key={c} role="tab" aria-selected={fcat === c} className={fcat === c ? "on" : ""} onClick={() => setFcat(c)}>{c}</button>)}</div>
        <div className="film-row" key={fcat}>
          {filmReels.length ? filmReels.map((r) => (
            <figure key={r.id}><iframe src={`${igUrl(r)}embed`} title={r.title} loading="lazy" allowFullScreen /><figcaption>{r.title}</figcaption></figure>
          )) : (
            <a className="film-link" href={franceIG} target="_blank" rel="noreferrer"><b>Life in France</b><span>Watch on @maarch_in_france ↗</span></a>
          )}
          {fcat === "Lifestyle" && videos.map((v) => (<figure key={v.src}><video src={v.src} poster={v.poster} controls muted loop playsInline preload="metadata" /><figcaption>{v.title}</figcaption></figure>))}
        </div>
      </section>

      {/* BRANDS */}
      <section className="trusted">
        <div className="head"><div><p className="no">08 — Brands</p><h2>Worked with <em className="gold">500+ brands.</em></h2></div><p>A few of the names I’ve created for, from global beauty houses to new launches.</p></div>
        <ul className="logos">{brands.map(([name, file]) => (
          <li key={file}><div className="shape"><Photo cands={[`/brands/${file}.png`]} alt={name} pos="center" /></div><span>{name}</span></li>
        ))}</ul>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="head"><div><p className="no">09 — Services</p><h2>The atelier <em className="gold">of content.</em></h2></div><p>A bespoke offering for beauty, fashion, tech and lifestyle brands. Packages depend on scope and usage rights, so tell me the goal and I’ll shape the format and quote.</p></div>
        <ul>{services.map(([t, d, inc], i) => (
          <li key={t}><span className="n">{String(i + 1).padStart(2, "0")}</span><h3>{t}</h3><p>{d}<small>{inc}</small></p>
            <a href={`mailto:${email}?subject=${encodeURIComponent("Enquiry: " + t)}`} aria-label={`Ask about ${t}`}>Ask about this ↗</a></li>
        ))}</ul>
      </section>

      {/* BOOK */}
      <section className="book" id="book">
        <Rule />
        <div className="head"><div><p className="no">10 — Booking</p><h2>Work with <em className="gold">me.</em></h2></div><p>Choose a date and send me your request. I reply by email to confirm your collaboration spot.</p></div>
        <Availability />
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="cwrap">
          <div><p className="no">11 — Business inquiries</p><h2>Let’s create something <em className="gold">unforgettable.</em></h2>
            <p>Share the product, the goal and the timeline. Tell me about your brand and I’ll take it from there.</p>
            <a className="mail" href={`mailto:${email}`}>{email}</a>
            <ul className="soc">{social.map((s) => <li key={s.name}><a href={s.url} target={s.icon === "mail" ? undefined : "_blank"} rel="noreferrer" aria-label={s.name}><Icon name={s.icon} /><span>{s.name}</span></a></li>)}</ul>
          </div>
          <form onSubmit={send}>
            <label>Your name<input required value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} autoComplete="name" /></label>
            <label>Email address<input required type="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} autoComplete="email" /></label>
            <label>Brand or company<input required value={f.brand} onChange={(e) => setF({ ...f, brand: e.target.value })} autoComplete="organization" /></label>
            <label>Project type<select value={f.type} onChange={(e) => setF({ ...f, type: e.target.value })}>{projectTypes.map((t) => <option key={t}>{t}</option>)}</select></label>
            <label>Project details<textarea required rows={5} value={f.details} onChange={(e) => setF({ ...f, details: e.target.value })} placeholder="Product, goal, timeline, usage rights…" /></label>
            <button className="btn gold-btn" type="submit">Send enquiry</button>
          </form>
        </div>
      </section>

      <footer className="foot">
        <a href="#home" className="logo">Maarch<span className="gold">27</span></a>
        <ul className="icons">{social.map((s) => <li key={s.name}><a href={s.url} target={s.icon === "mail" ? undefined : "_blank"} rel="noreferrer"><Icon name={s.icon} /><span>{s.name}</span></a></li>)}</ul>
        <small>© {new Date().getFullYear()} Maarch27</small>
      </footer>

      {lb && (
        <div className="modal" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={() => setLb(null)}>
          <Photo cands={lb.items[lb.i]} alt="Enlarged view" className="big" />
          <button className="x" aria-label="Close">×</button>
          {lb.items.length > 1 && (<>
            <button className="nav prev" aria-label="Previous" onClick={(e) => { e.stopPropagation(); step(-1); }}>‹</button>
            <button className="nav next" aria-label="Next" onClick={(e) => { e.stopPropagation(); step(1); }}>›</button>
          </>)}
        </div>
      )}
      {reel && (
        <div className="modal" role="dialog" aria-modal="true" aria-label={reel.title} onClick={() => setReel(null)}>
          <div className="frame" onClick={(e) => e.stopPropagation()}>
            <iframe src={`${igUrl(reel)}embed`} title={reel.title} allowFullScreen />
            <a href={igUrl(reel)} target="_blank" rel="noreferrer">Open on Instagram</a>
          </div>
          <button className="x" aria-label="Close" onClick={() => setReel(null)}>×</button>
        </div>
      )}
    </main>
  );
}
