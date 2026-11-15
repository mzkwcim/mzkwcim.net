# AdSense / Google Privacy & messaging - configuration and release gate

Decision (2026-11-15): Google Privacy & messaging as CMP. Ads permitted **only on public editorial pages under `/blog/` on `mzkwcim.net`**. No ads on portfolio, contact forms, private apps, sports-club dashboards, other subdomains, or records tools.

## Current status

- Privacy notices updated in PL and EN. Treat them as technical drafts requiring review against active vendors and applicable law.
- No AdSense publisher ID, ad tags, TCF consent message, ad units or `ads.txt` has been deployed through this change.
- Website uses Google Fonts (external CSS), Cloudflare, Turnstile on the contact form, and an email-service binding.
- Do not claim certified consent is live until verified in the actual account and in an EEA browser test.
- Do not include a guessed publisher ID or seller entry in `ads.txt`.

## Required account setup

1. Create or connect AdSense publisher account and submit `mzkwcim.net` for review. Get actual publisher ID (`ca-pub-...`) from the account. Do not use a test or invented ID.
2. In AdSense -> Privacy & messaging, configure and publish a European regulations message, choosing Google CMP. Set appropriate consent/rejection/manage choices and vendor settings. Test in EEA/UK/Switzerland context with a clean browser. Verify actual TCF signal and preference reopen.
3. After publisher approval, place verified `ads.txt` at the **domain root** using the exact authorized seller line from AdSense. Confirm HTTP 200 and plaintext response.
4. **Only after 1-3**: integrate AdSense code explicitly into individually approved `/blog/<slug>/index.html` documents. Prefer manually placed ad units. Do **not** place global AdSense script in `assets/site.js`, shared HTML header/footer, `_headers`, or site-wide Cloudflare injection. Keep Auto ads disabled unless an explicit and fully tested exclusion policy covers all non-article pages and subdomains.
5. Add a visible `Privacy / Manage ad preferences` control to each ad-enabled article wired to the actual Google CMP preference API as documented for the configured message. Do not add a nonfunctional mock control. Test accept, reject, revisit, and network behavior.
6. Check actual vendor list and data handling; update both legal pages to reflect reality, including cookies/identifiers, storage periods and transfer details, before enabling serving.

## Verification / rollback

- Check `/`, `/projects/`, `/contact/`, `/privacy/`, `/en/` and every application hostname for **absence of AdSense ad tags and display**.
- Check approved `/blog/` article for correct CMP message and only the intended ads.
- Verify that declining optional consent works as expected for the configured Google ad-serving mode. Test from EEA and without stored consent.
- Check Cloudflare Pages successful deploy, canonical and sitemap entries, and Search Console.
- On errors, remove ad script from article templates and disable ads in AdSense while retaining public content.
- Only an authorized legal professional can give formal legal compliance sign-off; Google CMP certification alone does not establish full GDPR compliance.

Owner decisions still required: actual AdSense publisher account authorization, account-level CMP message publication/settings, review of privacy/vendor disclosures prior to ad serving.
