import { test, expect } from '../../fixtures/base.fixture.js'
import { VIEWPORTS } from '../../helpers/constants.js'
import * as sel from '../../helpers/selectors.js'

test.describe('Desktop Responsive', () => {
  test.use({ viewport: VIEWPORTS.desktop })

  test('full desktop navigation is visible', async ({ readyPage: page }) => {
    const nav = page.locator(sel.NAV)
    const isVisible = await nav.evaluate(el => {
      const style = getComputedStyle(el)
      return style.display !== 'none' && style.visibility !== 'hidden'
    })
    expect(isVisible).toBe(true)

    const links = page.locator(sel.NAV_LINKS)
    await expect(links).toHaveCount(3)
  })

  test('hamburger menu is hidden on desktop', async ({ readyPage: page }) => {
    const button = page.locator(sel.MOBILE_MENU_BUTTON)
    await expect(button).toBeHidden()
  })

  test('canvas background is rendered on desktop', async ({ readyPage: page }) => {
    const canvas = page.locator(sel.CANVAS_BACKGROUND)
    await expect(canvas).toBeAttached()
    const dimensions = await canvas.evaluate(el => ({
      width: el.width,
      height: el.height
    }))
    expect(dimensions.width).toBeGreaterThan(0)
    expect(dimensions.height).toBeGreaterThan(0)
  })

  test('project cards have hover capability', async ({ readyPage: page }) => {
    const card = page.locator(sel.PROJECT_CARDS).first()
    await card.scrollIntoViewIfNeeded()
    // Just verify the card is interactive (hoverable)
    await card.hover()
    await page.waitForTimeout(200)
    // Card should still be visible after hover
    await expect(card).toBeVisible()
  })

  test('hero section buttons display inline', async ({ readyPage: page }) => {
    const primaryBtn = page.locator(sel.HERO_CTA_PRIMARY)
    const secondaryBtn = page.locator(sel.HERO_CTA_SECONDARY)
    const primaryBox = await primaryBtn.boundingBox()
    const secondaryBox = await secondaryBtn.boundingBox()
    // Both buttons should be on the same line (similar y position)
    expect(Math.abs(primaryBox.y - secondaryBox.y)).toBeLessThan(20)
  })
})
