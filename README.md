

# Shohoz Bus Booking Automation

This repository contains an automated test suite for verifying the bus booking functionality on the Shohoz website using Playwright and the Page Object Model (POM) design pattern.

## Table of Contents
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Running the Tests](#running-the-tests)
- [Test Reports](#test-reports)
- [Continuous Integration](#continuous-integration)
- [Design Choices](#design-choices)

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── playwright.yml
├── node_modules/
├── pageObjects/
│   ├── basePage.js
│   ├── homePage.js
│   └── searchResultsPage.js
├── tests/
│   └── example.spec.js
├── tests-examples/
│   └── demo-todo-app.spec.js
├── .gitignore
├── package.json
└── README.md
```

- **.github/workflows/playwright.yml**: Configuration for running tests in a CI/CD pipeline using GitHub Actions.
- **pageObjects/**: Contains the Page Object Model classes.
  - **basePage.js**: Base class for common page methods.
  - **homePage.js**: Page object for the home page.
  - **searchResultsPage.js**: Page object for the search results page.
- **tests/**: Contains the test cases.
  - **example.spec.js**: Test case for verifying bus booking on Shohoz.
- **tests-examples/**: Contains example test cases for reference.
- **package.json**: Project dependencies and scripts.
- **README.md**: Project documentation.

## Setup and Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/shohoz-bus-booking-automation.git
   cd shohoz-bus-booking-automation
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Install Playwright browsers**:
   ```sh
   npx playwright install --with-deps
   ```

## Running the Tests

To run the tests, use the following command:
```sh
npx playwright test
```

## Test Reports

After running the tests, Playwright generates a report. You can view the report by opening the following file in your browser:
```
playwright-report/index.html
```

## Continuous Integration

This project is configured to run tests automatically using GitHub Actions. The configuration file is located at 

playwright.yml

.

### GitHub Actions Workflow

The workflow is triggered on push and pull request events to the `main` or `master` branches. It performs the following steps:
1. Checks out the repository.
2. Sets up Node.js.
3. Installs project dependencies.
4. Installs Playwright browsers.
5. Runs the Playwright tests.
6. Uploads the test report as an artifact.

## Design Choices

### Page Object Model (POM)

The Page Object Model design pattern is used to create an abstraction layer for the web pages. This helps in:
- Reducing code duplication.
- Improving test maintenance.
- Enhancing code readability.

### Test Case

The test case in 

example.spec.js

 verifies the following:
1. The bus option is selected by default.
2. A one-way ticket search from Dhaka to Chittagong on a specific date.
3. Selection of bus type and operators.
4. Booking the lowest price ticket.
5. Verifying the ability to select 4 tickets and checking trip details.

### CI/CD Integration

The project is integrated with GitHub Actions for continuous integration. This ensures that tests are automatically run on every push or pull request, providing immediate feedback on the health of the codebase.

---