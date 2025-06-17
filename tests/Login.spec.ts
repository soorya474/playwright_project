//import { test, expect, chromium,Browser,Page} from '@playwright/test';

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginP.spec';
import { HomePage } from '../pages/HomeP.spec';

//This test launches the page and add the product to the cart
test('Login test',async({page})=>{
    
    const login= new LoginPage(page);
    const home= new HomePage(page);
    await login.vistUrl();
    await login.loginToApp();
    await home.clickOnLeaveBtn();
    

});


   
    