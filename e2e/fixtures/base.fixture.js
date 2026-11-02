import { test as base } from '@playwright/test'
import { waitForPageReady, disableAnimations } from '../helpers/navigation.js'

/**
 * Custom fixtures that extend Playwright's base test.
 *
 * - readyPage: navigates to the site and waits for content to render
 * - staticPage: same as readyPage, but also disables all animations
 */
export const test = base.extend({
  readyPage: async ({ page }, use) => {
    await waitForPageReady(page)
    await use(page)
  },

  staticPage: async ({ page }, use) => {
    await waitForPageReady(page)
    await disableAnimations(page)
    await use(page)
  }
})

export { expect } from '@playwright/test'
