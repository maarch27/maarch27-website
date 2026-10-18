// Run once from the project root:  node scripts/gen-images.mjs
// 1) converts every HEIC/HEIF in public/image to JPG (browsers can't show HEIC)
// 2) writes public/image/index.json so the site shows every photo automatically
import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const dir = "public/image";
if (!existsSync(dir)) { console.error(`Folder ${dir} not found. Move your photos there first (mv app/image public/image).`); process.exit(1); }

const heic = readdirSync(dir).filter((f) => /\.(heic|heif)$/i.test(f));
if (heic.length) {
  let convert;
  try { convert = (await import("heic-convert")).default; }
  catch { console.log(`Found ${heic.length} HEIC photos. Run:  npm i -D heic-convert   then run this script again.`); }
  if (convert) {
    for (const f of heic) {
      const out = join(dir, f.replace(/\.(heic|heif)$/i, ".jpg"));
      if (existsSync(out)) continue;
      try {
        const buf = await convert({ buffer: readFileSync(join(dir, f)), format: "JPEG", quality: 0.9 });
        writeFileSync(out, Buffer.from(buf));
        console.log("converted", f, "->", out.split("/").pop());
      } catch (e) { console.log("could not convert", f, String(e.message || e)); }
    }
  }
}

const web = readdirSync(dir).filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f)).sort();
writeFileSync(join(dir, "index.json"), JSON.stringify(web, null, 2));
console.log(`Done: ${web.length} photos listed in ${dir}/index.json`);
