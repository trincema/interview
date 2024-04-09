# Running Tests
- Run tests: `npx playwright test`
- Run specific test: `npx playwright test landing-page.spec.ts`
- Run tests in UI mode: `npx playwright test --ui`
- Run tests in headed mode (see how it runs in the browser):
    - `npx playwright test --headed`
- Run tests in headed mode on only one specific browser:
    - `npx playwright test --headed --project chromium`
- Generate tests: `npx playwright codegen https://magento.softwaretestingboard.com/radiant-tee.html`
- Show HTML Test Reports: `npx playwright show-report`
- Updating Playwright:
     - `npm install -D @playwright/test@latest`
     - download new browser binaries and their dependencies: `npx playwright install --with-deps
- Debugging Timeout: `await page.waitForTimeout(3000000);`

# Test Analysis and Design
## Product Qty
Apply Equivalence Partitions Test Design Technique
| Partition 1 - Invalid | Partition 2 - Valid    | Partition 3 - Invalid    |
| :-------------------: | :--------------------: | :----------------------: |
| <1                    | 1-to-10000             | >10000                   |

Apply Boundary Value Analysis

# Reporting
The Artifacts section of a job contains contains a downloadable artifact called `playwright-report`
that can be downloaded as `.zip` archive and contains the following:
- `index.html` page, with an HTML report of the run
- `data` folder where the recordings/vodeos of the run are stored
Also, if the history of the runs must be retained, or we just want to use a more powerful reporting tool,
an integration has been made with ReportPortal tool. Details below.
## HTML Report
The HTML Report can be downloaded in the Artifacts section 
## ReportPortal integration

# Further Improvements
## Test Analysis and Design
- Improvements can be made on doing proper test analysis and design on `Shipping Form` elements.
## Decoupling Automation Tool
- As per ISTQB Advanced TAE, the Automation Framework is not the automation tool alone, and flexibility has to
be provided in the decoupling of the Framework itself from the automation tool. Some steps in this direction has
been taken already by having Page Object Model design pattern implemented and have a package to store the Test Data.
But, these POM objects still have a coupling with `page` Playwright object from the specs. A better improvement here
would be to decouple that from the Framework, and also in the POM itself, try to use more generic locators so that
in the future we could easily switch to another Automation Tool if desired, without having to rewrite all the TAF codebase,
or being forced to do a major refactoring.
## Other
- Other improvements could be made for sure.

# References
- Playwright JavaScript: `https://playwright.dev/docs/writing-tests`
- Test app: `https://magento.softwaretestingboard.com/radiant-tee.html`