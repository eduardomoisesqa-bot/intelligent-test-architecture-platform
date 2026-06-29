# Framework Layered Architecture

## Objective

This document defines the layered architecture used by the Web Automation module of Intelligent Test Architecture.

The goal is to separate responsibilities clearly, reduce coupling and create a scalable foundation for automated tests.

## Layer Overview

```text
Tests
  ↓
Flows
  ↓
Pages
  ↓
Components
  ↓
Core
  ↓
Playwright

Tests

Tests describe the scenario and expected business behavior.

They must not contain:

selectors
low-level Playwright actions
test data creation logic
duplicated business flows
Flows

Flows represent business actions executed by the user.

Examples:

login
create account
checkout
payment
cancel order

Flows orchestrate Pages and Components.

They must not contain assertions.

Pages

Pages represent screens or routes of the application.

Pages know which components exist on a screen.

They must not contain business rules.

Components

Components represent reusable UI parts.

Examples:

buttons
inputs
forms
modals
tables
alerts

Components reduce duplication and make the automation closer to the frontend architecture.

Assertions

Assertions validate expected results.

They must not execute business flows or prepare test data.

Fixtures

Fixtures prepare test context, users, data and dependencies.

They must not validate UI behavior.

Core

Core contains shared abstractions used by the framework.

Examples:

BasePage
BaseComponent
BaseAssertion
Logger
Custom errors
Architecture Rules
Tests must describe behavior.
Flows must orchestrate actions.
Pages must represent screens.
Components must represent reusable UI elements.
Assertions must validate.
Fixtures must prepare context.
Config must centralize environment concerns.
Principle

The automation architecture must reflect the application architecture, not only automate its screens.