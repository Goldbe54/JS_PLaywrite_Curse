import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';
import { TrelloLandingPage , TrelloLoginPage , TrelloHomePage } from './pom-folder/trello-pom';

test('trello base check', async ({ page }) => {
  let trelloLanding = new TrelloLandingPage(page);
  await trelloLanding.goto();

  await expect(page).toHaveTitle(/Керуйте проєктами своєї команди звідусіль | Trello/);
  await expect(trelloLanding.getAtlantisTrelloLogo).toBeVisible;
  await expect(trelloLanding.getFeaturesDropdown).toBeVisible;
  await expect(trelloLanding.getSolutionsDropdown).toBeVisible;
  await expect(trelloLanding.getPlansDropdown).toBeVisible;
  await expect(trelloLanding.getResourcesDropdown).toBeVisible;
  await expect(trelloLanding.getLoginButton).toBeVisible;
  await expect(trelloLanding.getSignUpButton).toBeVisible;
  await expect(trelloLanding.getAnnouncementElement).toBeVisible;
});

test('trello home base check', async ({trelloHome, page }) => {
  let trelloLogin = new TrelloLoginPage(page);
  let trelloLanding = new TrelloLandingPage(page);
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