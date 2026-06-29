import { defineConfig, devices } from '@playwright/test';
import { environment } from './src/web/config';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : environment.execution.retries,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  timeout: environment.execution.timeout,

  use: {
    baseURL: environment.application.baseUrl,
    headless: environment.execution.headless,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});