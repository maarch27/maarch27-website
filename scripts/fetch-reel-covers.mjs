// Downloads the real Instagram cover of every reel listed in app/page.tsx
// into public/reels/<id>.jpg. Run it from your Codespace:  npm run covers
// Instagram sometimes refuses automated requests; anything that fails is
// simply skipped and the site keeps using the photo cover for that reel.
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";

const page = readFileSync("app/page.tsx", "utf8");
const reels = [...page.matchAll(/\{\s*id:\s*"([^"]+)"(?:,\s*type:\s*"(p)")?/g)].map((m) => ({ id: m[1], type: m[2] === "p" ? "p" : "reel" }));
mkdirSync("public/reels", { recursive: true });
const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15";
const unesc = (s) => s.replace(/&amp;/g, "&").replace(/\\u0026/g, "&").replace(/\\\//g, "/");
let ok = 0, skipped = 0, failed = [];

for (const { id, type } of reels) {
  const out = `public/reels/${id}.jpg`;
  if (existsSync(out)) { skipped++; continue; }
  try {
    const html = await (await fetch(`https://www.instagram.com/${type}/${id}/embed/captioned/`, { headers: { "user-agent": UA } })).text();
    const m = html.match(/class="EmbeddedMediaImage"[^>]*src="([^"]+)"/) || html.match(/"display_url":"([^"]+)"/) || html.match(/property="og:image" content="([^"]+)"/);
    if (!m) throw new Error("no cover found");
    const img = await fetch(unesc(m[1]), { headers: { "user-agent": UA } });
    if (!img.ok) throw new Error("image " + img.status);
    writeFileSync(out, Buffer.from(await img.arrayBuffer()));
    ok++; console.log("saved", out);
  } catch (e) { failed.push(id); console.log("skip ", id, "-", e.message); }
  await new Promise((r) => setTimeout(r, 900));
}
console.log(`\nDone: ${ok} saved, ${skipped} already there, ${failed.length} failed.`);
if (failed.length) console.log("Failed ids (screenshot these covers instead):", failed.join(", "));
