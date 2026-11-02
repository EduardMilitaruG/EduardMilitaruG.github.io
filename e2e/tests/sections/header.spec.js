import { test, expect } from '../../fixtures/base.fixture.js'
import { NAV_LINKS } from '../../helpers/constants.js'
import { openMobileMenu } from '../../helpers/navigation.js'
import * as sel from '../../helpers/selectors.js'

test.describe('Header Section', () => {
  test('header is visible and fixed to viewport', async ({ readyPage: page }) => {
    const header = page.locator(sel.HEADER)
    await expect(header).toBeVisible()
    const position = await header.evaluate(el => getComputedStyle(el).position)
    expect(position).toBe('fixed')
  })

  test('logo text displays "Eduard.dev"', async ({ readyPage: page }) => {
    const logo = page.locator(sel.LOGO_LINK)
    await expect(logo).toHaveText('Eduard.dev')
  })

  test('logo link has href="#"', async ({ readyPage: page }) => {
    const logo = page.locator(sel.LOGO_LINK)
    await expect(logo).toHaveAttribute('href', '#')
  })

  test('nav displays 3 navigation links', async ({ readyPage: page }) => {
    const links = page.locator(sel.NAV_LINKS)
    await expect(links).toHaveCount(3)
  })

  test('nav links have correct hrefs and labels', async ({ readyPage: page }) => {
    for (const link of NAV_LINKS) {
      const navLink = page.locator(`${sel.NAV} a[href="${link.href}"]`)
      await expect(navLink).toHaveText(link.label)
    }
  })

  test('nav link click scrolls to target section', async ({ readyPage: page }) => {
    // On narrow viewports the links sit behind the hamburger menu
    const menuButton = page.locator(sel.MOBILE_MENU_BUTTON)
    if (await menuButton.isVisible()) await openMobileMenu(page)

    await page.locator(`${sel.NAV} a[href="#projects"]`).click()
    await expect(page.locator(sel.PROJECTS_SECTION)).toBeInViewport()
  })

  test('header becomes opaque after scrolling past 50px', async ({ readyPage: page }) => {
    const header = page.locator(sel.HEADER)

    // Scroll down past threshold
    await page.evaluate(() => window.scrollTo(0, 200))
    await page.waitForTimeout(300)

    // After scrolling, header should have a background change
    const bgColor = await header.evaluate(el => getComputedStyle(el).backgroundColor)
    // Should not be fully transparent after scrolling
    expect(bgColor).not.toBe('rgba(0, 0, 0, 0)')
  })

  test('mobile hamburger button exists', async ({ readyPage: page }) => {
    const button = page.locator(sel.MOBILE_MENU_BUTTON)
    await expect(button).toBeAttached()
  })

  test('header has high z-index for proper stacking', async ({ readyPage: page }) => {
    const header = page.locator(sel.HEADER)
    const zIndex = await header.evaluate(el => getComputedStyle(el).zIndex)
    expect(Number(zIndex)).toBeGreaterThanOrEqual(50)
  })
})
