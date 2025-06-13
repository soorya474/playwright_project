//import { test, expect, chromium,Browser,Page} from '@playwright/test';

import test, { Browser, BrowserContext, chromium, expect, Locator, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.spec";
//import { LoginTestData } from "../testData/TC_01.spec";
import { TLoginTestData } from "../types/TLoginTestData.spec";
import { LoginTestData } from "../testData/TC_01.spec";



test('Login test',async()=>{
    
    const browser:Browser=await chromium.launch({headless:false,channel:'chrome'});
    const page:Page=await browser.newPage();
    const loginPage=new LoginPage(page,LoginTestData);
    await page.setViewportSize({ width: 800, height: 600 });
    await page.goto('');
    await page.waitForTimeout(35000);
    loginPage.loginToApp();
});


   
    