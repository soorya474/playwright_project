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
    await page.goto('https://uat.devtest.vegas/book-room/resort/');
    await page.waitForTimeout(35000);
    loginPage.loginToApp();
});


   
    // await page.goto("https://www.redbus.in/");
    // await page.locator('//span[text()="Account"]').click();
    // await page.locator('#user_sign_in_sign_up').click();
    // const iframe=await page.frameLocator('iframe[class="modalIframe"]');
    // await iframe.locator('#mobileNoInp').fill("9999999")


    // await page.goto("https://www.saucedemo.com");
    
    // console.log("Assertion passed");
    // await page.locator('#user-name').fill("standard_user");
    // await page.locator('#password').fill("secret_sauce");
    // await page.locator('#login-button').click();
    // //wherever text is available use the below//if class name use .classname//
    // const prod:Locator=await page.locator('text=Products');
    // await prod.click();
    // //if css selector 'css=tagname[]'
    // const menu:Locator=await page.locator('xpath=//button[text()="Open Menu"]');
    // await menu.click();
    //if data-testid is given use page.getByTestId('give the vlue of data-testid attribute')
//in playwright config.ts v can update if data-testid atribute is customized

//await expect(page.getByRole('menubar',{name:'Swag Labs'})).toBeVisible();
    // const countryDropDwn=('give selector');
    // await page.selectOption(countryDropDwn,{value:'AD'});
    // await page.selectOption(countryDropDwn,{label:"Australia"})
    // await page.selectOption(countryDropDwn,{index:10});
    // const alloptions=await page.$$(countryDropDwn +'> option');
    // //$$>>give all the elements $>gives single element
    // for(const e of  alloptions){
    //     const text=await e.textContent();
    //     console.log(text);
        
    // }
    //to give timeout
    //page.setDefaultTimeout(15000);

    ///Drag and drop
    // await page.locator('sorce selector').dragTo(page.locator('destination selector'));
    // //to enter character sequentially with a delay
    // await page.locator('selectr').pressSequentially('soorya',{timeout:1000});
   
//});
