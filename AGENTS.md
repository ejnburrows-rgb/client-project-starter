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

## Shared delivery workflow

- Work through **Idea → Plan → Build → Focused Test → Visual Proof → Approval → Integration → Release**. Use a short plan only when needed; resolve routine technical choices yourself.
- Inspect current code, existing PRs/assignments and applicable product requirements first. Reuse the original branch and valid evidence; historical reports are context, not new assignments.
- One active assignment = one bounded useful result. Make the smallest reliable change, preserve unrelated working behavior, and verify affected behavior. Use existing tools and tests; no mandatory skill chain, new controller, duplicate dashboard or repeated unchanged audit.
- For visual/interactive changes show actual phone/desktop screenshots; use real recordings for movement, navigation or sound. For instruction-only changes show exact-version excerpts/diffs. Never claim tests, live agents, saves or deployments without direct evidence.
- After completing or blocking an item, continue the next independent eligible already-authorized assignment in the same available session. A hold stops only its affected action. Save one material checkpoint on the existing PR/task; do not promise background activity.
- Keep work on one task branch/PR. Check overlapping ownership before shared-file edits. Do not create workers or tasks merely to fill capacity.
- Preserve applicable independent review and effective branch protection; no self-approval, force push or history rewriting. Never merge known serious defects or missing affected verification.
- Owner visual acceptance, merge authorization and production release are separate. If a default-branch update triggers production, hold it until the corresponding release is authorized. Do not turn on auto-merge or automatic deployment.
- Never commit secrets. No paid services, access/security changes, real-data deletion or irreplaceable asset removal without applicable permission. Antigravity requires new explicit task-specific owner authorization.
- Use available local/sandbox checks; do not depend on GitHub Actions or paid upgrades. Consult version-specific documentation only when relevant.
- Report **STATUS / RESULT / PROOF / WHAT REMAINS**, with exact revision and one next executable step. Stop when requested work is complete; preserve a precise checkpoint if a genuine execution limit ends the session.
