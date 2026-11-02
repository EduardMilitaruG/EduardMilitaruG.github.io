import { test, expect } from '../fixtures/base.fixture.js'
import * as sel from '../helpers/selectors.js'

test.describe('Smoke Tests', () => {
  test('page loads successfully with HTTP 200', async ({ page }) => {
    const response = await page.goto('./')
    expect(response.status()).toBe(200)
  })

  test('no console errors on page load', async ({ page }) => {
    const errors = []
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text())
    })
    await page.goto('./')
    await page.waitForLoadState('networkidle')
    expect(errors).toEqual([])
  })

  test('page content renders', async ({ readyPage: page }) => {
    const hero = page.locator(sel.HERO_SECTION)
    await expect(hero).not.toBeEmpty()
  })

  test('all major sections are present', async ({ readyPage: page }) => {
    await expect(page.locator(sel.HEADER)).toBeVisible()
    await expect(page.locator(sel.HERO_SECTION)).toBeVisible()
    await expect(page.locator(sel.PROJECTS_SECTION)).toBeAttached()
    await expect(page.locator(sel.ABOUT_SECTION)).toBeAttached()
    await expect(page.locator(sel.CONTACT_SECTION)).toBeAttached()
    await expect(page.locator(sel.FOOTER)).toBeAttached()
  })
})
