import { defineConfig, devices } from '@playwright/test'

// By default the suite serves this folder and tests it locally, so a pull request
// is tested against its own code. Set BASE_URL to test a deployed copy instead,
// e.g. BASE_URL=https://eduardmilitarug.github.io/
const LOCAL_URL = 'http://localhost:4173/'
const BASE_URL = process.env.BASE_URL || LOCAL_URL

export default defineConfig({
  webServer: process.env.BASE_URL
    ? undefined
    : {
        command: 'npm run serve',
        url: LOCAL_URL,
        reuseExistingServer: !process.env.CI,
        timeout: 120_000
      },
  testDir: './e2e/tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { open: 'never' }],
    ['list']
  ],
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 10_000,
    navigationTimeout: 30_000
  },
  expect: {
    toHaveScreenshot: {
      animations: 'disabled',
      maxDiffPixelRatio: 0.01
    }
  },
  // Functional projects skip visual/; screenshot baselines are Linux-only and
  // live in their own project, run in the Playwright Docker image.
  projects: [
    {
      name: 'visual',
      testMatch: 'visual/**/*.spec.js',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'chromium',
      testIgnore: 'visual/**',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'firefox',
      testIgnore: 'visual/**',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'webkit',
      testIgnore: 'visual/**',
      use: { ...devices['Desktop Safari'] }
    },
    {
      name: 'mobile-chrome',
      testIgnore: 'visual/**',
      use: { ...devices['Pixel 5'] }
    },
    {
      name: 'mobile-safari',
      testIgnore: 'visual/**',
      use: { ...devices['iPhone 13'] }
    },
    {
      name: 'tablet',
      testIgnore: 'visual/**',
      use: { ...devices['iPad (gen 7)'] }
    }
  ]
})
