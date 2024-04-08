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

# References
- Playwright JavaScript: `https://playwright.dev/docs/writing-tests`
- Test app: `https://magento.softwaretestingboard.com/radiant-tee.html`