import { test as baseTest, expect, chromium, BrowserContext } from '@playwright/test';
import { TrelloLoginPage, TrelloLandingPage , TrelloHomePage} from '../tests/pom-folder/trello-pom';

type TestType ={
    trelloHome: TrelloHomePage;
}

export const test = baseTest.extend<TestType>({
    // trelloLogin: async ({page}, use, testInfo) =>{
    //     let trelloLoginPage = new TrelloLoginPage(page);
    //     await use(trelloLoginPage);

    // }

    trelloHome: async ({page}, use, testInfo) =>{
        let trelloLogin = new TrelloLoginPage(page);
        let trelloLanding = new TrelloLandingPage(page);
        let trelloHome = new TrelloHomePage(page);

        trelloLanding.goto();
        await expect(page).toHaveTitle(/Керуйте проєктами своєї команди звідусіль | Trello/);

        await trelloLanding.getLoginButton.click();
        await trelloLogin.loginViaEmail("royko02@ukr.net","U5BR?SASv3eBs$M");
      
        await use(trelloHome);

    }

})