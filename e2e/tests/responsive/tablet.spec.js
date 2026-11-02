import { test, expect } from '../../fixtures/base.fixture.js'
import { VIEWPORTS } from '../../helpers/constants.js'
import * as sel from '../../helpers/selectors.js'

test.describe('Tablet Responsive', () => {
  test.use({ viewport: VIEWPORTS.tablet })

  test('desktop navigation is visible at tablet width', async ({ readyPage: page }) => {
    const nav = page.locator(sel.NAV)
    const isVisible = await nav.evaluate(el => {
      const style = getComputedStyle(el)
      return style.display !== 'none' && style.visibility !== 'hidden'
    })
    expect(isVisible).toBe(true)
  })

  test('hamburger menu is hidden at tablet size', async ({ readyPage: page }) => {
    const button = page.locator(sel.MOBILE_MENU_BUTTON)
    await expect(button).toBeHidden()
  })

  test('project cards display in grid layout', async ({ readyPage: page }) => {
    const grid = page.locator('#projects .projects-grid')
    const gridStyle = await grid.evaluate(el => getComputedStyle(el).gridTemplateColumns)
    const columnCount = gridStyle.split(' ').filter(s => s.trim()).length
    expect(columnCount).toBeGreaterThanOrEqual(2)
  })

  test('about section uses multi-column layout', async ({ readyPage: page }) => {
    const aboutContent = page.locator('#about .about-content')
    const display = await aboutContent.evaluate(el => getComputedStyle(el).display)
    // Should use grid or flex for multi-column on tablet
    expect(['grid', 'flex']).toContain(display)
  })

  test('no horizontal overflow on tablet', async ({ readyPage: page }) => {
    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth
    })
    expect(hasOverflow).toBe(false)
  })
})
