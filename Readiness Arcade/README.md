# CERT Training Suite

A browser-based **learning lab** that turns FEMA CERT Basic Training into hands-on,
gamified practice for Community Emergency Response Team members and community
volunteers. Nine interactive training games — free to run, no install, works on
any device.

> **Status:** working prototype / proof-of-concept. A proper commercial rebuild
> (accounts, cross-device sync, completion certificates, and admin reporting) is
> planned — see the roadmap below.

## What's inside

| # | Game | Trains |
|---|------|--------|
| 1 | Training Scenarios | Decision-making across 9 CERT topic modules |
| 2 | Fire Scene RPG | Scene size-up, triage, hazard control |
| 3 | Patient Assessment | Head-to-toe assessment on randomized patients |
| 4 | Hazmat Placard Match | DOT hazard classes + NFPA 704 |
| 5 | CERT Crossword | Terminology recall (auto-generated + daily) |
| 6 | CERT Escape Room | Mnemonics, triage, placards, step sequences |
| 7 | Scene Search | Hidden-object hazard & gear hunt |
| 8 | Scene Recall | Observation & memory drill |
| 9 | Treatment Aid Station | Disaster-medicine management sim |

Also included: a suite-wide **Training Record** (per-game mastery stars and
achievement badges).

Every game maps to CERT Basic Training and is kept faithful to **CERT scope** —
stabilize-and-transfer, not advanced EMS or hospital medicine.

## Tech overview

- **Single-file games** — each game is one self-contained `.html` file with inline
  CSS/JS and hand-drawn inline-SVG (or canvas) art. No framework, no build step,
  no third-party dependencies.
- **Shared modules** — `theme.js` (light/dark theme, icons, accessibility base),
  `cert-terms.js` (term data for the crossword).
- **Progress** is stored in the browser via `localStorage` (keys prefixed
  `cert_*`). It is per-device and per-browser — there is no server or account yet.
- **Hosting** — static files, deployed on GitHub Pages.

## Run locally

```bash
npx serve . -l 3000
```

Then open <http://localhost:3000>.

## Project structure

```
index.html            Suite hub / title screen + Training Record
game-*.html           The nine games (one self-contained file each)
theme.js              Shared theme, icons, and accessibility base (loaded everywhere)
cert-terms.js         Shared CERT term data
manifest.json         PWA manifest
```

## Data & privacy

All learner progress is kept **locally in the browser** (`localStorage`); nothing
is transmitted or collected by the app. Clearing browser data resets progress.
Cross-device sync and accounts are on the roadmap.

## Accessibility

Baseline in place suite-wide (via `theme.js`): a visible keyboard focus ring
(`:focus-visible`) and `prefers-reduced-motion` support. Per-game ARIA on the
interactive widgets and a full WCAG 2.1 AA / Section 508 pass are in progress.

## Roadmap

- Accounts, cross-device progress sync, completion certificates, coordinator
  reporting/export, and SSO (the foundation for organizational/commercial use).
- Full accessibility conformance.
- Visual/asset polish and, longer term, a from-scratch app rebuild for the
  commercial version.

## License

Proprietary — all rights reserved. See [LICENSE](LICENSE). This is an independent
training aid and is **not** affiliated with or endorsed by FEMA or any government
agency, and is not a substitute for certified, hands-on CERT instruction.
