
# SauceDemo Playwright Automation Framework

A UI test automation framework for the SauceDemo web application, built using Playwright Test and TypeScript.

## Project Overview

This project demonstrates end-to-end UI automation using reusable page objects, fixtures, helper utilities, configurable test data, and GitHub Actions CI.

**Application:** [SauceDemo](https://www.saucedemo.com/)

## Tech Stack

- Playwright Test
- TypeScript
- Node.js and npm
- Page Object Model (POM)
- Reusable fixtures and helper functions
- Environment configuration with dotenv
- Git and GitHub
- GitHub Actions
- HTML test reporting

## Framework Structure

```text
.github/workflows/  GitHub Actions workflow
config/             Environment configuration
fixtures/           Reusable test fixtures
pages/              Page Object Model classes
test-data/          Test data
tests/              Automated test scenarios
utils/              Helper functions and utilities
```

## Prerequisites

- Node.js and npm
- Git

## Installation

Clone the repository:

```bash
git clone https://github.com/narmadha-tester/saucedemo-playwright-framework.git
cd saucedemo-playwright-framework
```

Install dependencies and Playwright browsers:

```bash
npm install
npx playwright install
```

## Running Tests

Run the test suite using the configured npm script:

```bash
npm test
```

You can also run Playwright directly:

```bash
npx playwright test
```

## Test Execution

The framework has been tested across Chromium, Firefox, and WebKit. The project contains 14 test cases, with 42 successful browser-test executions reported during validation.

## Continuous Integration

GitHub Actions is configured to execute the Playwright tests. See the workflow under `.github/workflows/`.

## Key Features

- Page Object Model for reusable page interactions
- Fixtures and helper utilities
- Centralized test data
- Environment configuration
- Cross-browser test execution
- Automated execution through GitHub Actions
- HTML test reporting

## Author

**Narmadha V**

[GitHub Profile](https://github.com/narmadha-tester)
