# NBO — Novo Business Order

NBO is a bilingual workflow automation and operations-modernization company. This repository contains the current public NBO website.

The present landing page is focused on bilingual intake workflows for Miami-Dade immigration law firms: first response, intake, scheduling, follow-up, ownership, and handoffs between the systems a firm already uses.

## Current website

- English / Spanish interface
- Mobile and desktop responsive layout
- Reduced-motion support
- Clear human-control boundaries for legal work
- 20-minute intake-review brief generator
- Founder-led positioning
- Static deployment with no customer data stored by the site

## Repository layout

`index.html` is the authoritative website source.

`main` is the authoritative release branch.

The previous generic starter-template identity is retired. This repository is now NBO.

## Local preview

```bash
pnpm install
pnpm run dev
```

Then open `http://localhost:4173`.

## Quality checks

```bash
pnpm run lint
pnpm run typecheck
pnpm run build
```

The build writes a deployable static site to `dist/`.

## Deployment

Vercel project: `nbo-website`

Current production alias:

`https://nbo-website.vercel.app`

The latest production deployment was verified as `READY` on September 18, 2026.

## Release rules

- Keep NBO branding consistent. The public brand is **NBO — Novo Business Order**.
- Do not revert this repository to the old generic client-project starter.
- Do not invent client results, testimonials, integrations, certifications, or automation capabilities.
- Legal judgment, eligibility, conflicts, engagement, and consequential legal communications remain human-controlled.
- Do not add a fake booking or contact-success flow. Connect a real owner-approved destination before claiming a review was booked or a message was sent.
- Keep `docs/STATUS.md` current.

## Documentation

- `docs/STATUS.md` — current release and cleanup state
- `AGENTS.md` — concise operating rules for coding agents
