import { test as base, expect, Page, BrowserContext } from "@playwright/test";

type LoggedInContext = {
  context: BrowserContext;
  page: Page;
};

type workerFixture = { loggedInContext: LoggedInContext };

const test = base.extend<{}, workerFixture>({
  loggedInContext: [
    async ({ browser }, use, workerInfo) => {
        console.log("worker info", workerInfo.workerIndex);
      const context = await browser.newContext();
      const page = await context.newPage();

      await page.goto("https://research.leminda.com/login");
      await page.locator("[name='email']").fill("yovel544@gmail.com");
      await page.locator("[name='current-password']").fill("Test2000");
      await page.locator('[data-id="loginBtn"]').click();
      await page.waitForSelector('[data-id="myCollections"]', {
        state: "visible",
      });
      await use({ page, context });
      await context.close();
    },
    { scope: "worker" },
  ],

  page: async ({ loggedInContext }, use) => {
    const { page } = loggedInContext;
    await page.goto("https://research.leminda.com/my-collections");
    await use(page);
  },
});

export { expect, test };
