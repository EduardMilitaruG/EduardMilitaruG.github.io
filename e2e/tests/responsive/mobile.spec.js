import { test, expect } from '../../fixtures/base.fixture.js'
import { openMobileMenu } from '../../helpers/navigation.js'
import { VIEWPORTS, NAV_LINKS } from '../../helpers/constants.js'
import * as sel from '../../helpers/selectors.js'

test.describe('Mobile Responsive', () => {
  test.use({ viewport: VIEWPORTS.mobile })

  test('desktop navigation is hidden on mobile', async ({ readyPage: page }) => {
    const nav = page.locator(sel.NAV)
    const isHidden = await nav.evaluate(el => {
      const style = getComputedStyle(el)
      return style.display === 'none' || style.visibility === 'hidden'
    })
    expect(isHidden).toBe(true)
  })

  test('hamburger menu button is visible', async ({ readyPage: page }) => {
    const button = page.locator(sel.MOBILE_MENU_BUTTON)
    await expect(button).toBeVisible()
  })

  test('hamburger button has aria-label', async ({ readyPage: page }) => {
    const button = page.locator(sel.MOBILE_MENU_BUTTON)
    await expect(button).toHaveAttribute('aria-label', 'Menu')
  })

  test('mobile menu opens and shows nav links', async ({ readyPage: page }) => {
    await openMobileMenu(page)
    const nav = page.locator(sel.NAV)
    const isVisible = await nav.evaluate(el => {
      const style = getComputedStyle(el)
      return style.display !== 'none' && style.visibility !== 'hidden'
    })
    expect(isVisible).toBe(true)
  })

  test('mobile menu link click closes the menu', async ({ readyPage: page }) => {
    await openMobileMenu(page)

    const firstLink = page.locator(`${sel.NAV} a`).first()
    await firstLink.click()
    await page.waitForTimeout(500)

    // After clicking a link, menu should close
    const nav = page.locator(sel.NAV)
    const isHidden = await nav.evaluate(el => {
      const style = getComputedStyle(el)
      return style.display === 'none' || style.visibility === 'hidden'
    })
    expect(isHidden).toBe(true)
  })

  test('project cards display in single column on mobile', async ({ readyPage: page }) => {
    const grid = page.locator('#projects .projects-grid')
    const gridStyle = await grid.evaluate(el => getComputedStyle(el).gridTemplateColumns)
    // Single column means only one column track
    const columnCount = gridStyle.split(' ').filter(s => s.trim()).length
    expect(columnCount).toBeLessThanOrEqual(1)
  })

  test('no horizontal overflow on mobile', async ({ readyPage: page }) => {
    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth
    })
    expect(hasOverflow).toBe(false)
  })

  test('canvas background is not rendered on mobile', async ({ readyPage: page }) => {
    const canvas = page.locator(sel.CANVAS_BACKGROUND)
    // Canvas element exists but should not have active rendering on mobile
    const hasContent = await canvas.evaluate(el => {
      const ctx = el.getContext('2d')
      if (!ctx) return false
      const imageData = ctx.getImageData(0, 0, Math.max(el.width, 1), Math.max(el.height, 1))
      return imageData.data.some(val => val !== 0)
    })
    expect(hasContent).toBe(false)
  })

  test('mobile nav links have correct hrefs', async ({ readyPage: page }) => {
    await openMobileMenu(page)
    for (const link of NAV_LINKS) {
      const navLink = page.locator(`${sel.NAV} a[href="${link.href}"]`)
      await expect(navLink).toHaveText(link.label)
    }
  })

  test('hero section fills viewport on mobile', async ({ readyPage: page }) => {
    const section = page.locator(sel.HERO_SECTION)
    const height = await section.evaluate(el => el.getBoundingClientRect().height)
    const viewportHeight = await page.evaluate(() => window.innerHeight)
    expect(height).toBeGreaterThanOrEqual(viewportHeight * 0.8)
  })
})
