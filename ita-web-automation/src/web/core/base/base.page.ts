import { Page } from '@playwright/test';

/**
 * BasePage
 *
 * Represents an application page.
 *
 * Responsibilities:
 * - Own the Playwright Page instance
 * - Represent an application route
 * - Expose reusable components
 *
 * It MUST NOT contain business rules.
 */
export abstract class BasePage {
  protected constructor(
    protected readonly page: Page
  ) {}

  abstract waitForLoad(): Promise<void>;
}