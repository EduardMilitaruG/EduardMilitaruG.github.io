import * as sel from './selectors.js'

/**
 * Wait for the page to be fully loaded and content to render.
 */
export async function waitForPageReady(page) {
  await page.goto('./')
  await page.waitForLoadState('networkidle')
  // Wait for the main content to render (header + hero section)
  await page.waitForSelector(sel.HEADER, { state: 'attached' })
  await page.waitForSelector(sel.HERO_SECTION, { state: 'attached' })
}

/**
 * Scroll to a specific section by its ID.
 */
export async function scrollToSection(page, sectionId) {
  await page.evaluate((id) => {
    const section = document.getElementById(id)
    if (section) section.scrollIntoView({ behavior: 'instant' })
  }, sectionId)
  // Allow layout to settle
  await page.waitForTimeout(300)
}

/**
 * Disable all CSS animations and transitions for deterministic testing.
 */
export async function disableAnimations(page) {
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
      }
    `
  })
}

/**
 * Open the mobile hamburger menu.
 */
export async function openMobileMenu(page) {
  const button = page.locator(sel.MOBILE_MENU_BUTTON)
  await button.click()
  // Wait for nav to become visible
  await page.waitForTimeout(300)
}
