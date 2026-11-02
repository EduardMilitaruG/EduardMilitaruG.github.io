import { test as base } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { waitForPageReady } from '../helpers/navigation.js'

/**
 * Custom fixture that provides an axe-core builder for accessibility testing.
 *
 * - readyPage: navigates and waits for content
 * - makeAxeBuilder: returns a configured AxeBuilder instance
 */
export const test = base.extend({
  readyPage: async ({ page }, use) => {
    await waitForPageReady(page)
    await use(page)
  },

  makeAxeBuilder: async ({ page }, use) => {
    await waitForPageReady(page)
    const builder = () =>
      new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .exclude('canvas[aria-hidden="true"]')
    await use(builder)
  }
})

export { expect } from '@playwright/test'
