SauceDemo Playwright Automation Framework

Project Overview

This project is an end-to-end test automation framework built using Playwright and TypeScript to test the SauceDemo web application.

Application: https://www.saucedemo.com/

Tech Stack

Playwright Test

TypeScript

Node.js and npm

Page Object Model (POM)

Reusable fixtures and helper functions

Environment configuration using dotenv

Git and GitHub

GitHub Actions CI

HTML test reporting

Framework Structure

saucedemo-playwright-framework/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── config/
│   ├── env.ts
│   └── test-data.ts
├── fixtures/
│   └── test-fixtures.ts
├── pages/
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
├── test-data/
│   └── users.ts
├── tests/
├── utils/
│   ├── helpers.ts
│   └── logger.ts
├── .env
├── playwright.config.ts
├── package.json
└── tsconfig.json

Prerequisites

Node.js and npm installed

Git installed

Visual Studio Code (recommended)

Installation

Clone the repository:

git clone https://github.com/narmadha-tester/saucedemo-playwright-framework.git
cd saucedemo-playwright-framework
npm install
npx playwright install

Create a .env file in the project root and configure the application URL as required.

Running Tests

Run all configured tests:

npm test

Run Chromium tests:

npm run test:chromium

Run TypeScript type checking:

npm run test:types

Open the HTML report:

npm run test:report

Test Coverage

Login and authentication scenarios

Invalid and locked-out user scenarios

Product inventory and sorting

Cart operations

Checkout workflow

Reusable test helpers and fixtures

Reporting and CI

The framework is configured to generate Playwright HTML reports and use GitHub Actions for automated Chromium test execution.

Failure evidence such as screenshots and traces depends on the Playwright configuration.

Design Approach

The framework uses the Page Object Model to separate page locators and actions from test specifications. Reusable fixtures, centralized test data, environment configuration, and helper utilities support maintainability and reuse.

Repository

https://github.com/narmadha-tester/saucedemo-playwright-framework