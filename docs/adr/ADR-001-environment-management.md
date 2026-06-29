# ADR-001 — Centralized Environment Management

## Status

Accepted

## Context

The platform must support multiple execution environments (local, development, QA, staging, production and CI/CD) without requiring changes to the test implementation.

Environment-specific information such as base URLs, credentials, feature flags and execution parameters should not be accessed directly throughout the codebase.

## Decision

A dedicated Environment layer will be responsible for loading and exposing configuration values to the framework.

The Playwright configuration and all framework components must consume configuration only through this layer.

Direct access to process.env outside the Environment module is not allowed.

## Consequences

### Positive

- Low coupling
- Centralized configuration
- Easier migration to secret managers
- Better maintainability
- Improved test portability

### Negative

- Additional abstraction layer
- Initial implementation effort