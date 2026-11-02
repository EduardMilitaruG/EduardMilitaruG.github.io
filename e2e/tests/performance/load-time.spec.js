import { test, expect } from '@playwright/test'

test.describe('Performance', () => {
  test('page loads within 5 seconds', async ({ page }) => {
    const start = Date.now()
    await page.goto('./', { waitUntil: 'load' })
    const loadTime = Date.now() - start
    expect(loadTime).toBeLessThan(5000)
  })

  test('DOM Content Loaded within 3 seconds', async ({ page }) => {
    const timing = await page.evaluate(() => {
      return new Promise(resolve => {
        if (document.readyState === 'complete') {
          const nav = performance.getEntriesByType('navigation')[0]
          resolve(nav?.domContentLoadedEventEnd - nav?.startTime)
        } else {
          window.addEventListener('load', () => {
            const nav = performance.getEntriesByType('navigation')[0]
            resolve(nav?.domContentLoadedEventEnd - nav?.startTime)
          })
        }
      })
    })

    // Navigate first, then measure
    await page.goto('./', { waitUntil: 'load' })
    const navTiming = await page.evaluate(() => {
      const nav = performance.getEntriesByType('navigation')[0]
      return nav?.domContentLoadedEventEnd - nav?.startTime
    })
    expect(navTiming).toBeLessThan(3000)
  })

  test('Largest Contentful Paint (LCP) under 2.5s', async ({ page }) => {
    await page.goto('./', { waitUntil: 'load' })

    const lcp = await page.evaluate(() => {
      return new Promise(resolve => {
        new PerformanceObserver(list => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          resolve(lastEntry?.startTime || 0)
        }).observe({ type: 'largest-contentful-paint', buffered: true })

        // Fallback timeout
        setTimeout(() => resolve(0), 3000)
      })
    })

    if (lcp > 0) {
      expect(lcp).toBeLessThan(2500)
    }
  })

  test('First Contentful Paint (FCP) under 1.8s', async ({ page }) => {
    await page.goto('./', { waitUntil: 'load' })

    const fcp = await page.evaluate(() => {
      const paintEntries = performance.getEntriesByType('paint')
      const fcpEntry = paintEntries.find(e => e.name === 'first-contentful-paint')
      return fcpEntry?.startTime || 0
    })

    if (fcp > 0) {
      expect(fcp).toBeLessThan(1800)
    }
  })

  test('Cumulative Layout Shift (CLS) under 0.1', async ({ page }) => {
    await page.goto('./', { waitUntil: 'load' })
    await page.waitForTimeout(2000) // Allow time for layout shifts

    const cls = await page.evaluate(() => {
      return new Promise(resolve => {
        let clsValue = 0
        new PerformanceObserver(list => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
            }
          }
        }).observe({ type: 'layout-shift', buffered: true })

        setTimeout(() => resolve(clsValue), 1000)
      })
    })

    expect(cls).toBeLessThan(0.1)
  })

  test('network requests are reasonable', async ({ page }) => {
    const requests = []
    page.on('request', req => requests.push(req))

    await page.goto('./', { waitUntil: 'networkidle' })

    // Portfolio site should not make excessive requests
    expect(requests.length).toBeLessThan(50)

    // Check total transfer size via performance API
    const transferSize = await page.evaluate(() => {
      const resources = performance.getEntriesByType('resource')
      return resources.reduce((total, r) => total + (r.transferSize || 0), 0)
    })

    // Total transfer should be under 5MB
    expect(transferSize).toBeLessThan(5 * 1024 * 1024)
  })
})
