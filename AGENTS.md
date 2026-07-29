# AGENTS.md — [Project Name]

**Read this fully before doing anything. `CLAUDE.md` and `GEMINI.md` are one-line pointers back to this file.**

## PROJECT

[Replace with a one-sentence description of the project.]

## HARD RULES

- **Never commit to `main`.** All changes go on a branch as a pull request.
- **No secrets in code.** Use `.env` for local secrets; set the same names in Vercel/GitHub secrets for deploys.
- **One agent per repo at a time.** Read the project's `STATUS.md` in `dev-firm-compass` before starting, and update it before ending.
- **Cross-agent review:** the agent that authored a PR never approves it. A different agent reviews and posts a plain-English verdict + a 3-item "what E N should personally check" list before the PR is presented to E N.
- **Report format:** Found → Needed → Did/Propose → In plain terms.
- **End every report with:** done · blocked (on what) · single next action + owner.

## HOW WE WORK

- Inspect the actual files before claiming anything.
- Prefer small, targeted edits.
- Verify before declaring done — run it, don't assume it.
- For uncertain React 19, TanStack Router, Tailwind, Supabase, or Vite API usage, fetch current docs via Context7 before writing code.

## SETUP

```bash
pnpm install
pnpm dev      # run locally
pnpm build    # package for release
pnpm test     # run tests
pnpm lint     # check code style
pnpm typecheck # type-check only
```

## WHAT'S LIVE

Production URL: [Replace with Vercel URL after first deploy.]

Current status is tracked in `dev-firm-compass/projects/[project-folder]/STATUS.md`.
