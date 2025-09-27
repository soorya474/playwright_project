import test, { chromium, expect } from "@playwright/test";

test('Launch a new page ',async()=>{
    // 1️⃣ Launch Browser
    const browser = await chromium.launch({ headless: false });
    
    // 2️⃣ Create a New Context
    const context = await browser.newContext();
    
    // 3️⃣ Create a New Page (Tab) in that Context
    const page = await context.newPage();
    
   await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
     await page.locator("input[value='radio1']").click();
    await expect(page.locator("input[value='radio1']")).toBeChecked();

     await page.locator("input[placeholder='Type to Select Countries']").click();
     await page.locator("input[placeholder='Type to Select Countries']").fill("United");
    // await expect(page.locator("li[class='ui-menu-item']")).toBeVisible();
    await page.locator("li.ui-menu-item", { hasText: "United Kingdom (UK)" }).click();

   

    


})