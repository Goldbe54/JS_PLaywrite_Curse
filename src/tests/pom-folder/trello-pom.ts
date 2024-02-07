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
  readonly getFirstBoardElement: Locator;
  readonly getTemplatesButton: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.getTrelloLogo = page.getByLabel('Back to home');
    this.getWorkspacesDropdown = page.getByTestId('workspace-switcher');
    this.getRecentDropdown = page.getByTestId('recently-viewed-boards-menu');
    this.getStarredDropdown = page.getByTestId('starred-boards-menu');
    this.getMoreDropdown = page.getByLabel('More');
    this.getCreateMenuButton = page.getByTestId('header-create-menu-button');
    this.getFirstBoardElement = page.locator("(//div[@class='board-tile-details is-badged'])[1]");
    this.getTemplatesButton = page.locator('//li[@data-testid="templates"]');
  }

  async goto() {
    await this.page.goto('https://trello.com');
  }
}

export class TrelloBoardPage {
  readonly page: Page;
  readonly getTrelloLogo: Locator;
  readonly getYourBoardsElement: Locator;
  readonly getBoardNameTitleElement: Locator;
  readonly getStarButton: Locator;
  readonly getWorkspaceVisibleButton: Locator;
  readonly getViewSwitcherDropdown: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.getTrelloLogo = page.getByLabel('Back to home');
    this.getYourBoardsElement = page.getByLabel('Your boards with 1 items');
    this.getBoardNameTitleElement = page.getByTestId('board-name-display');
    this.getStarButton = page.getByLabel('Star or unstar board');
    this.getWorkspaceVisibleButton = page.getByLabel('Workspace visible');
    this.getViewSwitcherDropdown = page.getByTestId('view-switcher-button-more');
    }
}

export class TrelloTemplatesPage {
  readonly page: Page;
  readonly getTrelloLogo: Locator;
  readonly getBusinesIconElement: Locator;
  readonly getDesignIconElement: Locator;
  readonly getEducationIconElement: Locator;
  readonly getEngineeringIconElement: Locator;
  readonly getMarketingIconElement: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.getTrelloLogo = page.getByLabel('Back to home');
    this.getBusinesIconElement = page.locator('//a[@title="Business"]');
    this.getDesignIconElement = page.locator('//a[@title="Design"]');
    this.getEducationIconElement = page.locator('//a[@title="Education"]');
    this.getEngineeringIconElement = page.locator('//a[@title="Engineering"]');
    this.getMarketingIconElement = page.locator('//a[@title="Marketing"]');
  }
}