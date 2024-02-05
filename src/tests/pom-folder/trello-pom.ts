import { expect, type Locator, type Page } from '@playwright/test';

export class TrelloLandingPage {
  readonly page: Page;
  readonly getLoginButton: Locator;
  readonly getAtlantisTrelloLogo: Locator;
  readonly getFeaturesDropdown: Locator;
  readonly getSolutionsDropdown: Locator;
  readonly getPlansDropdown: Locator;
  readonly getResourcesDropdown: Locator;
  readonly getSignUpButton: Locator;
  readonly getAnnouncementElement: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.getLoginButton = page.getByTestId('bignav').getByRole('link', { name: 'Log in' });
    this.getAtlantisTrelloLogo = page.getByTestId('bignav').getByTestId('logo_link');
    this.getFeaturesDropdown = page.getByRole('button', { name: 'Features' });
    this.getSolutionsDropdown = page.getByRole('button', { name: 'Solutions' });
    this.getPlansDropdown = page.getByRole('button', { name: 'Plans' });
    this.getResourcesDropdown = page.getByRole('button', { name: 'Resources' });
    this.getSignUpButton = page.getByRole('link', { name: 'Get Trello for free' });
    this.getAnnouncementElement = page.getByText('Accelerate your teams\' work');
   }

  async goto() {
    await this.page.goto('https://trello.com');
  }
}

export class TrelloLoginPage {
    readonly page: Page;
    readonly getEnterEmailField: Locator;
    readonly getContinueButton: Locator;
    readonly getEnterPassField: Locator;
    readonly getLoginButton: Locator;

    constructor(page: Page) {
      this.page = page;
      this.getEnterEmailField = page.locator("//input[@id='username']");
      this.getContinueButton = page.locator("//button[@id='login-submit']");
      this.getEnterPassField = page.locator("//input[@id='password']");
      this.getLoginButton = page.getByRole('button', { name: 'Log in' });
    }
  
    async goto(name: string = 'rest') {
      await this.page.goto(`https://id.atlassian.com/login`);
    }

    async loginViaEmail(email: string, pass: string){
        await this.getEnterEmailField.click();
        await this.getEnterEmailField.fill(email);
        await this.getContinueButton.click();
        await this.getEnterPassField.click();
        await this.getEnterPassField.fill(pass);
        await this.getLoginButton.click();
    }
  }

  export class TrelloHomePage {
    readonly page: Page;
    readonly getTrelloLogo: Locator;
    readonly getWorkspacesDropdown: Locator;
    readonly getRecentDropdown: Locator;
    readonly getStarredDropdown: Locator;
    readonly getMoreDropdown: Locator;
    readonly getCreateMenuButton: Locator;
    
    constructor(page: Page) {
      this.page = page;
      this.getTrelloLogo = page.getByLabel('Back to home');
      this.getWorkspacesDropdown = page.getByTestId('workspace-switcher');
      this.getRecentDropdown = page.getByTestId('recently-viewed-boards-menu');
      this.getStarredDropdown = page.getByTestId('starred-boards-menu');
      this.getMoreDropdown = page.getByLabel('More');
      this.getCreateMenuButton = page.getByTestId('header-create-menu-button');
     }
  
    async goto() {
      await this.page.goto('https://trello.com');
    }
  }