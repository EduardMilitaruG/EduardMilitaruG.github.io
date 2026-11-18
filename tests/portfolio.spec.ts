import { test, expect, type Page } from '@playwright/test';

// The hero's runner widget replays exactly these seven tests.
const HOMES = [
  { path: '', lang: 'en', projects: 'Projects' },
  { path: 'es/', lang: 'es', projects: 'Proyectos' },
  { path: 'ro/', lang: 'ro', projects: 'Proiecte' },
];
const CASES = ['projects/helpdesk-api-quality/', 'projects/flaky-hunter/'];

const showEverything = (page: Page) =>
  page.evaluate(() => document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-in')));

test('renders in English, Spanish and Romanian', async ({ page }) => {
  for (const h of HOMES) {
    await page.goto(h.path);
    await expect(page.locator('html')).toHaveAttribute('lang', h.lang);
    await expect(page.getByRole('heading', { level: 1, name: 'Eduard Militaru' })).toBeVisible();
    await expect(page.locator('[data-section-link="projects"]')).toContainText(h.projects);
    await expect(page.locator(`[data-lang-link][hreflang="${h.lang}"]`)).toHaveAttribute('aria-current', 'true');
  }
});

test('has no horizontal scroll at 360px', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 780 });
  for (const path of [...HOMES.map((h) => h.path), ...CASES]) {
    await page.goto(path);
    await showEverything(page);
    const [scrollWidth, innerWidth] = await page.evaluate(() => [document.documentElement.scrollWidth, window.innerWidth]);
    expect(scrollWidth, `overflow on /${path}`).toBeLessThanOrEqual(innerWidth);
  }
});

test('keeps the chosen accent after reload', async ({ page, isMobile }) => {
  await page.goto('');
  if (isMobile) await page.getByRole('button', { name: /menu/i }).click();
  await page.locator('[data-accent-set="amber"]').click();
  await expect(page.locator('html')).toHaveAttribute('data-accent', 'amber');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-accent', 'amber');
  await expect(page.locator('[data-accent-set="amber"]')).toHaveAttribute('aria-pressed', 'true');
});

test('every internal link answers 200', async ({ page, request }) => {
  const seen = new Set<string>();
  for (const path of [...HOMES.map((h) => h.path), ...CASES]) {
    await page.goto(path);
    const hrefs = await page.$$eval('a[href]', (as) => as.map((a) => (a as HTMLAnchorElement).href));
    for (const href of hrefs) {
      const u = new URL(href);
      if (u.origin !== new URL(page.url()).origin) continue;
      u.hash = '';
      seen.add(u.toString());
    }
  }
  // 3 home pages, 2 case studies, the flaky-hunter demo and the CV at minimum
  expect(seen.size).toBeGreaterThanOrEqual(7);
  for (const link of seen) {
    const res = await request.get(link);
    expect(res.status(), link).toBe(200);
  }
});

test('images have alt text', async ({ page }) => {
  for (const path of ['', ...CASES]) {
    await page.goto(path);
    const missing = await page.$$eval('img', (imgs) => imgs.filter((i) => !i.hasAttribute('alt')).map((i) => i.src));
    expect(missing, `img without alt on /${path}`).toEqual([]);
  }
  await page.goto('');
  await expect(page.getByRole('img', { name: /Eduard Militaru/ })).toBeVisible();
});

test('respects prefers-reduced-motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('');
  // Runner shows the finished result at once instead of animating.
  await expect(page.locator('[data-summary]')).toHaveClass(/is-in/);
  await expect(page.locator('[data-count]')).toHaveText('7');
  // The rotating headline stays on its first phrase.
  const typed = page.locator('[data-typed]');
  const first = await typed.textContent();
  await page.waitForTimeout(3500);
  await expect(typed).toHaveText(first!);
  // Reveal blocks are visible without scrolling.
  await expect(page.locator('#contact [data-reveal]').first()).toHaveCSS('opacity', '1');
});

test('visitor log works offline', async ({ page }) => {
  await page.goto('#log');
  const total = page.locator('[data-log-total]');
  await expect(total).toHaveText('0000000');
  await page.locator('[data-log-btn]').click();
  await expect(total).toHaveText('0000001');
  await expect(page.locator('[data-log-mine]')).toHaveText('1');
  await page.reload();
  await expect(page.locator('[data-log-total]')).toHaveText('0000001');
});
