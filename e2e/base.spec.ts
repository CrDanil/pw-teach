const { test, expect } = require('@playwright/test');

test('Поиск на Wikipedia', async ({ page }) => {
  // 1. Переходим на сайт
  await page.goto('https://www.wikipedia.org');

  // 2. Проверяем заголовок главной страницы
  await expect(page).toHaveTitle('Wikipedia');

  // 3. Вводим запрос
  await page.fill('input[name="search"]', 'Playwright');

  // 4. Кликаем по кнопке поиска
  await page.click('button[type="submit"]');

  // 5. Проверяем результат
  await expect(page.locator('h1#firstHeading')).toHaveText('Playwright');
});
