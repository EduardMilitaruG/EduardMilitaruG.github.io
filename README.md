# Eduard Militaru · Portfolio

Personal portfolio of a junior **QA Automation & IT Support** engineer, live at
**https://eduardmilitarug.github.io/**.

Built with [Astro](https://astro.build) in a "Terminal Editorial" design: near-black hairline
grid, Barlow Condensed numbers, Share Tech Mono labels, one hot accent the visitor can switch
(orange / amber / blue). Available in English, Spanish and Romanian.

## Highlights

- **Static and fast**: Astro ships almost no JavaScript; images are converted to responsive WebP at build time.
- **Fluid layout**: `clamp()` type scale, container-query headline, hairline bands, sticky blurred nav,
  page zoom on 2000px+ screens, breakpoints from 1120px down to 420px, tested at 360px.
- **Motion with manners**: scroll reveals and the test-runner replay use IntersectionObserver and turn
  off completely under `prefers-reduced-motion`.
- **Tested like a product**: the runner in the hero replays the real suite in `tests/portfolio.spec.ts`,
  which CI runs on Chromium, Firefox, WebKit and a mobile viewport before every deploy.
- **Visitor log**: optional shared counter on Supabase (REST, no SDK, row-level security); without
  configuration it counts per browser.

## Run it

```bash
npm ci
npm run dev        # http://localhost:4321/
npm test           # builds, serves the production build and runs Playwright
```

## Visitor log (optional)

1. Create a Supabase project and run [`supabase/schema.sql`](supabase/schema.sql) in its SQL editor.
2. In the GitHub repo, add the repository **variables** `PUBLIC_SUPABASE_URL` and
   `PUBLIC_SUPABASE_ANON_KEY` (the anon/publishable key is public by design; RLS protects the table).
3. Push to `main`: the deploy build picks them up. Locally, copy `.env.example` to `.env`.

## Deploy

`.github/workflows/ci.yml` runs the Playwright matrix on every push and pull request, and on `main`
builds the site and deploys it to GitHub Pages (Settings → Pages → Source: **GitHub Actions**).

## Structure

```
src/
  components/   Hero, Runner, Stats, Projects, Experience, Beyond, Stack, VisitorLog, Contact, Nav, Footer
  i18n/         en.ts (source of truth), es.ts, ro.ts
  data/site.ts  projects, links, stats (with where each number comes from), stack
  layouts/      Base (head, nav, footer), Case (case-study pages)
  pages/        /, /es/, /ro/, /projects/helpdesk-api-quality/, /projects/flaky-hunter/
public/         CV, favicon, social image, flaky-hunter demo dashboard
tests/          Playwright suite
```
