# NBO coding rules

## Project

NBO — Novo Business Order. Public bilingual workflow-automation website.

## Hard rules

1. `main` is the authoritative release source.
2. Read `README.md` and `docs/STATUS.md` before changing behavior.
3. The public brand is **NBO — Novo Business Order**. Do not call this project a starter template.
4. Preserve English/Spanish parity.
5. Never invent client results, testimonials, integrations, certifications, legal capabilities, contact success, or booked appointments.
6. Legal judgment and consequential legal communications remain human-controlled.
7. Keep the static site self-contained; do not depend on another repository for NBO brand assets.
8. Run `pnpm run lint`, `pnpm run typecheck`, and `pnpm run build` before release.
9. Use short-lived branches for substantial work and remove them after merge.
10. Update `docs/STATUS.md` only with current verified truth.

## Current source

The root `index.html` is canonical for the next full deployment. The current Vercel production wrapper still fetches `nbo-website/index.html`, so keep that nested file synchronized until a replacement deployment is verified.
