import { Page } from "@playwright/test";
import { LoginTestData } from "../testData/TC_01.spec";
export class LoginPage {


  private userName: string;
  private password: string;
  private loginBtn: string;
  private submitBtn: string;
 
  page: Page;

  constructor(page: Page) {
    this.page = page;
    this.loginBtn = "a[class='ico-login']",
    this.userName = "input[name='username']",
    this.password = "input[name='password']",
    this.submitBtn = "button[type='submit']"
  

  }
/**
 * Launches the page
 */
  async vistUrl() {
    await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  }

  async loginToApp(){
    await this.page.locator(this.userName).click();
    await this.page.locator(this.userName).fill(LoginTestData.userid);
    await this.page.waitForTimeout(10000);
    await this.page.locator(this.password).click();
    await this.page.locator(this.password).fill(LoginTestData.password);
    await this.page.locator(this.submitBtn).click();

  }

}
