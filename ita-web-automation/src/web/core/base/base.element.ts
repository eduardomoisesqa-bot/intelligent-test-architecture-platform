import { Locator } from '@playwright/test';

/**
 * BaseElement
 *
 * Represents a single UI element.
 *
 * Every UI element in the framework must inherit from this class.
 *
 * Responsibilities:
 * - Encapsulate Playwright interactions
 * - Provide common UI actions
 * - Be reusable across the framework
 *
 * It MUST NOT contain business rules.
 */
export abstract class BaseElement {
  protected constructor(
    protected readonly locator: Locator
  ) {}

  async click(): Promise<void> {
    await this.locator.click();
  }

  async fill(value: string): Promise<void> {
    await this.locator.fill(value);
  }

  async clear(): Promise<void> {
    await this.locator.clear();
  }

  async hover(): Promise<void> {
    await this.locator.hover();
  }

  async focus(): Promise<void> {
    await this.locator.focus();
  }

  async press(key: string): Promise<void> {
    await this.locator.press(key);
  }

  async text(): Promise<string> {
    return (await this.locator.textContent()) ?? '';
  }

  async value(): Promise<string> {
    return await this.locator.inputValue();
  }

  async isVisible(): Promise<boolean> {
    return await this.locator.isVisible();
  }

  async isEnabled(): Promise<boolean> {
    return await this.locator.isEnabled();
  }

  async isDisabled(): Promise<boolean> {
    return await this.locator.isDisabled();
  }

  async waitVisible(): Promise<void> {
    await this.locator.waitFor({
      state: 'visible'
    });
  }
}