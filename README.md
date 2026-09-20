# NBO — Novo Business Order

NBO is a bilingual business-operations modernization company serving Miami-Dade and remote U.S. service businesses.

The public offer is organized around four related operating-system services:

- Workflow Modernization
- Custom CRM + Operations Hub
- Bilingual Customer Operations
- Practical AI + Content Automation

The positioning is outcome-first: reduce administrative drag, connect scattered work, create one visible operating truth, and make English/Spanish execution consistent. NBO works around client-owned systems where practical rather than forcing unnecessary software replacement. AI is used for bounded work such as document extraction, summaries, drafting, QA, and human-reviewed bilingual content repurposing.

## Current website

- English / Spanish interface
- Mobile and desktop responsive layout
- Dark executive NBO visual system
- Founder-led positioning
- Business Reset Review brief generator
- No fake booking, contact-success, testimonials or customer results
- Static deployment with no customer data stored by the site

## Repository layout

`index.html` is the authoritative website source.

`main` is the authoritative release branch.

The nested `nbo-website/index.html` remains synchronized temporarily because the current production compatibility wrapper still fetches that path.

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

Production alias: `https://nbo-website.vercel.app`

## Release rules

- Keep the public brand **NBO — Novo Business Order**.
- Preserve English/Spanish parity.
- Do not invent client results, testimonials, integrations, certifications, contact success or booked appointments.
- Do not sell technology for its own sake; the site must lead with the operating outcome.
- Keep client accounts and tools client-owned where practical.
- Keep `docs/STATUS.md` current.
