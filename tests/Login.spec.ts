//import { test, expect, chromium,Browser,Page} from '@playwright/test';
import { LoginTestData } from "../testData/TC_01.spec";
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginP.spec';
import { HomePage } from '../pages/HomeP.spec';
import { LeavePage } from '../pages/LeaveP.spec';

//This test launches the page and add the product to the cart
test('Login test',async({page,baseURL})=>{
    
    const login= new LoginPage(page,baseURL!);
    const home= new HomePage(page);
    const leave=new LeavePage(page);
    await login.vistUrl();
    await login.loginToApp();
    await home.clickOnLeaveBtn();
    await leave.validateText(LoginTestData.title)
    

});


   
    