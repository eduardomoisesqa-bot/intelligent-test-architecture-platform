import { Locator } from '@playwright/test';
import { BaseElement } from '../../core';

/**
 * Represents a reusable button element.
 *
 * Responsibilities:
 * - Execute button-specific interactions.
 * - Reuse the common behavior provided by BaseElement.
 *
 * Restrictions:
 * - Must not contain business rules.
 * - Must not perform test assertions.
 */
export class ButtonComponent extends BaseElement {
  constructor(locator: Locator) {
    super(locator);
  }

  async submit(): Promise<void> {
    await this.click();
  }
}