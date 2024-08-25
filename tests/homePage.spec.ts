import { test, expect } from '@playwright/test';
test('get started link', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    await expect (page.getByLabel('Amazon.in', { exact: true })).toBeVisible();

    //search in searchbar
    await page.getByPlaceholder('Search Amazon.in').fill("Redmi");
    await page.getByRole('button', { name: 'Go',exact:true }).click();

    //add item in cart
    await page.locator('#a-autoid-1-announce').click();

    //check for item in cart
    await page.getByLabel('items in cart').click();

    //increase the quantity
    await page.locator('.sc-action-quantity').click();
    await page.locator("#quantity_2").click();

});