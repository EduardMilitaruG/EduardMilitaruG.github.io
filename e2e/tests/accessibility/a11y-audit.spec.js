import { test, expect } from '../../fixtures/accessibility.fixture.js'

test.describe('Accessibility Audit', () => {
  test('full page passes axe-core WCAG 2.1 AA audit', async ({ makeAxeBuilder }) => {
    const results = await makeAxeBuilder().analyze()
    expect(results.violations).toEqual([])
  })

  test('individual sections pass accessibility audit', async ({ makeAxeBuilder, readyPage: page }) => {
    const sections = ['#projects', '#about', '#contact']

    for (const section of sections) {
      const results = await makeAxeBuilder()
        .include(section)
        .analyze()

      expect(
        results.violations,
        `Accessibility violations in ${section}: ${JSON.stringify(results.violations, null, 2)}`
      ).toEqual([])
    }
  })
})
