import { Locator, Page } from "@playwright/test"
import { TLoginTestData } from "../types/TLoginTestData.spec";
import { LoginTestData } from "../testData/TC_01.spec";
class LoginPage{
  public CLASS_NAME:string = "LoginPage";
  
       
  
  //userName: string;
   // private locator;
 // testData: any;

 //private testData: TLoginTestData;

  // constructor (page:Page, testData:TLoginTestData=LoginTestData){
  //   this.page=page;
  //   this.testData=testData;

  // }


  constructor (page:Page){
    this.page=page;
    this.userName="input[name='username']",
    this.password="input[name='password']",
    this.submitBtn="button[type='submit']"


  }

  async loginToApp(username:string,password:string){
    await this.page.locator(this.userName).fill(username);
    await this.page.locator(this.login.password).fill(this.testData.password);
    await this.page.locator(this.login.submitBtn).click();

  }

}