import { expect, Page } from "@playwright/test";

export class LeavePage {

  private leaveText: string;
 
 
  page: Page;

  constructor(page: Page) {
    this.page = page;
    this.leaveText ="//span/h6"
   
  }

  /**
   * Vlidate page Title
   */
  async validateText(title:string){
    await expect(this.page.locator( this.leaveText)).toHaveText(title);
  }
}