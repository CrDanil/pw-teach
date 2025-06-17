const { test, expect } = require('@playwright/test');

let shouldRunUITest = false;

test('GET check', async ({ request }) => {
        const response = await request.get('https://demoqa.com/automation-practice-form');
    expect(response.status()).toBe(200);
    shouldRunUITest = true; // пометка, что можно идти в UI
});

test('UI-test', async ({ page }) => {
    test.skip(!shouldRunUITest, 'Форма недоступна — UI-тест пропущен');

    page.on('request', request => {
        console.log('Запрос:', request.url());
    });

    await page.goto('https://demoqa.com/automation-practice-form');

    await page.locator('#firstName').fill("Danila"); //CSS
    await page.locator('//*[@id="firstName"]').fill('Danila'); //xPath

    await page.locator('#lastName').fill("Z");
    await page.locator('#userEmail').fill("Danila@mail.ru");

    await expect(page.locator('#gender-radio-1').isChecked())

    await page.locator('label[for="gender-radio-1"]').click(); //CSS
    await page.locator('//*[@id="genterWrapper"]/div[2]/div[1]/label').click(); //xPath

    await page.getByRole('textbox', { name: 'Mobile Number' }).fill("1234567890");
    await page.getByRole('button', { name: 'Submit' }).click();

    console.log('Запрос:');
});