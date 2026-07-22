import { Locator } from '@playwright/test';
import { BaseElement } from '../../core';

/**
 * Represents a reusable input element.
 *
 * Responsibilities:
 * - Enter and clear values.
 * - Read the current input value.
 * - Reuse the common behavior provided by BaseElement.
 *
 * Restrictions:
 * - Must not contain business rules.
 * - Must not perform test assertions.
 */
export class InputComponent extends BaseElement {
  constructor(locator: Locator) {
    super(locator);
  }

  async type(value: string): Promise<void> {
    await this.fill(value);
  }

  async append(value: string): Promise<void> {
    await this.locator.pressSequentially(value);
  }

  async currentValue(): Promise<string> {
    return this.value();
  }
}