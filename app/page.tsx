"use client";

import { useEffect, useState } from "react";

/* =====================================================================
   YOUR DETAILS
   ===================================================================== */
const email = "Collaborationmaarch27@gmail.com";
const social = [
  { name: "Instagram", icon: "ig", url: "https://www.instagram.com/maarch_27/" },
  { name: "TikTok", icon: "tt", url: "https://www.tiktok.com/@maarch_27" },
  { name: "YouTube", icon: "yt", url: "https://youtube.com/@maarch_27" },
  { name: "Pinterest", icon: "pin", url: "https://pin.it/3zNEyUu4A" },
  { name: "Email", icon: "mail", url: `mailto:${email}` },
];
const franceIG = "https://www.instagram.com/maarch_in_france/";

/* =====================================================================
   PHOTOS  (all live in public/image/)
   HERO is the first-page picture: change this one filename to swap it.
   ===================================================================== */
const HERO = "_hero-collage.jpg";
const HERO_POS = "50% 50%";
const P = (n: string) => "/image/" + encodeURIComponent(n);

// The four photos beside "About me"
const HERO4 = ["paris-bag-1.jpg", "paris-bag-2.jpg", "paris-bag-3.jpg", "paris-bag-4.jpg"]; // already inside the hero collage
const ABOUT = ["facial-gua-sha.jpg", "glasses-selfie.jpg", "autumn-bench.jpg"];

// Every photo is used in exactly one place on the site, so nothing repeats.
// Pick a world (per category) and Featured films (per category) take the photos below.
// Everything else in public/image (including any photo you add later) goes to "My creative work".
type Cat = "Beauty" | "Fashion" | "Tech" | "Lifestyle" | "Travel";
const cats: Cat[] = ["Beauty", "Fashion", "Tech", "Lifestyle", "Travel"];
const worldPhotos: Record<Cat, string[]> = {
  Beauty: ["green-mask.jpg"],
  Fashion: ["IMG_4554.JPG", "IMG_4816.JPG", "street-brown.jpg"],
  Tech: ["IMG_2092.JPG", "IMG_8716.jpg"],
  Lifestyle: ["filming-setup.jpg", "IMG_4830.JPG"],
  Travel: ["IMG_5216.JPG"],
};
const filmPhotos: Record<Cat, string[]> = {
  Beauty: ["IMG_2319.jpg", "exmiloo-brow.jpg", "armani-violins.jpg"],
  Fashion: ["IMG_4616.JPG", "bowling-polka.jpg", "IMG_1434.JPG"],
  Tech: [],
  Lifestyle: ["IMG_6704.jpg", "mask-blue-towel.jpg"],
  Travel: ["Tezza-8005.JPG"],
};
const KNOWN = ["IMG_1434.JPG","IMG_1701.JPG","IMG_2092.JPG","IMG_2319.jpg","IMG_4554.JPG","IMG_4560.JPG","IMG_4562.JPG","IMG_4616.JPG","IMG_4816.JPG","IMG_4830.JPG","IMG_5214.jpg","IMG_5216.JPG","IMG_6559.JPG","IMG_6704.jpg","IMG_8716.jpg","Tezza-8005.JPG","armani-gallery.jpg","armani-violins.jpg","autumn-bench-wide.jpg","autumn-bench.jpg","bowling-polka.jpg","exmiloo-brow.jpg","facial-gua-sha.jpg","filming-setup.jpg","glasses-selfie.jpg","camera-pool.jpg","swimwear-edit.jpg","tripod-bags.jpg","watch-hand.jpg","shoes-italo.jpg","cerave.jpg","camera-orange.jpg","dossier-lying.jpg","dossier-flatlay.jpg","mirror-room.jpg","travel-grid.jpg","clarins.jpg","green-mask.jpg","mask-blue-towel.jpg","paris-bag-1.jpg","paris-bag-2.jpg","paris-bag-3.jpg","paris-bag-4.jpg","street-brown.jpg"];
const USED = new Set<string>([HERO, ...HERO4, ...ABOUT, ...Object.values(worldPhotos).flat(), ...Object.values(filmPhotos).flat()]);
// gallery order: portrait / landscape mixed for a balanced wall
const GALLERY_FIRST = ["mask-blue-towel.jpg", "IMG_6704.jpg", "armani-gallery.jpg", "IMG_4562.JPG", "IMG_6559.JPG", "IMG_4560.JPG"];

type Reel = { id: string; type?: "p"; title: string; cat: Cat };
const reels: Reel[] = [
  { id: "Dc1Z3PEx-yz", title: "Skin glow with Anua", cat: "Beauty" },
  { id: "DcctOHOoE_w", title: "Pixel Pure skincare", cat: "Beauty" },
  { id: "DV_nhb5CP56", title: "Beauty favourites", cat: "Beauty" },
  { id: "DSGG3RtCFDl", title: "Beauty favourites", cat: "Beauty" },
  { id: "DVeUDLMCDY-", title: "Hair care ritual", cat: "Beauty" },
  { id: "DUnxGS0iN5e", title: "Hair care ritual", cat: "Beauty" },
  { id: "Daiay-VImXK", title: "Bracelet & necklace", cat: "Fashion" },
  { id: "DeHstaVIgYr", title: "Pop-up bag", cat: "Fashion" },
  { id: "DeBBztMI6Rl", title: "Fashion week", cat: "Fashion" },
  { id: "Ddhn4UKiGif", type: "p", title: "Mercedes-Benz event style", cat: "Fashion" },
  { id: "DWGtfNoCJoY", title: "Fashion style", cat: "Fashion" },
  { id: "DKZhEQaBwW3", title: "Sunglasses", cat: "Fashion" },
  { id: "DeRvV7tIweA", title: "Camera battery charger & SSD", cat: "Tech" },
  { id: "DcubwVaIhYI", title: "Tech speaker", cat: "Tech" },
  { id: "DR2Q5m7iCjb", title: "Calorie counter app", cat: "Tech" },
  { id: "DX99Dl8xH5_", title: "Stress watch app", cat: "Tech" },
  { id: "DYvL3gFodut", title: "AirPods case accessories", cat: "Tech" },
  { id: "Db6Rv8fRZaU", title: "iPhone case & light holder", cat: "Tech" },
  { id: "DbYs4y6I9uN", title: "Fragment Dossier", cat: "Lifestyle" },
  { id: "DbBi7iToEXY", title: "Couple bracelet", cat: "Lifestyle" },
  { id: "DWpYfPuiNXh", title: "Vlog", cat: "Lifestyle" },
];
// Cover photos for reels (real Instagram covers in public/reels/<id>.jpg win when present)
const coverPool: Record<Cat, string[]> = {
  Beauty: ["IMG_4562.JPG", "mask-blue-towel.jpg", "IMG_6559.JPG", "armani-gallery.jpg", "glasses-selfie.jpg", "IMG_4560.JPG"],
  Fashion: ["autumn-bench-wide.jpg", "IMG_5216.JPG", "glasses-selfie.jpg", "IMG_4560.JPG", "armani-gallery.jpg", "IMG_4562.JPG"],
  Tech: ["filming-setup.jpg", "IMG_6704.jpg", "IMG_4830.JPG", "IMG_1434.JPG", "armani-gallery.jpg", "IMG_4554.JPG"],
  Lifestyle: ["autumn-bench-wide.jpg", "glasses-selfie.jpg", "IMG_4562.JPG"],
  Travel: ["IMG_5216.JPG"],
};
// "More about me": edit these lines freely, they are only text.
const meIntro = "Behind every video there is a real person, and brands tell me that is exactly why it works.";
const meFacets: [string, string][] = [
  ["Between two worlds", "I split my life between the USA and France and travel often, so my content carries both: the polish of Paris and the ease of everyday life."],
  ["Hands-on, start to finish", "I plan, style, film, edit and voice every piece myself in my own studio with professional light and camera, so nothing gets lost between the idea and the final film."],
  ["Genuine over perfect", "I only make content that feels like a real recommendation from a friend with great taste, never a stiff ad. That is what keeps people watching and buying."],
  ["Easy to work with", "Clear briefs, quick replies, honest ideas and delivery on time. Brands come back because the process feels as good as the result."],
];
// Known cover matches (reel id -> photo of that exact video). Add more as you confirm them.
const reelCover: Record<string, string> = { "Dc1Z3PEx-yz": "IMG_1701.JPG", "DV_nhb5CP56": "IMG_5214.jpg" };
const igUrl = (r: { id: string; type?: "p" }) => `https://www.instagram.com/${r.type === "p" ? "p" : "reel"}/${r.id}/`;

const palettes: Record<Cat, { note: string; c: [string, string, string, string] }> = {
  Beauty: { note: "soft skin tones, rose and clean light", c: ["#f4cfd0", "#c98a8f", "#8d4658", "#f6ede1"] },
  Fashion: { note: "deep tones, gold detail, high contrast", c: ["#d8bd8f", "#6d4a2a", "#3a1217", "#f6ede1"] },
  Tech: { note: "cool, quiet and precise", c: ["#d5dbe0", "#8793a1", "#3f4856", "#f4efe6"] },
  Lifestyle: { note: "warm, lived-in and relaxed", c: ["#ecd7b8", "#b98a6a", "#7a3b45", "#f6ede1"] },
  Travel: { note: "city light, golden hour and open air", c: ["#e6dcc8", "#b9a27a", "#7d5a3c", "#f6ede1"] },
};

type Item = { kind: "reel"; r: Reel } | { kind: "photo"; src: string; label: string };
function itemsFor(cat: Cat, photos: Record<Cat, string[]>): Item[] {
  const rs: Item[] = reels.filter((r) => r.cat === cat).map((r) => ({ kind: "reel", r }));
  const ps: Item[] = photos[cat].map((s) => ({ kind: "photo", src: s, label: cat }));
  const out: Item[] = [];
  for (let i = 0; i < Math.max(rs.length, ps.length); i++) { if (rs[i]) out.push(rs[i]); if (ps[i]) out.push(ps[i]); }
  return out;
}

const brands: [string, string][] = [
  ["Armani", "armani"], ["Kylie Cosmetics", "kylie-cosmetics"], ["Maybelline", "maybelline"], ["L’Oréal Paris", "loreal-paris"], ["NYX", "nyx"], ["Huda Beauty", "huda-beauty"],
  ["Anua", "anua"], ["Numbuzin", "numbuzin"], ["Glossybox", "glossybox"], ["Heimish", "heimish"], ["Halara", "halara"], ["Temu", "temu"],
  ["Shein", "shein"], ["Pepper Mayo", "pepper-mayo"], ["Italo Jewelry", "italo-jewelry"], ["JW Pei", "jw-pei"], ["Von Dutch", "von-dutch"], ["Bob and Brad", "bob-and-brad"],
  ["Totwoo", "totwoo"], ["Pascal", "pascal"], ["Doogee", "doogee"], ["Blackview", "blackview"], ["Perfect Corset", "perfect-corset"],
];
const tickerA = brands.slice(0, 12).map((b) => b[0]);
const tickerB = brands.slice(12).map((b) => b[0]);
const shapeCycle = ["scallop", "squircle", "arch", "blob"] as const;

const skills = ["Creative direction", "Scriptwriting", "Video editing", "Viral hooks", "Voice-over", "On-camera", "Photography", "Graphic design"];
const facts: [string, string][] = [["153K", "Instagram followers"], ["500+", "brands"], ["4+", "years creating"], ["1.0M", "views in 30 days"]];

const why: { t: string; d: string; get: string[] }[] = [
  { t: "Real lifestyle, not staged ads", d: "Your product enters a real day: a morning routine, getting ready, a night out, a trip. People recognise themselves in it, so they trust it. That feeling is what turns a view into a purchase.", get: ["Genuine, natural content", "Your product in a real scene"] },
  { t: "A strategy behind every frame", d: "I start from your goal, whether that’s awareness, sales or app installs, and build the hook, the story and the call to action around it. Nothing is filmed just because it looks pretty.", get: ["Goal-led concept", "Script and hook plan"] },
  { t: "Hooks that stop the scroll", d: "The first second decides everything. I write it first, then cut the rest to earn the next second. For ads, I deliver hook variations so you can test what works.", get: ["3 hook variations", "Captions and clean cuts"] },
  { t: "A pro setup and one person to brief", d: "I have my own studio, professional camera and lighting. Concept, script, filming, editing and voice-over all come from me, so you brief one person and nothing gets lost between steps.", get: ["Studio and on-location", "Fast, simple communication"] },
  { t: "An audience that listens", d: "153K followers, 95% in the USA and Europe, 70% women. When I recommend something, a real and engaged community sees it.", get: ["Whitelisting and Spark Ads", "Usage rights available"] },
];
const versus: [string, string][] = [
  ["Generic scripts that could be for any brand", "A concept built around your product, your tone and your goal"],
  ["Content that looks like an ad and gets scrolled past", "Lifestyle content that feels like a recommendation from a friend"],
  ["Several people to brief: writer, filmer, editor", "One creator for concept, filming, editing and voice-over"],
  ["Hooks guessed once and hoped for", "Hook variations, so you can test what performs"],
  ["Followers with no clear audience", "A defined audience: 95% USA and Europe, 70% women"],
];

const services: [string, string, string][] = [
  ["UGC videos", "Natural, scroll-stopping video built around your product and campaign goal. Hook, script, filming and edit, all in one.", "Hook variations · Captions · Ready to post"],
  ["Instagram Reels", "Sponsored Reels with a strong first second, a clear story and pacing made for the feed.", "Concept · Filming · Editing"],
  ["Carousels & photos", "Styled product and lifestyle carousels with clean, editorial imagery for your feed and your site.", "Product shots · Lifestyle · Retouching"],
  ["UGC for paid ads", "Content built to convert on paid channels, with hook variations and usage rights.", "Whitelisting · Spark Ads · Extra cuts"],
  ["Demos & unboxings", "First impressions, swatches, try-ons and tutorials that feel like a recommendation, not an ad.", "Unboxing · Try-on · Tutorials"],
  ["Testimonials & interviews", "On-camera reviews and interview-style videos in a natural, trustworthy voice.", "To camera · Q&A · Reviews"],
  ["Hotels, travel & experiences", "Stays, restaurants, events and trips filmed as one cinematic story.", "Hospitality · Events · Travel"],
  ["YouTube videos", "Longer reviews and storytelling edits for deeper product education.", "Review · Story edit · Thumbnail"],
  ["Voice-over & scripting", "Professional scriptwriting and narrated edits, written in your brand’s tone.", "Script · Voice-over · Revisions"],
];
const steps = [["Brief", "You share the product, goal and timeline."], ["Concept", "I send the idea, hook and script for approval."], ["Create", "I set up, film, edit and voice it myself."], ["Deliver", "Final cuts and variations, ready to post or run as ads."]];

// Words from real messages brands sent me (Instagram DMs and emails)
const quotes: { q: string; by: string }[] = [
  { q: "The content you created was excellent and helped increase our sales even more.", by: "Gloss Room" },
  { q: "It truly seems like our product shines even brighter thanks to your amazing presence. We are beyond grateful!", by: "HeartPercent" },
  { q: "Thank you so much for creating such a beautiful vlog about our salon! We absolutely loved the way you captured the atmosphere and the whole experience.", by: "Glamour salon" },
  { q: "Your dedication and creativity have made a significant impact on our brand community.", by: "Numbuzin" },
  { q: "I really appreciate all the care you put into this. Thank you so much.", by: "Chillab" },
  { q: "Thank you so much for the photos! These glasses really suit you perfectly.", by: "where.light" },
  { q: "Hi dear, the content looks great!", by: "AMOS Professional" },
  { q: "We look forward to more collaborations with you in the future.", by: "Vraiko" },
];
const projectTypes = ["UGC video", "Reel or carousel", "Product demo or unboxing", "Hotel or travel", "Photos", "Not sure yet"];

/* =====================================================================
   SMALL PIECES
   ===================================================================== */
function Img({ src, alt, className, pos, eager, onFail, onLoad }: { src: string; alt: string; className?: string; pos?: string; eager?: boolean; onFail?: () => void; onLoad?: (e: React.SyntheticEvent<HTMLImageElement>) => void }) {
  const [bad, setBad] = useState(false);
  useEffect(() => { if (bad) onFail?.(); }, [bad]); // eslint-disable-line react-hooks/exhaustive-deps
  if (bad) return null;
  // eslint-disable-next-line @next/next/no-img-element
  return <img key={src} className={className} src={src} alt={alt} style={pos ? { objectPosition: pos } : undefined} loading={eager ? "eager" : "lazy"} onError={() => setBad(true)} onLoad={onLoad} />;
}

function Icon({ name }: { name: string }) {
  const q = { width: 21, height: 21, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
  if (name === "ig") return <svg {...q}><rect x="3" y="3" width="18" height="18" rx="5.5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.3" cy="6.7" r=".6" fill="currentColor" /></svg>;
  if (name === "tt") return <svg {...q}><path d="M14 3v11.2a3.7 3.7 0 1 1-3.7-3.7" /><path d="M14 3c.4 2.6 2 4.3 4.8 4.6" /></svg>;
  if (name === "yt") return <svg {...q}><rect x="2.5" y="5.5" width="19" height="13" rx="4" /><path d="M10 9.5v5l4.5-2.5z" fill="currentColor" /></svg>;
  if (name === "pin") return <svg {...q}><circle cx="12" cy="12" r="9.2" /><path d="M10.6 17.5l1.7-7M9.8 13.2c-.6-2.6 1.1-4.4 3-4.4 1.6 0 2.7 1.1 2.7 2.6 0 2-1.2 3.4-2.6 3.4-.8 0-1.4-.6-1.2-1.3" /></svg>;
  return <svg {...q}><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M3.5 7l8.5 6.2L20.5 7" /></svg>;
}

/* Soft shapes used to frame photos and brand badges (clip-paths, defined once). */
function polar(r: (t: number) => number, n = 180) {
  let d = "";
  for (let i = 0; i < n; i++) { const t = (i / n) * Math.PI * 2; const rr = r(t); d += `${i ? "L" : "M"}${(0.5 + rr * Math.cos(t)).toFixed(4)},${(0.5 + rr * Math.sin(t)).toFixed(4)}`; }
  return d + "Z";
}
function Shapes() {
  const shapes: Record<string, string> = {
    scallop: polar((t) => 0.455 + 0.04 * Math.cos(10 * t)),
    flower: polar((t) => 0.43 + 0.065 * Math.cos(6 * t)),
    blob: polar((t) => 0.44 + 0.04 * Math.cos(3 * t) + 0.02 * Math.sin(5 * t + 1)),
    squircle: polar((t) => 0.5 / Math.pow(Math.pow(Math.abs(Math.cos(t)), 4) + Math.pow(Math.abs(Math.sin(t)), 4), 0.25)),
    arch: "M0,1 L0,0.5 C0,0.2 0.22,0 0.5,0 C0.78,0 1,0.2 1,0.5 L1,1 Z",
    archdown: "M0,0 L1,0 L1,0.5 C1,0.8 0.78,1 0.5,1 C0.22,1 0,0.8 0,0.5 Z",
  };
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
      <defs>{Object.entries(shapes).map(([k, d]) => <clipPath key={k} id={`sh-${k}`} clipPathUnits="objectBoundingBox"><path d={d} /></clipPath>)}</defs>
    </svg>
  );
}

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

/* A designed cover for reels (shown instead of loading Instagram until pressed). */
function ReelCover({ r }: { r: Reel }) {
  const pal = palettes[r.cat].c;
  const idx = reels.filter((x) => x.cat === r.cat).indexOf(r);
  const pool = coverPool[r.cat];
  return (
    <span className="rcover" style={{ ["--a" as string]: pal[0], ["--b" as string]: pal[1], ["--c" as string]: pal[2] }}>
      <Img src={P(reelCover[r.id] ?? pool[idx % pool.length])} alt="" className="rimg" pos="center 22%" />
      <Img src={`/reels/${r.id}.jpg`} alt="" className="rimg" />
      <span className="rtag">Reel</span>
      <span className="rtitle">{r.title}</span>
    </span>
  );
}

/* =====================================================================
   PAGE
   ===================================================================== */
export default function Home() {
  const [files, setFiles] = useState<string[] | null>(null);
  const [cat, setCat] = useState<Cat>("Beauty");
  const [fcat, setFcat] = useState<Cat>("Beauty");
  const [sel, setSel] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [lb, setLb] = useState<null | { items: string[]; i: number }>(null);
  const [reel, setReel] = useState<null | Reel>(null);
  const [bad, setBad] = useState<Record<string, true>>({});
  const [noShot, setNoShot] = useState<Record<string, true>>({});
  const [f, setF] = useState({ name: "", email: "", brand: "", type: projectTypes[0], details: "" });

  useEffect(() => {
    let live = true;
    fetch("/image/index.json").then((r) => (r.ok ? r.json() : Promise.reject())).then((j) => live && Array.isArray(j) && setFiles(j as string[])).catch(() => {});
    return () => { live = false; };
  }, []);

  // soft reveal on scroll
  useEffect(() => {
    document.documentElement.classList.add("js");
    const els = Array.from(document.querySelectorAll(".rv"));
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
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

  const gallery = (() => {
    const all = files ?? KNOWN;
    const rest = all;
    const first = GALLERY_FIRST.filter((n) => rest.includes(n));
    return [...first, ...rest.filter((n) => !first.includes(n))].filter((n) => !bad[n]);
  })();
  const openPhotos = (list: string[], name: string) => setLb({ items: list.map(P), i: Math.max(0, list.indexOf(name)) });

  const world = itemsFor(cat, worldPhotos);
  const stageItems = itemsFor(fcat, filmPhotos);
  const cur = stageItems[Math.min(sel, stageItems.length - 1)];
  const switchF = (c: Cat) => { setFcat(c); setSel(0); setPlaying(false); };

  const send = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const body = `Name: ${f.name}\nEmail: ${f.email}\nBrand / company: ${f.brand}\nProject type: ${f.type}\n\nProject details:\n${f.details}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent("Collaboration enquiry: " + f.brand)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="site">
      <Shapes />
      <header className="top">
        <a href="#home" className="logo">Maarch<span className="gold sub">27</span></a>
        <nav aria-label="Main"><a href="#about">About</a><a href="#why">Why me</a><a href="#worlds">Work</a><a href="#services">Services</a><a href="#contact">Contact</a></nav>
        <a className="pill" href="#book">Book me</a>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">UGC creator · Booked worldwide</p>
          <p className="avail"><i aria-hidden="true">✦</i> Limited monthly availability <span>·</span> A brand favorite</p>
          <h1><span className="spark s1">✦</span><span className="spark s2">✦</span>Mariam <em className="gold">Ch</em></h1>
          <span className="rot" aria-hidden="true"><span>Beauty</span><span>Fashion</span><span>Tech</span><span>Lifestyle</span><span>Travel</span></span>
          <p className="lede">Films that make people stop, feel and buy. Made for 500+ brands, with a limited number of spots each month.</p>
          <div className="actions"><a className="btn" href="#book">Work with me</a><a className="btn line" href="#worlds">See my work</a></div>
        </div>
        <div className="hero-img"><Img src={P(HERO)} alt="Mariam, UGC creator" pos={HERO_POS} eager /></div>
        <div className="chip a"><b className="gold">153K</b><span>Instagram followers</span></div>
        <div className="chip b"><b className="gold">500+</b><span>brands trusted me</span></div>
      </section>

      <div className="marquee" aria-label="Brands I have worked with">
        <div className="row">{[...tickerA, ...tickerA].map((b, i) => <span key={i}>{b}</span>)}</div>
        <div className="row">{[...tickerB, ...tickerB].map((b, i) => <span key={i}>{b}</span>)}</div>
      </div>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="cluster rv" aria-label="Photos of Mariam">
          <div className="glow g2" aria-hidden="true" />
          {ABOUT.map((n, i) => (
            <div key={n} className={`cl cl${i + 1}`}><Img src={P(n)} alt={`Mariam, photo ${i + 1}`} pos="center 20%" /></div>
          ))}
        </div>
        <div className="rv">
          <p className="no">01 · About me</p>
          <h2>A lifestyle creator who turns real moments into <em className="gold">campaigns that perform.</em></h2>
          <p>I’m Mariam, a creator and graphic designer based between the USA and France. For 4+ years I’ve made lifestyle content for beauty, skincare, fashion, travel, tech and everyday brands, from fast-growing startups to international names.</p>
          <p>I don’t just film a product. I plan the strategy, set up the scene in my own studio or out in real life, write the hook, film, edit and voice it myself. Every video is built to feel genuine, because that’s what makes people watch, trust and buy.</p>
          <ul className="facts">{facts.map(([v, l]) => <li key={l}><b className="gold">{v}</b><span>{l}</span></li>)}</ul>
          <ul className="tags">{skills.map((s) => <li key={s}>{s}</li>)}</ul>
        </div>
      </section>

      {/* MORE ABOUT ME */}
      <section className="me" id="me">
        <div className="me-in">
          <div className="rv">
            <p className="no">02 · The person behind the camera</p>
            <h2>More about <em className="gold">me.</em></h2>
            <p className="me-intro">{meIntro}</p>
          </div>
          <ul className="me-list">
            {meFacets.map(([t, d], i) => (
              <li key={t} className="rv"><span className="me-n">0{i + 1}</span><div><h3>{t}</h3><p>{d}</p></div></li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHY ME */}
      <section className="why" id="why">
        <div className="head rv"><div><p className="no">03 · Why me</p><h2>Why <em className="gold">me?</em></h2></div><p>Because content that feels real performs better. Here is exactly what you get when you work with me.</p></div>
        <ol className="reasons">{why.map((w, i) => (
          <li key={w.t} className="rv">
            <span className="num gold">0{i + 1}</span>
            <div><h3>{w.t}</h3><p>{w.d}</p></div>
            <ul>{w.get.map((g) => <li key={g}>{g}</li>)}</ul>
          </li>
        ))}</ol>

        <div className="versus rv">
          <h3>Why not just <em className="gold">any creator?</em></h3>
          <div className="vs-wrap">
          <div className="vs-photos" aria-hidden="true"><Img src={P("dossier-lying.jpg")} alt="" pos="center 30%" /><Img src={P("camera-orange.jpg")} alt="" pos="center 70%" /></div>
          <div className="vs">
            <div className="vs-h">Often</div><div className="vs-h me">With me</div>
            {versus.map(([a, b]) => (<div className="vs-row" key={a}><p className="x">{a}</p><p className="y">{b}</p></div>))}
          </div>
          </div>
        </div>

        <div className="process rv">
          <h3>How we work <em className="gold">together</em></h3>
          <ol>{steps.map(([t, d], i) => <li key={t}><b className="gold">0{i + 1}</b><h4>{t}</h4><p>{d}</p></li>)}</ol>
        </div>
      </section>

      {/* RECEIPTS */}
      <section className="proof" id="proof">
        <div className="head rv"><div><p className="no">04 · Proof</p><h2>Proof, <em className="gold">not promises.</em></h2></div><p>My real profiles and the words brands have sent me after working together.</p></div>
        <div className="proof-top rv">
          <div className="plats">
            {[{ n: "Instagram", s: "/stats/instagram.jpg", c: "153K followers" }, { n: "TikTok", s: "/stats/tiktok.jpg", c: "Fashion · Beauty · Lifestyle" }].map((p) => !noShot[p.n] && (
              <button key={p.n} className="pshot" onClick={() => setLb({ items: [p.s], i: 0 })} aria-label={`Open ${p.n} screenshot`}>
                <Img src={p.s} alt={`${p.n} profile`} pos="top" onFail={() => setNoShot((s) => ({ ...s, [p.n]: true }))} />
                <span>{p.n}<small>{p.c}</small></span>
              </button>
            ))}
          </div>
          <div className="aud">
            <h3>My audience</h3>
            <div className="donuts">
              {[{ v: 70, b: "70%", l: "women" }, { v: 95, b: "95%", l: "USA & Europe" }].map((a) => (
                <div key={a.l} className="donut"><i style={{ background: `conic-gradient(var(--gold-d) ${a.v * 3.6}deg, rgba(90,34,39,.12) 0)` }}><b>{a.b}</b></i><span>{a.l}</span></div>
              ))}
            </div>
          </div>
        </div>
        <h3 className="sub rv">What brands say</h3>
        <div className="quotes rv">{quotes.map((x) => (
          <figure key={x.by} className="quote"><span className="qm gold" aria-hidden="true">“</span><blockquote>{x.q}</blockquote><figcaption>{x.by}</figcaption></figure>
        ))}</div>
      </section>

      {/* PICK A WORLD */}
      <section className="worlds" id="worlds">
        <div className="head rv"><div><p className="no">05 · Campaigns</p><h2>Pick a world. <em className="gold">Press play.</em></h2></div><p>Choose a category. Reels open in a player, photos open large.</p></div>
        <div className="chips" role="tablist">{cats.map((c) => <button key={c} role="tab" aria-selected={cat === c} className={cat === c ? "on" : ""} onClick={() => setCat(c)}>{c}</button>)}</div>
        <div className="palette"><div>{palettes[cat].c.map((c) => <i key={c} style={{ background: c }} title={c} />)}</div><p>{cat} palette: {palettes[cat].note}</p></div>
        <div className="mosaic" key={cat}>
          {world.map((it, i) => it.kind === "reel" ? (
            <button key={it.r.id} className="tile reel" onClick={() => setReel(it.r)} aria-label={`Play ${it.r.title}`}><ReelCover r={it.r} /><span className="play" aria-hidden="true">▶</span></button>
          ) : (
            <button key={it.src + i} className="tile photo" onClick={() => openPhotos(worldPhotos[cat], it.src)} aria-label={`Open ${cat} photo`}><Img src={P(it.src)} alt={`${cat} photo`} /></button>
          ))}
          {cat === "Travel" && <a className="tile more" href={franceIG} target="_blank" rel="noreferrer"><b>Life in France</b><span>More on @maarch_in_france ↗</span></a>}
        </div>
      </section>

      {/* FEATURED FILMS */}
      <section className="films">
        <div className="head rv"><div><p className="no">06 · Films</p><h2>Featured <em className="gold">films.</em></h2></div><p>Pick a world, then pick a film or a photo story from the list.</p></div>
        <div className="chips" role="tablist">{cats.map((c) => <button key={c} role="tab" aria-selected={fcat === c} className={fcat === c ? "on" : ""} onClick={() => switchF(c)}>{c}</button>)}</div>
        <div className="cinema" key={fcat}>
          <div className="stage">
            {cur?.kind === "reel" ? (
              playing ? <iframe src={`${igUrl(cur.r)}embed`} title={cur.r.title} allowFullScreen />
                : <button className="stagebtn" onClick={() => setPlaying(true)} aria-label={`Play ${cur.r.title}`}><ReelCover r={cur.r} /><span className="play big" aria-hidden="true">▶</span></button>
            ) : cur ? (
              <button className="stagebtn" onClick={() => openPhotos(filmPhotos[fcat], cur.src)} aria-label="Open photo"><Img src={P(cur.src)} alt={`${fcat} photo`} /></button>
            ) : null}
          </div>
          <ol className="playlist">
            {stageItems.map((it, i) => (
              <li key={i}><button className={i === sel ? "on" : ""} onClick={() => { setSel(i); setPlaying(false); }}>
                <span className="th">{it.kind === "photo" ? <Img src={P(it.src)} alt="" /> : <span className="thr">▶</span>}</span>
                <span className="tt"><b>{it.kind === "reel" ? it.r.title : `${fcat} story`}</b><small>{it.kind === "reel" ? "Reel" : "Photo"}</small></span>
              </button></li>
            ))}
            {fcat === "Travel" && <li><a className="more" href={franceIG} target="_blank" rel="noreferrer">More travel on @maarch_in_france ↗</a></li>}
          </ol>
        </div>
      </section>

      {/* MY CREATIVE WORK */}
      <section className="work" id="work">
        <div className="head rv"><div><p className="no">07 · Portfolio</p><h2>My creative <em className="gold">work.</em></h2></div><p>More of the content I create, from beauty rituals to city days. Tap a photo to see it larger.</p></div>
        <div className="gal">{gallery.map((n) => (
          <button key={n} className="g" onClick={() => openPhotos(gallery, n)} aria-label={`Open ${n}`}>
            <Img src={P(n)} alt="Mariam portfolio photo" onFail={() => setBad((s) => ({ ...s, [n]: true }))} onLoad={(e) => { const im = e.currentTarget; im.parentElement?.setAttribute("data-o", im.naturalHeight / im.naturalWidth > 1.3 ? "tall" : "wide"); }} />
          </button>
        ))}</div>
      </section>

      {/* BRANDS */}
      <section className="trusted">
        <div className="head rv"><div><p className="no">08 · Brands</p><h2>Worked with <em className="gold">500+ brands.</em></h2></div><p>A few of the names I’ve created for, from global beauty houses to new launches.</p></div>
        <ul className="logos">{brands.map(([name, file], i) => (
          <li key={file} className="rv">
            <div className={`badge sh-${shapeCycle[i % 4]}`}><div className={`badge-in sh-${shapeCycle[i % 4]}`}><Img src={`/brands/${file}.png`} alt={name} /></div></div>
            <span>{name}</span>
          </li>
        ))}</ul>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="head rv"><div><p className="no">09 · Services</p><h2>The atelier <em className="gold">of content.</em></h2></div><p>A bespoke offering for beauty, fashion, tech and lifestyle brands. Packages depend on scope and usage rights, so tell me the goal and I’ll shape the format and quote.</p></div>
        <ul>{services.map(([t, d, inc], i) => (
          <li key={t} className="rv"><span className="n gold">{String(i + 1).padStart(2, "0")}</span><h3>{t}</h3><p>{d}<small>{inc}</small></p>
            <a href={`mailto:${email}?subject=${encodeURIComponent("Enquiry: " + t)}`} aria-label={`Ask about ${t}`}>Ask about this ↗</a></li>
        ))}</ul>
      </section>

      {/* BOOK */}
      <section className="book" id="book">
        <div className="head rv"><div><p className="no">10 · Booking</p><h2>Work with <em className="gold">me.</em></h2></div><p>Choose a date and send me your request. I reply by email to confirm your collaboration spot.</p></div>
        <Availability />
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="cwrap">
          <div><p className="no">11 · Business inquiries</p><h2>Let’s create something <em className="gold">unforgettable.</em></h2>
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
        <a href="#home" className="logo">Maarch<span className="gold sub">27</span></a>
        <ul className="icons">{social.map((s) => <li key={s.name}><a href={s.url} target={s.icon === "mail" ? undefined : "_blank"} rel="noreferrer" aria-label={s.name}><Icon name={s.icon} /><span>{s.name}</span></a></li>)}</ul>
        <small>© {new Date().getFullYear()} Maarch27</small>
      </footer>

      {lb && (
        <div className="modal" role="dialog" aria-modal="true" aria-label="Viewer" onClick={() => setLb(null)}>
          <Img src={lb.items[lb.i]} alt="Enlarged view" className="big" />
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
