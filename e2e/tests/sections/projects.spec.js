import { test, expect } from '../../fixtures/base.fixture.js'
import { scrollToSection } from '../../helpers/navigation.js'
import { PROJECTS } from '../../helpers/constants.js'
import * as sel from '../../helpers/selectors.js'

test.describe('Projects Section', () => {
  test.beforeEach(async ({ readyPage: page }) => {
    await scrollToSection(page, 'projects')
  })

  test('displays "Projects" heading and subtitle', async ({ readyPage: page }) => {
    await expect(page.locator(sel.PROJECTS_HEADING)).toHaveText('Projects')
    await expect(page.locator(sel.PROJECTS_SECTION)).toContainText('Personal projects I built')
  })

  test(`shows ${PROJECTS.length} project cards in order`, async ({ readyPage: page }) => {
    await expect(page.locator(`${sel.PROJECT_CARDS} h3`)).toHaveText(PROJECTS.map(p => p.title))
  })

  test('each project card shows a description', async ({ readyPage: page }) => {
    for (const card of await page.locator(sel.PROJECT_CARDS).all()) {
      const text = await card.locator('.project-content p').first().textContent()
      expect(text.trim().length).toBeGreaterThan(40)
    }
  })

  for (const project of PROJECTS) {
    test(`${project.title} links to its repository${project.demo ? ' and live demo' : ''}`, async ({ readyPage: page }) => {
      const card = page.locator(sel.PROJECT_CARDS).filter({ has: page.locator('h3', { hasText: project.title }) })
      await expect(card.locator(`a[href="${project.github}"]`)).toBeAttached()
      if (project.demo) {
        await expect(card.locator(`a[href="${project.demo}"]`)).toContainText('Live Demo')
      }
    })
  }

  test('external project links open in a new tab with rel="noopener"', async ({ readyPage: page }) => {
    const externalLinks = page.locator(sel.PROJECT_LINKS)
    expect(await externalLinks.count()).toBeGreaterThan(0)
    for (const link of await externalLinks.all()) {
      await expect(link).toHaveAttribute('target', '_blank')
      await expect(link).toHaveAttribute('rel', /noopener/)
    }
  })

  test('project images have alt text', async ({ readyPage: page }) => {
    for (const img of await page.locator(`${sel.PROJECTS_SECTION} img`).all()) {
      expect((await img.getAttribute('alt'))?.length).toBeGreaterThan(5)
    }
  })

  // Regression: this was a 10.5 MB GIF, which alone broke the page-weight budget.
  test('JobFy demo is a muted looping video that opens in the lightbox', async ({ readyPage: page }) => {
    const video = page.locator(`${sel.PROJECTS_SECTION} video[data-lightbox]`)
    await expect(video).toHaveAttribute('poster', /\.jpg$/)
    expect(await video.evaluate(v => v.muted && v.loop && v.autoplay)).toBe(true)

    await video.click()
    const overlay = page.locator('.lightbox-overlay')
    await expect(overlay).toHaveClass(/active/)
    await expect(overlay.locator('video')).toHaveAttribute('src', /jobfy-demo\.mp4$/)

    await page.keyboard.press('Escape')
    await expect(overlay).not.toHaveClass(/active/)
    await expect(overlay.locator('video')).toHaveCount(0)
  })

  // Every repo the site links to must exist and be public, so a renamed or
  // private repo shows up here instead of as a 404 for a recruiter.
  test('linked GitHub repositories are reachable', async ({ request }) => {
    test.skip(!!process.env.OFFLINE, 'needs network')
    for (const { github } of PROJECTS) {
      const res = await request.head(github)
      expect(res.status(), github).toBe(200)
    }
  })
})
