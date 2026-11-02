import { test, expect } from '../../fixtures/base.fixture.js'
import { prepareForScreenshot } from '../../helpers/visual.js'
import { scrollToSection, openMobileMenu } from '../../helpers/navigation.js'
import { VIEWPORTS } from '../../helpers/constants.js'

test.describe('Visual Regression - Desktop', () => {
  test.use({ viewport: VIEWPORTS.desktop })

  test('full page screenshot', async ({ readyPage: page }) => {
    await prepareForScreenshot(page)
    await expect(page).toHaveScreenshot('desktop-full-page.png', {
      fullPage: true
    })
  })

  test('hero section screenshot', async ({ readyPage: page }) => {
    await prepareForScreenshot(page)
    const hero = page.locator('section.hero')
    await expect(hero).toHaveScreenshot('desktop-hero.png')
  })

  test('projects section screenshot', async ({ readyPage: page }) => {
    await prepareForScreenshot(page)
    await scrollToSection(page, 'projects')
    const section = page.locator('#projects')
    await expect(section).toHaveScreenshot('desktop-projects.png')
  })

  test('about section screenshot', async ({ readyPage: page }) => {
    await prepareForScreenshot(page)
    await scrollToSection(page, 'about')
    const section = page.locator('#about')
    await expect(section).toHaveScreenshot('desktop-about.png')
  })

  test('contact section screenshot', async ({ readyPage: page }) => {
    await prepareForScreenshot(page)
    await scrollToSection(page, 'contact')
    const section = page.locator('#contact')
    await expect(section).toHaveScreenshot('desktop-contact.png')
  })

  test('header transparent state screenshot', async ({ readyPage: page }) => {
    await prepareForScreenshot(page)
    const header = page.locator('header')
    await expect(header).toHaveScreenshot('header-transparent.png')
  })

  test('header scrolled state screenshot', async ({ readyPage: page }) => {
    await prepareForScreenshot(page)
    await page.evaluate(() => window.scrollTo(0, 200))
    await page.waitForTimeout(300)
    const header = page.locator('header')
    await expect(header).toHaveScreenshot('header-scrolled.png')
  })
})

test.describe('Visual Regression - Mobile', () => {
  test.use({ viewport: VIEWPORTS.mobile })

  test('mobile full page screenshot', async ({ readyPage: page }) => {
    await prepareForScreenshot(page)
    await expect(page).toHaveScreenshot('mobile-full-page.png', {
      fullPage: true
    })
  })

  test('mobile menu open state screenshot', async ({ readyPage: page }) => {
    await prepareForScreenshot(page)
    await openMobileMenu(page)
    await page.waitForTimeout(200)
    const header = page.locator('header')
    await expect(header).toHaveScreenshot('mobile-menu-open.png')
  })
})
