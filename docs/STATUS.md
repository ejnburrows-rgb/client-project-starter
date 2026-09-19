# NBO status

**Brand:** NBO — Novo Business Order

**Founder:** Emilio José Novo

**Authoritative branch:** `main`

**Canonical source:** root `index.html`

**Vercel project:** `nbo-website`

**Production alias:** `https://nbo-website.vercel.app`

## September 19, 2026 service repositioning

The previous immigration-law-firm-only landing page has been retired.

NBO is now positioned as a bilingual business-operations modernization service for owner-led service businesses, with four coherent offers:

1. **Digital Business Reset** — file/folder cleanup, operating structure, access/naming rules and SOPs.
2. **Bilingual Customer Operations** — English/Spanish intake, estimates, FAQs, texts, email and customer-service scripts.
3. **AI Front Desk** — approved bilingual call handling, lead capture/routing and appointment/FAQ flows with human control over sensitive judgment.
4. **CRM & Lead Recovery** — data cleanup, pipeline ownership, missed-follow-up recovery and reactivation workflows.

The public value proposition is deliberately outcome-first: fewer missed leads, less searching, consistent bilingual service and automation with human control.

## Verified implementation

- Root `index.html` replaced with the new NBO positioning.
- Temporary `nbo-website/index.html` compatibility copy synchronized byte-for-byte with root.
- English/Spanish switching preserved.
- Mobile responsive layout preserved.
- Business Reset Review CTA copies a review brief; it does not fake submission or booking.
- Local verification and static build passed before push.

## Remaining infrastructure cleanup

- GitHub repository slug remains `client-project-starter`; rename to NBO when repository-settings write access is available.
- The nested compatibility copy can be removed only after a full Vercel deployment serves the root build directly and the production alias is verified.
- A real owner-approved contact or scheduling destination is still required before the review CTA can submit or book anything.
