# Playwright MCP Server Test Automation

This project contains automated tests for the Text Message Templates functionality using Playwright with MCP Server integration.

## Project Structure

```
playwright-mcp-server/
├── tests/
│   └── test-MFLP8-TC1.spec.ts
├── page-objects/
│   └── text-message-templates-page.ts
├── utils/
│   └── helpers.ts
├── playwright.config.ts
├── package.json
└── README.md
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

To run tests in headed mode:
```bash
npm run test:headed
```

To run tests in headless mode:
```bash
npm run test
```

## Test Cases

### MFLP8-TC1: Verify Navigation to Text Message Templates
- Validates the navigation path to Text Message Templates page
- Verifies the presence of Text Message Templates header
- Includes login and logout steps

## Page Objects

The project uses the Page Object Model pattern to maintain test elements and actions:
- `text-message-templates-page.ts`: Contains locators and actions for Text Message Templates functionality

## Utils

- `helpers.ts`: Contains utility functions for common operations like waiting for page load and elements 