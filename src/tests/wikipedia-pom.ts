import { expect, type Locator, type Page } from '@playwright/test';

export class WikipediaLandingPage {
  readonly page: Page;
  readonly getLogoElement: Locator;
  readonly getMainTabElement: Locator;
  readonly getLoginButton: Locator;
  readonly getInputSearchFieldButton: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.getLogoElement = page.getByRole('link', { name: 'Перейти на головну сторінку' });
    this.getMainTabElement = page.getByRole('link', { name: 'Головна', exact: true });
    this.getLoginButton = page.getByRole('link', { name: 'Увійти' });
    this.getInputSearchFieldButton = page.getByPlaceholder('Пошук у Вікіпедії');
   }

  async goto() {
    await this.page.goto('https://uk.wikipedia.org/wiki/Головна_сторінка');
  }
}

export class WikiResultPage {
    readonly page: Page;
    readonly getArticleNameElement: Locator;
    readonly getInfoCellElement: Locator;
    readonly getSiteSubElement: Locator;
    readonly getAnnouncementElement: Locator;
    readonly getReadTabButton: Locator;
  
    constructor(page: Page) {
      this.page = page;
      this.getArticleNameElement = page.locator('#firstHeading').getByText('Україна');
      this.getInfoCellElement = page.getByRole('cell', { name: 'Україна', exact: true }).locator('b');
      this.getSiteSubElement = page.getByText('Матеріал з Вікіпедії — вільної енциклопедії');
      this.getAnnouncementElement = page.getByRole('link', { name: 'Українській Вікіпедії — 20' });
      this.getReadTabButton = page.getByRole('link', { name: 'Читати' });
     }
  
    async goto() {
      await this.page.goto('https://uk.wikipedia.org/wiki/Головна_сторінка');
    }
  }