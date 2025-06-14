import { Page } from "@playwright/test";
import { LoginTestData } from "../testData/TC_01.spec";
export class LoginPage{
 
  
  private userName: string;
  private password: string;
  private loginBtn: string;
  private submitBtn: string;
  private category:string;
  private product:string;
  private addToCartBtn:string;
  page: Page;
 
  constructor (page:Page){
    this.page=page;
    this.loginBtn="a[class='ico-login']",
    this.userName="#Email",
    this.password="#Password",
    this.submitBtn="button[type='submit']",
   // this.phones=//a[text()='Laptops']",
    this.category=`//a[text()='${LoginTestData.categories}']`,
    this.product=`//a[text()='${LoginTestData.product}']`,
    this.addToCartBtn="//a[text()='Add to cart']"

  }

  async vistUrl(){
      await this.page.goto("https://www.demoblaze.com/");
    }

  // async loginToApp(){
  //   await this.page.locator(this.loginBtn).click();
  //   await this.page.locator(this.userName).fill(LoginTestData.userid);
  //   await this.page.waitForTimeout(10000);
  //   await this.page.waitForSelector(this.password);
  //   await this.page.locator(this.password).fill(LoginTestData.password);
  //   await this.page.waitForSelector(this.submitBtn);
  //   await this.page.locator(this.submitBtn).click();

  // }

  async clickOnCategories(){
    await this.page.locator(this.category).click();
  }
  async clickOnProducts(){
    await this.page.locator(this.product).click();
  }
  async clickOnAddToCart(){
    //await this.page.locator(this.addToCartBtn).scrollIntoViewIfNeeded();
    await this.page.keyboard.press('PageDown');
    await this.page.locator(this.addToCartBtn).dblclick();
  }
}
