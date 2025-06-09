import { test, expect } from '@playwright/test';

test('демо: взаимодействие с элементами', async ({ page }) => {
  await page.goto('https://playwright.dev');

  await expect(page).toHaveTitle(/Playwright/);

  // Кликаем по тексту
  await page.click('text=Get started');

  // Проверяем, что перешли по адресу с /intro
  await expect(page).toHaveURL(/.*intro/);

  // Проверяем наличие заголовка
  await expect(page.locator('h1')).toHaveText('Installation');
});