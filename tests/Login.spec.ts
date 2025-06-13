//import { test, expect, chromium,Browser,Page} from '@playwright/test';

import test from "@playwright/test";
import { TLoginTestData } from "../types/TLoginTestData.spec";
import { LoginTestData } from "../testData/TC_01.spec";
import { LoginPage } from '../pages/LoginP.spec';


test('Login test',async({page})=>{
    
  
    const login= new LoginPage(page);
    await login.vistUrl();
    await login.clickOnCategories();
    await login.clickOnAddToCart();

});


   
    