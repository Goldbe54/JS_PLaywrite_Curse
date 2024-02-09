import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';
import { TrelloLandingPage , TrelloBoardPage , TrelloTemplatesPage } from './pom-folder/trello-pom';

test('trello landing page base check', async ({ page }) => {
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

test('trello home page base check', async ({trelloHome, page }) => {
  await expect(page).toHaveTitle(/Boards | Trello/);
  await expect(trelloHome.getTrelloLogo).toBeVisible;
  await expect(trelloHome.getWorkspacesDropdown).toBeVisible;
  await expect(trelloHome.getRecentDropdown).toBeVisible;
  await expect(trelloHome.getStarredDropdown).toBeVisible;
  await expect(trelloHome.getMoreDropdown).toBeVisible;
  await expect(trelloHome.getCreateMenuButton).toBeVisible;
});

test('trello board page base check', async ({trelloHome, page }) => {
  let trelloBoard = new TrelloBoardPage(page);

  await trelloHome.getFirstBoardElement.click();
  await expect(trelloBoard.getTrelloLogo).toBeVisible;
  await expect(trelloBoard.getYourBoardsElement).toBeVisible;
  await expect(trelloBoard.getBoardNameTitleElement).toBeVisible;
  await expect(trelloBoard.getStarButton).toBeVisible;
  await expect(trelloBoard.getWorkspaceVisibleButton).toBeVisible;
  await expect(trelloBoard.getViewSwitcherDropdown).toBeVisible;
});

test('trello templates page base check', async ({trelloHome, page }) => {
  let trelloTemplates = new TrelloTemplatesPage(page);

  await trelloHome.getTemplatesButton.click();
  await expect(trelloTemplates.getTrelloLogo).toBeVisible();
  await expect(trelloTemplates.getBusinesIconElement).toBeVisible();
  await expect(trelloTemplates.getDesignIconElement).toBeVisible();
  await expect(trelloTemplates.getEducationIconElement).toBeVisible();
  await expect(trelloTemplates.getEngineeringIconElement).toBeVisible();
  await expect(trelloTemplates.getMarketingIconElement).toBeVisible();
});