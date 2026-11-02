# eduardmilitarug.github.io

[![E2E](https://github.com/EduardMilitaruG/EduardMilitaruG.github.io/actions/workflows/e2e.yml/badge.svg)](https://github.com/EduardMilitaruG/EduardMilitaruG.github.io/actions/workflows/e2e.yml)

My portfolio site ([eduardmilitarug.github.io](https://eduardmilitarug.github.io)) and the Playwright suite that tests it.

The site is a single static `index.html` with an English/Spanish toggle. The suite runs on every push and pull request against that commit, served locally, and once a day against the live site.

## Test suite

98 functional tests run in 6 browser configurations (Chromium, Firefox, WebKit, Pixel 5, iPhone 13, iPad), plus 9 visual regression screenshots: 597 test runs per pipeline.

| Area | Tests | What it checks |
|---|---:|---|
| `sections/` | 42 | Copy, CTAs, project cards and their links, CV download, contact links, demo video + lightbox |
| `responsive/` | 20 | Layout and hamburger menu at mobile, tablet and desktop widths, no horizontal overflow |
| `accessibility/` | 17 | axe-core WCAG 2.1 AA audit, landmarks, heading order, ARIA labels, keyboard focus |
| `performance/` | 6 | Load time, LCP, CLS and a 5 MB page-weight budget |
| `seo/` | 5 | Title, description, `lang`, Open Graph tags |
| `i18n/` | 4 | Language toggle round trip, every `data-i18n` key translated in both languages |
| `smoke` | 4 | HTTP 200, no console errors, all sections render |
| `visual/` | 9 | Pixel comparison of each section, desktop and mobile |

```bash
npm ci
npx playwright install
npm test                  # all 6 browser projects, against a local server
npm run test:chromium     # one browser
npm run test:live         # smoke tests against the deployed site
npm run test:visual       # Linux only; see below
```

### Visual baselines

Font rendering differs between operating systems, so the screenshots are only compared on Linux, inside the same Playwright Docker image locally and in CI. The animated background canvas is hidden and the demo video is frozen on its first frame before each screenshot. To update the baselines after an intended design change:

```bash
npm run test:visual:update
```

### Bugs the suite found

| Finding | Fix |
|---|---|
| Page weighed 10.7 MB, failing the 5 MB budget, because the JobFy demo was a 10.5 MB GIF | Converted to a 640 KB MP4 with a poster frame; lightbox now supports video |
| `--text-muted` (#71717a) had 4.09:1 contrast on the page background, below WCAG AA's 4.5:1 | Raised to #82828b (5.2:1 on the page background, 4.65:1 on cards) |
| The language button showed "ES" but was announced as "Toggle language" (WCAG 2.5.3 Label in Name) | Accessible name now starts with the visible label and updates with the language |

This suite started in the [Portfolio](https://github.com/EduardMilitaruG/Portfolio) repo, where it ran against `/` of the domain. That is this site, not the React app in that repo, so it moved here to sit next to the page it tests.
