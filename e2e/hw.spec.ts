const { test, expect } = require('@playwright/test');
test('Переход', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle('Example Domain');
    await page.getByText('More information...').click()
    await expect(page).toHaveURL(/https?:\/\/www\.iana\.org\/help\/example-domains/);
    await page.locator('#header').getByRole('link', { name: 'Domains' }).click(); //getByRole
    //await page.locator('//*[@id="header"]/div[2]/ul/li[1]/a').click() //xpath
    await expect(page).toHaveURL(/https?:\/\/www\.iana\.org\/domains/);
});
