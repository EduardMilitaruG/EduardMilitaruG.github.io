import { test, expect } from '../../fixtures/base.fixture.js'
import { NAV_LINKS } from '../../helpers/constants.js'
import * as sel from '../../helpers/selectors.js'

test.describe('Language toggle', () => {
  test('switches to Spanish and back', async ({ readyPage: page }) => {
    const toggle = page.locator(sel.LANG_TOGGLE)
    await expect(toggle).toHaveText('ES')

    await toggle.click()
    await expect(page.locator('html')).toHaveAttribute('lang', 'es')
    await expect(toggle).toHaveText('EN')
    // Regression: the name was "Toggle language", which didn't contain the visible "ES"/"EN"
    await expect(toggle).toHaveAccessibleName(/^EN\b/)
    await expect(page.locator(sel.NAV_LINKS)).toHaveText(NAV_LINKS.map(l => l.labelEs))
    await expect(page.locator(sel.ABOUT_HEADING)).toHaveText('Sobre Mí')

    await toggle.click()
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
    await expect(page.locator(sel.NAV_LINKS)).toHaveText(NAV_LINKS.map(l => l.label))
  })

  test('a round trip restores every English string exactly', async ({ readyPage: page }) => {
    const snapshot = () =>
      page.locator('[data-i18n]').evaluateAll(els => els.map(el => el.textContent.trim()))
    const before = await snapshot()

    await page.locator(sel.LANG_TOGGLE).click()
    await page.locator(sel.LANG_TOGGLE).click()

    expect(await snapshot()).toEqual(before)
  })

  // A key missing from one dictionary leaves that element in the other
  // language without any error, so check coverage both ways.
  test('every data-i18n key has an English and a Spanish translation', async ({ readyPage: page }) => {
    const missing = await page.evaluate(() => {
      const keys = [...new Set([...document.querySelectorAll('[data-i18n]')].map(el => el.dataset.i18n))]
      // eslint-disable-next-line no-undef -- defined by the page's inline script
      const dict = translations
      return {
        en: keys.filter(k => !(k in dict.en)),
        es: keys.filter(k => !(k in dict.es))
      }
    })
    expect(missing).toEqual({ en: [], es: [] })
  })

  test('the English dictionary matches the HTML the page ships with', async ({ page }) => {
    // Without JavaScript the HTML is what crawlers and no-JS readers see.
    await page.goto('./')
    const mismatches = await page.evaluate(() =>
      [...document.querySelectorAll('[data-i18n]')]
        // eslint-disable-next-line no-undef
        .filter(el => translations.en[el.dataset.i18n].trim() !== el.textContent.trim())
        .map(el => el.dataset.i18n)
    )
    expect(mismatches).toEqual([])
  })
})
