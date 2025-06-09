import { test, expect } from "@playwright/test";

test("проверка перехода по ссылке Get started", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.click("text=Get started");
  await expect(page).toHaveURL(/.*intro/);
});
