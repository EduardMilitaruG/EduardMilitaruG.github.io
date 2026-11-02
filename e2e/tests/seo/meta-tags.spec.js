import { test, expect } from '@playwright/test'
import { SEO } from '../../helpers/constants.js'

test.describe('SEO Meta Tags', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('./')
    await page.waitForLoadState('domcontentloaded')
  })

  test('page has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(SEO.title)
  })

  test('page has meta description', async ({ page }) => {
    const description = await page.getAttribute('meta[name="description"]', 'content')
    expect(description).toBe(SEO.description)
  })

  test('page has viewport meta tag', async ({ page }) => {
    const viewport = await page.getAttribute('meta[name="viewport"]', 'content')
    expect(viewport).toContain('width=device-width')
    expect(viewport).toContain('initial-scale=1')
  })

  test('page has lang attribute', async ({ page }) => {
    const lang = await page.getAttribute('html', 'lang')
    expect(lang).toBe(SEO.lang)
  })

  test('Open Graph tags are present and correct', async ({ page }) => {
    const ogType = await page.getAttribute('meta[property="og:type"]', 'content')
    expect(ogType).toBe(SEO.ogType)

    const ogTitle = await page.getAttribute('meta[property="og:title"]', 'content')
    expect(ogTitle).toBe(SEO.ogTitle)

    const ogDescription = await page.getAttribute('meta[property="og:description"]', 'content')
    expect(ogDescription).toBeTruthy()
  })
})
