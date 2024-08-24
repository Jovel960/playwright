import { test, expect, Page, chromium, BrowserContext } from "@playwright/test";

// type testScopeFixtures = {
//   adminCredentials: { username: string; password: string };
//   playWrightPage: Page;
// };
// type workerSkopeFixtures = {
//   browserContext : BrowserContext
// }
// const test = base.extend<testScopeFixtures, workerSkopeFixtures>({
//   playWrightPage: async ({ page }, use) => {
//     await page.goto("https://playwright.dev/");
//     await use(page);
//   },

//   adminCredentials: async ({}, use) => {
//     await use({ username: "string", password: "string" });
//   },
// });

test("TF 1 TC 1", async ({page}) => {
    console.log("TF 1 TC 1")
    await page.waitForTimeout(5000)
})

test("TF 1 TC 2", async ({page}) => {
    console.log("TF 1 TC 2")
    await page.waitForTimeout(5000)

})

test("TF 1 TC 3", async ({page}) => {
    console.log("TF 1 TC 3")
    await page.waitForTimeout(5000)

})

test("TF 1 TC 4", async ({page}) => {
    console.log("TF 1 TC 4")
    await page.waitForTimeout(5000)

})

test("TF 1 TC ", async ({page}) => {
    console.log("TF 1 TC 5")
    await page.waitForTimeout(5000)

})

