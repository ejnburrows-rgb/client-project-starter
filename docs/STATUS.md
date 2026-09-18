# NBO status

**Brand:** NBO — Novo Business Order

**Authoritative branch:** `main`

**Canonical source for the next full deployment:** root `index.html`

**Vercel project:** `nbo-website`

**Production alias:** `https://nbo-website.vercel.app`

## September 18, 2026 cleanup

- Confirmed the NBO website commits are already on `main`.
- Confirmed four recorded Vercel production deployments are `READY`.
- Verified the production alias responds with HTTP 200.
- Retired the generic starter-template README/package identity.
- Normalized package identity to `nbo`.
- Added deterministic static build and verification scripts.
- Removed the runtime dependency on the Tucker Pool CRM repository for the NBO logo by using an inline NBO mark.
- Kept the current immigration-law-firm landing-page positioning and bilingual copy intact.

## Temporary live compatibility path

The currently deployed Vercel wrapper still fetches:

`nbo-website/index.html`

directly from GitHub. For that reason, the nested file is preserved as a synchronized copy of the canonical root `index.html` until a new full Vercel deployment serves the root build directly.

Do **not** delete the nested compatibility copy until the replacement production deployment is verified.

## Remaining naming cleanup

The GitHub repository slug is still `client-project-starter`. Rename it to **NBO** (or `nbo` if GitHub normalizes the slug) when repository-settings or GitHub CLI write access is available.

The Vercel project currently remains `nbo-website`; the public site brand is NBO.

## Finish-line checks

1. Rename the GitHub repository to NBO.
2. Deploy the root NBO build to the existing Vercel project.
3. Verify `https://nbo-website.vercel.app` after that deployment.
4. Remove the nested compatibility copy only after step 3 succeeds.
5. Connect a real owner-approved contact or scheduling destination before changing the review CTA into a submission/booking flow.
