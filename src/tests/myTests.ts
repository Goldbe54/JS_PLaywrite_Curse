import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://www.codewars.com/dashboard/');
  
    await expect(page).toHaveTitle(/Codewars/);
  });