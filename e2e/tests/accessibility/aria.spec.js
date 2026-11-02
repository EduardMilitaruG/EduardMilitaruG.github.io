import { test, expect } from '../../fixtures/base.fixture.js'
import * as sel from '../../helpers/selectors.js'

test.describe('ARIA & Semantic HTML', () => {
  test('html element has lang="en"', async ({ readyPage: page }) => {
    const lang = await page.getAttribute('html', 'lang')
    expect(lang).toBe('en')
  })

  test('page has exactly one h1 element', async ({ readyPage: page }) => {
    const h1Count = await page.locator('h1').count()
    expect(h1Count).toBe(1)
  })

  test('heading hierarchy is correct (no skipped levels)', async ({ readyPage: page }) => {
    const headings = await page.evaluate(() => {
      const headingElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
      return Array.from(headingElements).map(el => ({
        level: parseInt(el.tagName[1]),
        text: el.textContent.trim()
      }))
    })

    for (let i = 1; i < headings.length; i++) {
      const diff = headings[i].level - headings[i - 1].level
      expect(diff).toBeLessThanOrEqual(1)
    }
  })

  test('page has header landmark', async ({ readyPage: page }) => {
    const header = page.locator('header')
    await expect(header).toBeAttached()
  })

  test('page has footer landmark', async ({ readyPage: page }) => {
    const footer = page.locator('footer')
    await expect(footer).toBeAttached()
  })

  test('page has nav landmark', async ({ readyPage: page }) => {
    const nav = page.locator('nav')
    await expect(nav).toBeAttached()
  })

  test('page has section landmarks', async ({ readyPage: page }) => {
    const sections = page.locator('section')
    const count = await sections.count()
    expect(count).toBeGreaterThanOrEqual(4)
  })

  test('canvas has aria-hidden="true"', async ({ readyPage: page }) => {
    const canvas = page.locator(sel.CANVAS_BACKGROUND)
    await expect(canvas).toHaveAttribute('aria-hidden', 'true')
  })

  test('mobile menu button has aria-label', async ({ readyPage: page }) => {
    const button = page.locator(sel.MOBILE_MENU_BUTTON)
    const label = await button.getAttribute('aria-label')
    expect(label).toBeTruthy()
  })

  test('social links have descriptive aria-labels', async ({ readyPage: page }) => {
    const socialLinks = page.locator(sel.SOCIAL_LINKS)
    const count = await socialLinks.count()
    expect(count).toBeGreaterThan(0)

    for (let i = 0; i < count; i++) {
      const label = await socialLinks.nth(i).getAttribute('aria-label')
      expect(label).toBeTruthy()
      expect(label.length).toBeGreaterThan(0)
    }
  })
})
