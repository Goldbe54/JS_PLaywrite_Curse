import { expect, type Locator, type Page } from '@playwright/test';

export class UaSerialLandingPage {
  readonly page: Page;
  readonly getLogoElement: Locator;
  readonly getLoginButton: Locator;
  readonly getTelegramLinkButton: Locator;
  readonly getInputSearchField: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.getLogoElement = page.getByRole('banner').getByLabel(' uaserial ');
    this.getLoginButton = page.getByRole('link', { name: 'Вхід' });
    this.getTelegramLinkButton = page.getByRole('link', { name: 'Ми в Telegram' });
    this.getInputSearchField = page.getByText('Пошук серіалів, сезонів тощо');
   }

  async goto() {
    await this.page.goto('https://uaserial.club');
  }
}

export class UaSerialSearchResultsPage {
    readonly page: Page;
    readonly getLogoElement: Locator;
    readonly getSearchResultTitleElement: Locator;
    readonly getLoginButton: Locator;
    readonly getTelegramLinkButton: Locator;
    readonly getProductTypeElement: Locator;
    
    constructor(page: Page) {
      this.page = page;
      this.getLogoElement = page.getByRole('banner').getByLabel(' uaserial ');
      this.getSearchResultTitleElement = page.getByRole('heading', { name: 'Результат пошуку "Втеча"' });
      this.getLoginButton = page.getByRole('link', { name: 'Вхід' });
      this.getTelegramLinkButton = page.getByRole('link', { name: 'Ми в Telegram' });
      this.getProductTypeElement = page.getByText('Фільми та серіали:');

    }
  
    async goto(name: string = 'rest') {
      await this.page.goto(`https://uaserial.club/search?query=${name}`);
    }
  }