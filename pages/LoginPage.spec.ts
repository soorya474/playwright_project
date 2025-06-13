import { Locator, Page } from "@playwright/test"
import { TLoginTestData } from "../types/TLoginTestData.spec";
//import { LoginTestData } from "../testData/TC_01.spec";
export class LoginPage{
  public CLASS_NAME:string = "LoginPage";
  
       
    
  public page: Page;
  userName: string;
  private password: string;
  private submitBtn: string;
 
  constructor (page:Page,protected testData:TLoginTestData){
    this.page=page;
    this.userName="input[name='username']",
    this.password="input[name='password']",
    this.submitBtn="button[type='submit']"


  }

  async loginToApp(){
    await this.page.locator(this.userName).fill(this.testData.userid);
    await this.page.waitForTimeout(10000);
    await this.page.waitForSelector(this.password);
    await this.page.locator(this.password).fill(this.testData.password);
    await this.page.waitForSelector(this.submitBtn);
    await this.page.locator(this.submitBtn).click();

  }

}