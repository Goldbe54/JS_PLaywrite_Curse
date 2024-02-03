import { expect, type Locator, type Page } from '@playwright/test';

export class MdnLandingPage {
  readonly page: Page;
  readonly getLogoElement: Locator;
  readonly getLoginButton: Locator;
  readonly getSignUpButton: Locator;
  readonly getBlogButton: Locator;
  readonly getSearchInputField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getLogoElement = page.getByRole('banner').getByLabel('MDN homepage');
    this.getLoginButton = page.getByRole('link', { name: 'Log in' });
    this.getSignUpButton = page.getByRole('link', { name: 'Sign up for free' });
    this.getBlogButton = page.getByLabel('Main menu', { exact: true }).getByRole('link', { name: 'Blog' });
    this.getSearchInputField = page.locator('#top-nav-search-input');
   }

  async goto() {
    await this.page.goto('https://developer.mozilla.org/en-US/');
  }
}

export class MdnBlogPage {
    readonly page: Page;
    readonly getLogoElement: Locator;
    readonly getMainTitleElement: Locator;
    readonly getHelpProposeElement: Locator;
    readonly getLoginButton: Locator;
    readonly getSignUpButton: Locator;
  
    constructor(page: Page) {
      this.page = page;
      this.getLogoElement = page.getByRole('banner').getByLabel('MDN homepage');
      this.getMainTitleElement = page.getByRole('heading', { name: 'Blog it better' });
      this.getHelpProposeElement = page.getByText('Get real-time assistance with');
      this.getLoginButton = page.getByRole('link', { name: 'Log in' });
      this.getSignUpButton = page.getByRole('link', { name: 'Sign up for free' });
     }
  
    async goto() {
      await this.page.goto('https://developer.mozilla.org/en-US/blog/');
    }
  }

  export class MdnDocsPage {
    readonly page: Page;
    readonly getMainDockTitleElement: Locator;
    readonly getDockPathElement: Locator;
    readonly getDockLeftbarElement: Locator;
    readonly getDescriptionElement: Locator;
    readonly getDockSubtitleElement: Locator;
  
    constructor(page: Page) {
      this.page = page;
      this.getMainDockTitleElement = page.getByRole('heading', { name: 'String', exact: true });
      this.getDockPathElement = page.getByText('ReferencesJavaScriptReferenceStandard built-in objectsStringArticle');
      this.getDockLeftbarElement = page.getByLabel('Related Topics').getByRole('link', { name: 'String', exact: true });
      this.getDescriptionElement = page.getByRole('link', { name: '# Description' });
      this.getDockSubtitleElement = page.getByRole('link', { name: '# Creating strings' });
     }
  
    async goto() {
      await this.page.goto('https://developer.mozilla.org/en-US/docs/Web/');
    }
  }