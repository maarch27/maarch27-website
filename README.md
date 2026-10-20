# Maarch27 website

One website that adapts automatically to computers, tablets and phones (the layout changes at screen widths
960px and 560px in `globals.css`). Nothing separate to maintain for phone.

## Where to change things

Only these files make up the live website. Edit them, nothing else.

| What | File |
| --- | --- |
| All text, sections, photos, reels, brands, services | `app/page.tsx` (top of the file has the lists) |
| Colours, fonts, spacing, shapes, phone layout | `globals.css` |
| Page title and description (Google, link previews) | `app/layout.tsx` |
| Photos | `public/image/` (or drop new ones in `image/`, they are copied automatically) |
| Brand logos | `public/brands/` |
| Screenshots (Instagram, TikTok) | `public/stats/` |

Files at the top level named `page.tsx` or `layout.tsx` were old copies and have been removed: only the ones
inside `app/` count.

## Handy edits in `app/page.tsx`

- First-page photo: `HERO` near the top.
- Reels and their categories: the `reels` list.
- "More about me" text: `meIntro` and `meFacets`.
- Email address: `email`.

## Commands

- `npm run dev` : preview on your computer at http://localhost:3000 (open the same address on your phone through the Codespace port link to check mobile)
- `npm run covers` : download the real Instagram covers for the reels
- Publish: `git add -A`, `git commit -m "what changed"`, `git push origin main`. Vercel updates the live site after about a minute.

## Inquiry form

The form posts to FormSubmit and sends to the email in `app/page.tsx`. On the very first test message,
FormSubmit emails an "Activate Form" button to that address: click it once.

## Inquiry form (emails to your Gmail)
- Default: FormSubmit. After the first test message, open the "Activate form" email in Gmail (check Spam) and click it once.
- Active: the Web3Forms key is already in `app/page.tsx` (`W3F_KEY`), so no activation is needed. To change it, edit that line or set `NEXT_PUBLIC_WEB3FORMS_KEY` in Vercel.

## Calendar
In `app/page.tsx`, function `Availability`: `HOURS` = call times (12:00 to 16:00 France time), 3 to 4 days are booked at random, 2 to 3 times per open day.
