# Portfolio media folder

Add approved portfolio files here, for example:
- `beauty reel cover.jpg`
- `tech ugc cover.jpg`
- `fashion editorial.jpg`
- `travel photo.jpg`

Keep filenames simple and use optimized WebP/JPEG for photos and MP4 only for short videos where appropriate.
Update `app/page.tsx` to use these assets. Do not upload client-confidential assets or private analytics screenshots without permission.

Recommended portfolio item fields when we make this data-driven:
- title and category
- media type (video or photo)
- thumbnail path
- optional video path or public Instagram URL
- brand name only where you have permission to display it
- verified metric, platform and reporting period

## Photos (important)
Put every photo in `public/image/` (or leave them in `app/image/`; the script copies them).
`npm run dev` and `npm run build` automatically run `scripts/gen-images.mjs`, which converts HEIC to JPG
and writes `public/image/index.json` so every photo appears in the portfolio.
Optional extras: `public/stats/youtube.jpg` (YouTube profile screenshot), `public/reels/<reel-id>.jpg` (Instagram reel covers), `public/videos/*.mp4` (list them in `videos` in `app/page.tsx`).
