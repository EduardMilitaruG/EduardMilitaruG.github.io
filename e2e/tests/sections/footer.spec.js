import { test, expect } from '../../fixtures/base.fixture.js'
import * as sel from '../../helpers/selectors.js'

test.describe('Footer Section', () => {
  test('footer is present on the page', async ({ readyPage: page }) => {
    await expect(page.locator(sel.FOOTER)).toBeAttached()
  })

  test('footer displays current year', async ({ readyPage: page }) => {
    const currentYear = new Date().getFullYear().toString()
    await expect(page.locator(sel.FOOTER)).toContainText(currentYear)
  })

  test('footer displays tagline', async ({ readyPage: page }) => {
    await expect(page.locator(sel.FOOTER)).toContainText('Designed and built with care.')
  })
})
