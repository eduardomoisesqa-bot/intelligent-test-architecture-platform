/**
 * BaseComponent
 *
 * Represents a reusable UI component composed by one or more elements.
 *
 * Examples:
 * - LoginForm
 * - HeaderMenu
 * - UserCard
 * - ModalDialog
 *
 * Responsibilities:
 * - Group related UI elements
 * - Provide component-level behaviors
 * - Keep Pages smaller and more reusable
 *
 * It MUST NOT contain test assertions.
 */
export abstract class BaseComponent {
  abstract waitForReady(): Promise<void>;
}