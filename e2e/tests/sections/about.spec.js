import { test, expect } from '../../fixtures/base.fixture.js'
import { scrollToSection } from '../../helpers/navigation.js'
import { SKILLS } from '../../helpers/constants.js'
import * as sel from '../../helpers/selectors.js'

test.describe('About Section', () => {
  test.beforeEach(async ({ readyPage: page }) => {
    await scrollToSection(page, 'about')
  })

  test('section has id="about"', async ({ readyPage: page }) => {
    await expect(page.locator(sel.ABOUT_SECTION)).toBeAttached()
  })

  test('displays "About Me" heading', async ({ readyPage: page }) => {
    await expect(page.locator(sel.ABOUT_HEADING)).toHaveText('About Me')
  })

  test('bio covers QA focus, work experience and location', async ({ readyPage: page }) => {
    const bio = page.locator(sel.ABOUT_TEXT)
    await expect(bio).toContainText('Playwright')
    await expect(bio).toContainText('OpenMS')
    await expect(bio).toContainText('Castellón')
  })

  test('bio mentions IoT experience', async ({ readyPage: page }) => {
    await expect(page.locator(sel.ABOUT_SECTION)).toContainText('IoT')
  })

  test(`displays ${SKILLS.length} skill items in order`, async ({ readyPage: page }) => {
    await expect(page.locator(sel.ABOUT_SKILLS)).toHaveText(SKILLS)
  })
})
