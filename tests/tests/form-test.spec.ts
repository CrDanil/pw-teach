import { test, expect } from "@playwright/test";

test("форма: ввод текста и проверка", async ({ page }) => {
  // Используем специальный сайт для тестов форм
  await page.goto("https://demo.playwright.dev/todomvc");

  // Ждём поле ввода задач и заполняем его
  await page.fill(".new-todo", "Сделать задание по Playwright");
  await page.press(".new-todo", "Enter");

  // Проверяем, что задача появилась в списке
  const todoItem = page.locator(
    ".todo-list li >> text=Сделать задание по Playwright"
  );
  await expect(todoItem).toBeVisible();
});
