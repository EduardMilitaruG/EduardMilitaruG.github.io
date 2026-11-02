import { test, expect } from '../../fixtures/base.fixture.js'
import { CV_HREF } from '../../helpers/constants.js'
import * as sel from '../../helpers/selectors.js'

test.describe('Hero Section', () => {
  test('shows the name and the QA headline', async ({ readyPage: page }) => {
    const section = page.locator(sel.HERO_SECTION)
    await expect(section.locator('.hero-name')).toHaveText('Eduard Militaru')
    await expect(page.locator(sel.HERO_H1)).toContainText('QA & Test Automation')
  })

  test('description names the core testing tools', async ({ readyPage: page }) => {
    const description = page.locator(`${sel.HERO_SECTION} .hero-sub`)
    for (const tool of ['Playwright', 'Postman', 'SQL']) {
      await expect(description).toContainText(tool)
    }
  })

  test('"View Projects" CTA links to #projects', async ({ readyPage: page }) => {
    const cta = page.locator(sel.HERO_CTA_PRIMARY)
    await expect(cta).toContainText('View Projects')
    await expect(cta).toHaveAttribute('href', '#projects')
  })

  test('"Contact Me" CTA links to #contact', async ({ readyPage: page }) => {
    const cta = page.locator(sel.HERO_CTA_SECONDARY)
    await expect(cta).toContainText('Contact Me')
    await expect(cta).toHaveAttribute('href', '#contact')
  })

  test('"Download CV" serves the PDF', async ({ readyPage: page, request }) => {
    const cta = page.locator(sel.HERO_CTA_CV)
    await expect(cta).toHaveAttribute('href', CV_HREF)
    await expect(cta).toHaveAttribute('download', '')

    const res = await request.get(new URL(CV_HREF, page.url()).href)
    expect(res.status()).toBe(200)
    expect(res.headers()['content-type']).toContain('pdf')
  })

  test('hero section takes at least full viewport height', async ({ readyPage: page }) => {
    const section = page.locator(sel.HERO_SECTION)
    const sectionHeight = await section.evaluate(el => el.getBoundingClientRect().height)
    const viewportHeight = await page.evaluate(() => window.innerHeight)
    expect(sectionHeight).toBeGreaterThanOrEqual(viewportHeight * 0.9)
  })

  test('CTA buttons are visible', async ({ readyPage: page }) => {
    await expect(page.locator(sel.HERO_CTA_PRIMARY)).toBeVisible()
    await expect(page.locator(sel.HERO_CTA_SECONDARY)).toBeVisible()
    await expect(page.locator(sel.HERO_CTA_CV)).toBeVisible()
  })

  test('h1 is the first heading on the page', async ({ readyPage: page }) => {
    const firstHeading = page.locator('h1, h2, h3, h4, h5, h6').first()
    const tagName = await firstHeading.evaluate(el => el.tagName)
    expect(tagName).toBe('H1')
  })
})
