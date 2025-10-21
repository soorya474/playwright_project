import test, { expect } from "playwright/test";

test('Login test',async({page})=>{

    await page.goto('givevthe url');
    
await page.locator("give locator").fill("")
expect(await page.locator("gvelocator")).toBeDisabled();
   

    


})