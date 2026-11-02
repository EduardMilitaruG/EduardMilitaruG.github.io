import { test, expect } from '../../fixtures/base.fixture.js'
import * as sel from '../../helpers/selectors.js'

test.describe('Keyboard Navigation', () => {
  test('interactive elements are keyboard-focusable', async ({ readyPage: page }) => {
    await page.keyboard.press('Tab')
    const firstFocused = await page.evaluate(() => document.activeElement?.tagName)
    expect(['A', 'BUTTON', 'INPUT']).toContain(firstFocused)
  })

  test('focused elements have visible focus indicators', async ({ readyPage: page }) => {
    await page.keyboard.press('Tab')

    const focusVisible = await page.evaluate(() => {
      const el = document.activeElement
      if (!el) return false
      const styles = getComputedStyle(el)
      const hasOutline = styles.outlineStyle !== 'none' && styles.outlineWidth !== '0px'
      const hasBoxShadow = styles.boxShadow !== 'none'
      return hasOutline || hasBoxShadow
    })

    expect(focusVisible).toBe(true)
  })

  test('tab order follows visual order through nav links', async ({ readyPage: page }) => {
    const focusedLabels = []
    for (let i = 0; i < 10; i++) {
      await page.keyboard.press('Tab')
      const label = await page.evaluate(() => {
        const el = document.activeElement
        return el?.textContent?.trim() || el?.getAttribute('aria-label') || ''
      })
      if (label) focusedLabels.push(label)
    }

    const proyectosIndex = focusedLabels.indexOf('Proyectos')
    const sobreMiIndex = focusedLabels.indexOf('Sobre mi')
    const contactoIndex = focusedLabels.indexOf('Contacto')

    if (proyectosIndex !== -1 && sobreMiIndex !== -1) {
      expect(proyectosIndex).toBeLessThan(sobreMiIndex)
    }
    if (sobreMiIndex !== -1 && contactoIndex !== -1) {
      expect(sobreMiIndex).toBeLessThan(contactoIndex)
    }
  })

  test('Enter key activates focused links', async ({ readyPage: page }) => {
    let foundNavLink = false
    for (let i = 0; i < 15; i++) {
      await page.keyboard.press('Tab')
      const href = await page.evaluate(() => document.activeElement?.getAttribute('href'))
      if (href === '#projects') {
        foundNavLink = true
        break
      }
    }

    if (foundNavLink) {
      await page.keyboard.press('Enter')
      await page.waitForTimeout(500)
      const section = page.locator(sel.PROJECTS_SECTION)
      await expect(section).toBeInViewport()
    }
  })

  test('first Tab reaches an interactive element', async ({ readyPage: page }) => {
    await page.keyboard.press('Tab')
    const tagName = await page.evaluate(() => document.activeElement?.tagName)
    expect(['A', 'BUTTON']).toContain(tagName)
  })
})
