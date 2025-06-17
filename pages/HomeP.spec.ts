import { Page } from "@playwright/test";
import { LoginTestData } from "../testData/TC_01.spec";
export class HomePage {

  private leaveBtn: string;
  private recruitmentBtn: string;

 
  page: Page;

  constructor(page: Page) {
    this.page = page;
    this.leaveBtn ="//a//span[text()='Leave']",
    this.recruitmentBtn ="//a//span[text()='Recruitment']"

  }

/**
 * Method to click on Leave link
 * 
 */
  async clickOnLeaveBtn() {
    await this.page.locator(this.leaveBtn).click();
  }
/**
 * Method to click on Recruitmnet link
 * 
 */
  async clickOnRecruitment() {
    await this.page.locator(this.recruitmentBtn).click();
  }

    
  
}