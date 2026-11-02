import { test, expect } from '../../fixtures/base.fixture.js'
import { scrollToSection } from '../../helpers/navigation.js'
import { SOCIAL_LINKS, EMAIL_HREF } from '../../helpers/constants.js'
import * as sel from '../../helpers/selectors.js'

test.describe('Contact Section', () => {
  test.beforeEach(async ({ readyPage: page }) => {
    await scrollToSection(page, 'contact')
  })

  test('section has id="contact"', async ({ readyPage: page }) => {
    await expect(page.locator(sel.CONTACT_SECTION)).toBeAttached()
  })

  test('displays "Get In Touch" heading', async ({ readyPage: page }) => {
    await expect(page.locator(sel.CONTACT_HEADING)).toHaveText('Get In Touch')
  })

  test('displays contact description', async ({ readyPage: page }) => {
    await expect(page.locator(sel.CONTACT_SECTION)).toContainText('Have a role in mind')
  })

  test('"Send Email" button opens a mailto link', async ({ readyPage: page }) => {
    const emailButton = page.locator(sel.CONTACT_EMAIL_BUTTON).first()
    await expect(emailButton).toHaveAttribute('href', EMAIL_HREF)
    await expect(emailButton).toContainText('Send Email')
  })

  test('displays 3 social links', async ({ readyPage: page }) => {
    await expect(page.locator(sel.SOCIAL_LINKS)).toHaveCount(3)
  })

  test('social links have correct hrefs and aria-labels', async ({ readyPage: page }) => {
    for (const link of SOCIAL_LINKS) {
      const socialLink = page.locator(`${sel.CONTACT_SECTION} a[aria-label="${link.label}"]`)
      await expect(socialLink).toHaveAttribute('href', link.href)
    }
  })

  test('external social links open in a new tab safely', async ({ readyPage: page }) => {
    const external = page.locator(`${sel.SOCIAL_LINKS_CONTAINER} a[href^="http"]`)
    await expect(external).toHaveCount(2)
    for (const link of await external.all()) {
      await expect(link).toHaveAttribute('target', '_blank')
      await expect(link).toHaveAttribute('rel', /noopener/)
    }
  })
})
