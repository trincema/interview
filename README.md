# interview
- Run tests: `npx playwright test`
- Run tests in UI mode: `npx playwright test --ui`
- Run tests in headed mode (see how it runs in the browser):
    - `npx playwright test --headed`
- Run tests in headed mode on only one specific browser:
    - `npx playwright test --headed --project chromium`
- Generate tests: `npx playwright codegen https://magento.softwaretestingboard.com/radiant-tee.html`
- Show HTML Test Reports: `npx playwright show-report`
- Updating Playwright:
     - `npm install -D @playwright/test@latest`
     - download new browser binaries and their dependencies: `npx playwright install --with-deps`

# Test Analysis and Design
## Product Qty
Apply Equivalence Partitions Test Design Technique
| Partition 1 - Invalid | Partition 2 - Valid    | Partition 3 - Invalid    |
| :-------------------: | :--------------------: | :----------------------: |
| <1                    | 1-to-10000             | >10000                   |
Apply Boundary Value Analysis

# References
- Playwright JavaScript: `https://playwright.dev/docs/writing-tests`
- Test app: `https://magento.softwaretestingboard.com/radiant-tee.html`