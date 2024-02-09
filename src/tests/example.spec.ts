import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';import { CodewarsLandingPage } from './pom-folder/codewars-pom';
import { MdnLandingPage, MdnBlogPage , MdnDocsPage } from './pom-folder/dev-mosilla-pom';
import { WikipediaLandingPage , WikiResultPage } from './pom-folder/wikipedia-pom';
import { UaSerialLandingPage, UaSerialSearchResultsPage } from './pom-folder/uaserial-pom';
 
test('codewars base check', async ({ page }) => {
  let codewarsLanding = new CodewarsLandingPage(page);
  await codewarsLanding.goto();

  await expect(page).toHaveTitle(/Codewars/);
  await expect(codewarsLanding.getLogoElement).toBeVisible;
  await expect(codewarsLanding.getStartedButton).toBeVisible;
  await expect(codewarsLanding.getLoginButton).toBeVisible;
  await expect(codewarsLanding.getAboutCodewarsTitleElement).toBeVisible;
  await expect(codewarsLanding.getJoinButton).toBeVisible;
  await expect(codewarsLanding.getBlogButton).toBeVisible;
  await expect(codewarsLanding.getForEducatorsButton).toBeVisible;
  await expect(codewarsLanding.getForCompaniesButton).toBeVisible;
  await expect(codewarsLanding.getMaintTitleElement).toBeVisible;
});

test('developer mozila base check', async ({ page }) => {
  let mdnLanding = new MdnLandingPage(page);
  let mdnBlog = new MdnBlogPage(page);
  await mdnLanding.goto();

  await expect(page).toHaveTitle(/MDN Web Docs/);
  await expect(mdnLanding.getLogoElement).toBeVisible;
  await expect(mdnLanding.getLoginButton).toBeVisible;
  await expect(mdnLanding.getSignUpButton).toBeVisible;

  await mdnLanding.getBlogButton.click();

  await expect(page).toHaveTitle(/MDN Blog/);
  await expect(mdnBlog.getLogoElement).toBeVisible;
  await expect(mdnBlog.getMainTitleElement).toBeVisible;
  await expect(mdnBlog.getHelpProposeElement).toBeVisible;
  await expect(mdnBlog.getLoginButton).toBeVisible;
  await expect(mdnBlog.getSignUpButton).toBeVisible;
});

test('developer mozila search check', async ({ page }) => {
  let mdnLanding = new MdnLandingPage(page);
  let mdnDocs = new MdnDocsPage(page);
  await mdnLanding.goto();

  await expect(page).toHaveTitle(/MDN Web Docs/);
  await expect(mdnLanding.getLogoElement).toBeVisible;
  await expect(mdnLanding.getLoginButton).toBeVisible;
  await expect(mdnLanding.getSignUpButton).toBeVisible;

  await mdnLanding.getSearchInputField.click();
  await mdnLanding.getSearchInputField.fill("String");
  await page.waitForTimeout(100);
  await mdnLanding.getSearchInputField.press('Enter');
  await page.waitForLoadState();
  await expect(page).toHaveTitle(/String - JavaScript | MDN/);
  await expect(mdnDocs.getMainDockTitleElement).toBeVisible;
  await expect(mdnDocs.getDockPathElement).toBeVisible;
  await expect(mdnDocs.getDockLeftbarElement).toBeVisible;
  await expect(mdnDocs.getDescriptionElement).toBeVisible;
  await expect(mdnDocs.getDockSubtitleElement).toBeVisible;
});

test('wikipedia base check', async ({ page }) => {
  let wikipediaLanding = new WikipediaLandingPage(page);
  let wikiResult = new WikiResultPage(page);
  await wikipediaLanding.goto();

  await expect(page).toHaveTitle(/Вікіпедія/);
  await expect(wikipediaLanding.getLogoElement).toBeVisible;
  await expect(wikipediaLanding.getMainTabElement).toBeVisible;
  await expect(wikipediaLanding.getLoginButton).toBeVisible;

  await wikipediaLanding.getInputSearchFieldButton.click();
  await wikipediaLanding.getInputSearchFieldButton.fill("Україна");
  await page.waitForTimeout(100);
  await wikipediaLanding.getInputSearchFieldButton.press('Enter');

  await expect(page).toHaveTitle(/Україна — Вікіпедія/);
  await expect(wikiResult.getArticleNameElement).toBeVisible;
  await expect(wikiResult.getInfoCellElement).toBeVisible;
  await expect(wikiResult.getSiteSubElement).toBeVisible;
  await expect(wikiResult.getAnnouncementElement).toBeVisible;
  await expect(wikiResult.getReadTabButton).toBeVisible;
});

test('uaserial base check', async ({ page }) => {
  let uaSerialLanding = new UaSerialLandingPage(page);
  let uaSerialSearchResultsPage = new UaSerialSearchResultsPage(page);
  await uaSerialLanding.goto();

  await expect(page).toHaveTitle(/Дивись фільми та серіали лише українською онлайн – UAserial.club/);
  await expect(uaSerialLanding.getLogoElement).toBeVisible;
  await expect(uaSerialLanding.getLoginButton).toBeVisible;
  await expect(uaSerialLanding.getTelegramLinkButton).toBeVisible;

  await uaSerialLanding.getInputSearchField.click();
  await uaSerialLanding.getInputSearchField.fill("Втеча");
  await page.waitForTimeout(100);
  await uaSerialLanding.getInputSearchField.press('Enter');

  await expect(page).toHaveTitle(/Пошук за запитом Втеча/);
  await expect(uaSerialSearchResultsPage.getSearchResultTitleElement).toBeVisible;
  await expect(uaSerialSearchResultsPage.getLogoElement).toBeVisible;
  await expect(uaSerialSearchResultsPage.getLoginButton).toBeVisible;
  await expect(uaSerialSearchResultsPage.getTelegramLinkButton).toBeVisible;
  await expect(uaSerialSearchResultsPage.getProductTypeElement).toBeVisible;
});