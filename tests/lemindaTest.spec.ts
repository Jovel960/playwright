import { test, expect } from "@playwright/test";

test("TF 2 TC 1", async ({page}) => {
    console.log("TF 2 TC 1")
    await page.waitForTimeout(5000)
})

test("TF 2 TC 2", async ({page}) => {
    console.log("TF 2 TC 2")
    await page.waitForTimeout(5000)

})

test("TF 2 TC 3", async ({page}) => {
    console.log("TF 2 TC 3")
    await page.waitForTimeout(5000)

})

test("TF 2 TC 4", async ({page}) => {
    console.log("TF 2 TC 4")
    await page.waitForTimeout(5000)

})

test("TF 2 TC 5", async ({page}) => {
    console.log("TF 2 TC 5")
    await page.waitForTimeout(5000)

})