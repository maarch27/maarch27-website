# Deploy MAARCH_27 to Vercel

1. Create a Git repository for this folder and push it to a private or public GitHub repository.
2. Sign in to Vercel and import the repository. Framework detection should identify Next.js.
3. In Project Settings → Environment Variables, add `NEXT_PUBLIC_CALENDLY_URL` with your actual Calendly event URL.
4. Deploy and open the Vercel preview URL. Check mobile layout, navigation, external links and the calendar embed.
5. Register `maarch27.com` with a domain registrar if it is available, then add it in Vercel Project Settings → Domains.
6. Apply the exact DNS records Vercel provides at your registrar. Wait for DNS/SSL validation; do not guess the records.
7. Re-deploy if needed and verify both the apex domain and `www` behavior. Choose one canonical domain and redirect the other.

## Not yet configured

- No domain has been purchased or verified as available.
- No GitHub repository or Vercel project has been created from this workspace.
- No real Calendly URL has been supplied.
- The inquiry form does not have a server-side delivery backend.
- Privacy notice, legal notice, analytics and cookie choices must be reviewed based on the final services and data collected.
