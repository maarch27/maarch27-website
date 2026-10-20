# Connect the booking calendar to your Google Calendar

Once this is done (about 10 minutes, only once):
- anything in your Google Calendar automatically blocks that time on the website, so you control your availability just by adding events;
- every booking made on the website appears in your Google Calendar (red event, with the brand's name, email and project details) and you also get the email.

Until it is connected, the calendar still works: bookings arrive by email only.

## 1. Create a Google "robot" account for the website
1. Go to https://console.cloud.google.com and sign in with collaborationmaarch27@gmail.com
2. At the top, click the project picker → **New project** → name it `maarch27-website` → **Create**
3. In the search bar type **Google Calendar API** → open it → **Enable**
4. In the search bar type **Service accounts** → **+ Create service account**
   - Name: `website-booking` → **Create and continue** → **Done** (no roles needed)
5. Click the new service account → **Keys** tab → **Add key** → **Create new key** → **JSON** → **Create**.
   A small `.json` file downloads. Keep it private.

## 2. Let it use your calendar
1. Open https://calendar.google.com → ⚙️ **Settings**
2. On the left, under *Settings for my calendars*, click your calendar (your name)
3. **Share with specific people or groups** → **+ Add people and groups**
4. Paste the service account email (it looks like `website-booking@maarch27-website.iam.gserviceaccount.com`,
   you can find it in the JSON file as `client_email`)
5. Permission: **Make changes to events** → **Send**

## 3. Give the keys to Vercel
Vercel → your `maarch27-website` project → **Settings** → **Environment Variables**. Add three:

| Name | Value |
|---|---|
| `GOOGLE_CLIENT_EMAIL` | the `client_email` from the JSON file |
| `GOOGLE_PRIVATE_KEY` | the `private_key` from the JSON file, the whole thing including `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` |
| `GOOGLE_CALENDAR_ID` | `collaborationmaarch27@gmail.com` |

Then **Deployments** → the latest one → **⋯** → **Redeploy**.

## 4. Check it
Open `https://maarch27-website.vercel.app/api/availability`. It should say `"connected":true`.
Add a test event in your Google Calendar on a day the website shows as open at 14:00 → refresh the site → that time disappears.

## Changing the times
In `app/page.tsx`, near the top of the booking calendar:
- `MAIN_SLOT` is the usual time (14:00–15:00)
- `EXTRA_SLOTS` are the occasional second times
- `OPEN_CHANCE` is how many days are open (0.42 = about 4 in 10)
- `SECOND_SLOT_CHANCE` is how often an open day gets a second time
