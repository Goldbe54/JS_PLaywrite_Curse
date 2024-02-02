import { expect, type Locator, type Page } from '@playwright/test';

export class CodewarsLandingPage {
  readonly page: Page;
  readonly getLogoElement: Locator;
  readonly getStartedButton: Locator;
  readonly getLoginButton: Locator;
  readonly getAboutCodewarsTitleElement: Locator;
  readonly getJoinButton: Locator;
  readonly getBlogButton: Locator;
  readonly getForEducatorsButton: Locator;
  readonly getForCompaniesButton: Locator;
  readonly getMaintTitleElement: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getLogoElement = page.getByLabel('home').nth(1);
    this.getStartedButton = page.getByRole('link', { name: 'Get Started' });
    this.getLoginButton = page.getByRole('link', { name: 'Log in' }).nth(1);
    this.getAboutCodewarsTitleElement = page.getByRole('heading', { name: 'What can I use Codewars for?' });
    this.getJoinButton = page.getByRole('link', { name: 'Join' }).nth(1);
    this.getBlogButton = page.getByRole('link', { name: 'Blog' }).nth(1);
    this.getForEducatorsButton = page.getByRole('link', { name: 'For Educators' }).nth(1);
    this.getForCompaniesButton = page.getByRole('link', { name: 'For Companies' }).nth(1);
    this.getMaintTitleElement = page.getByRole('heading', { name: 'Achieve mastery through' });
  }

  async goto() {
    await this.page.goto('https://www.codewars.com/dashboard/');
  }
}