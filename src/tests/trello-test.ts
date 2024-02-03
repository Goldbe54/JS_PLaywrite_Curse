import { test, expect } from '@playwright/test';
import { TrelloLandingPage , TrelloLoginPage , TrelloHomegPage } from './pom-folder/trello-pom';

test('trello base check', async ({ page }) => {
    let trelloLanding = new TrelloLandingPage(page);
    await trelloLanding.goto();
  
    await expect(page).toHaveTitle(/Керуйте проєктами своєї команди звідусіль | Trello/);
    await trelloLanding.getLoginButton.click;
  });

  test('trello home base check', async ({ page }) => {
    let trelloLanding = new TrelloLandingPage(page);
    let trelloLogin = new TrelloLoginPage(page);
    let trelloHome = new TrelloHomegPage(page);
    await trelloLanding.goto();
  
    await expect(page).toHaveTitle(/Керуйте проєктами своєї команди звідусіль | Trello/);
    await trelloLanding.getLoginButton.click();
    await trelloLogin.loginViaEmail("royko02@ukr.net","U5BR?SASv3eBs$M");
    await expect(trelloHome.getTrelloLogo).toBeVisible;
    await expect(trelloHome.getWorkspacesDropdown).toBeVisible;
    await expect(trelloHome.getRecentDropdown).toBeVisible;
    await expect(trelloHome.getStarredDropdown).toBeVisible;
    await expect(trelloHome.getMoreDropdown).toBeVisible;
    await expect(trelloHome.getCreateMenuButton).toBeVisible;
  });