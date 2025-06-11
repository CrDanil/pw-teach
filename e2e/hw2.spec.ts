const {test, expect} = require('@playwright/test');
test('hw2', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');
    await page.locator('//*[@id="firstName"]').fill("Danila");
    await page.locator('//*[@id="lastName"]').fill("Z");
    await page.locator('//*[@id="userEmail"]').fill("Danila@mail.ru");
    await page.locator('//*[@id="genterWrapper"]/div[2]/div[1]/label').click();
    await page.getByRole('textbox', { name: 'Mobile Number' }).fill("1234567890");
    await page.getByRole('button', {name: 'Submit'}).click();

})