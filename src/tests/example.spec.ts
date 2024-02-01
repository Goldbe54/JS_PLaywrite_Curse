import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
 
test('codewars base check', async ({ page }) => {
  await page.goto('https://www.codewars.com/dashboard/');

  await expect(page).toHaveTitle(/Codewars/);
  await expect(page.getByLabel('home').nth(1)).toBeVisible;
  await expect(page.getByRole('link', { name: 'Get Started' })).toBeVisible;
  await expect(page.getByRole('link', { name: 'Log in' }).nth(1)).toBeVisible;
  await expect(page.getByRole('heading', { name: 'What can I use Codewars for?' })).toBeVisible;
  await expect(page.getByRole('link', { name: 'Join' }).nth(1)).toBeVisible;
  await expect(page.getByRole('link', { name: 'Blog' }).nth(1)).toBeVisible;
  await expect(page.getByRole('link', { name: 'For Educators' }).nth(1)).toBeVisible;
  await expect(page.getByRole('link', { name: 'For Companies' }).nth(1)).toBeVisible;
  await expect(page.getByRole('heading', { name: 'Achieve mastery through' })).toBeVisible;
});

test('developer mozila base check', async ({ page }) => {
  await page.goto('https://developer.mozilla.org/en-US/');

  await expect(page).toHaveTitle(/MDN Web Docs/);
  await expect(page.getByRole('banner').getByLabel('MDN homepage')).toBeVisible;
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible;
  await expect(page.getByRole('link', { name: 'Sign up for free' })).toBeVisible;

  await page.getByLabel('Main menu', { exact: true }).getByRole('link', { name: 'Blog' }).click();

  await expect(page).toHaveTitle(/MDN Blog/);
  await expect(page.getByRole('banner').getByLabel('MDN homepage')).toBeVisible;
  await expect(page.getByRole('heading', { name: 'Blog it better' })).toBeVisible;
  await expect(page.getByText('Get real-time assistance with')).toBeVisible;
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible;
  await expect(page.getByRole('link', { name: 'Sign up for free' })).toBeVisible;
});

test('developer mozila search check', async ({ page }) => {
  await page.goto('https://developer.mozilla.org/en-US/');

  await expect(page).toHaveTitle(/MDN Web Docs/);
  await expect(page.getByRole('banner').getByLabel('MDN homepage')).toBeVisible;
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible;
  await expect(page.getByRole('link', { name: 'Sign up for free' })).toBeVisible;

  await page.locator('#top-nav-search-input').click();
  await page.locator('#top-nav-search-input').fill("String");
  await page.waitForTimeout(100);
  await page.locator('#top-nav-search-input').press('Enter');

  await expect(page).toHaveTitle(/String - JavaScript | MDN/);
  await expect(page.getByRole('heading', { name: 'String', exact: true })).toBeVisible;
  await expect(page.getByText('ReferencesJavaScriptReferenceStandard built-in objectsStringArticle')).toBeVisible;
  await expect(page.getByLabel('Related Topics').getByRole('link', { name: 'String', exact: true })).toBeVisible;
  await expect(page.getByRole('link', { name: '# Description' })).toBeVisible;
  await expect(page.getByRole('link', { name: '# Creating strings' })).toBeVisible;
});

test('wikipedia base check', async ({ page }) => {
  await page.goto('https://uk.wikipedia.org/wiki/Головна_сторінка');

  await expect(page).toHaveTitle(/Вікіпедія/);
  await expect(page.getByRole('link', { name: 'Перейти на головну сторінку' })).toBeVisible;
  await expect(page.getByRole('link', { name: 'Головна', exact: true })).toBeVisible;
  await expect(page.getByRole('link', { name: 'Увійти' })).toBeVisible;

  await page.getByPlaceholder('Пошук у Вікіпедії').click();
  await page.getByPlaceholder('Пошук у Вікіпедії').fill("Україна");
  await page.waitForTimeout(100);
  await page.getByPlaceholder('Пошук у Вікіпедії').press('Enter');

  await expect(page).toHaveTitle(/Україна — Вікіпедія/);
  await expect(page.locator('#firstHeading').getByText('Україна')).toBeVisible;
  await expect(page.getByRole('cell', { name: 'Україна', exact: true }).locator('b')).toBeVisible;
  await expect(page.getByText('Матеріал з Вікіпедії — вільної енциклопедії')).toBeVisible;
  await expect(page.getByRole('link', { name: 'Українській Вікіпедії — 20' })).toBeVisible;
  await expect(page.getByRole('link', { name: 'Читати' })).toBeVisible;
});

test('uaserial base check', async ({ page }) => {
  await page.goto('https://uaserial.club/');

  await expect(page).toHaveTitle(/Дивись фільми та серіали лише українською онлайн – UAserial.club/);
  await expect(page.getByRole('banner').getByLabel('uaserial')).toBeVisible;
  await expect(page.getByRole('link', { name: 'Вхід' })).toBeVisible;
  await expect(page.getByRole('link', { name: 'Ми в Telegram' })).toBeVisible;

  await page.getByText('Пошук серіалів, сезонів тощо').click();
  await page.getByText('Пошук серіалів, сезонів тощо').fill("Втеча");
  await page.waitForTimeout(100);
  await page.getByText('Пошук серіалів, сезонів тощо').press('Enter');

  await expect(page).toHaveTitle(/Пошук за запитом Втеча/);
  await expect(page.getByRole('heading', { name: 'Результат пошуку "Втеча"' })).toBeVisible;
  await expect(page.getByRole('banner').getByLabel('uaserial')).toBeVisible;
  await expect(page.getByRole('link', { name: 'Вхід' })).toBeVisible;
  await expect(page.getByRole('link', { name: 'Ми в Telegram' })).toBeVisible;
  await expect(page.getByText('Фільми та серіали:')).toBeVisible;
});