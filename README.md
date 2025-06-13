# playwright_project

This repository showcases automated UI, API, and end-to-end tests using **Microsoft Playwright**. It demonstrates best practices in modern web testing, including cross-browser testing, reusable page objects, and integration with CI/CD pipelines.

## Tech Stack

- **Framework**: [Playwright](https://playwright.dev/)
- **Language**: TypeScript
- **Assertion Library**: Built-in Playwright test runner
- **Test Design Pattern**: Page Object Model (POM)
- **Report Generation**: Playwright HTML Reporter

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/playwright-portfolio.git
cd playwright-portfolio

### 2. Install dependencies
npm install

###3. Run tests
npx playwright test

###4. Run tests in specific browser
npx playwright test --project=chromium

###5. Run in headed mode
npx playwright test --headed

###6. HTML Report
npx playwright show-report
It will open an interactive report at playwright-report/index.html.

### Project Structure

.
├── tests/                  # Test files 
├── pages/                  # Page Object Models (e.g., LoginPage.ts)
├── playwright.config.ts    # Test runner configuration
├── testData/               # Testdata files                 
└── README.md

###  Features Covered
1.Login flow validation
2.Add to cart validation
3.Element locators with CSS and XPath
4.Rich HTML test reports
5.Page Object Model (POM) architecture
6. Retry logic 