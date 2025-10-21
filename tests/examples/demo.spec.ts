import test from "playwright/test";

test('Launch a new page ',async({page})=>{

    await page.goto("https://www.google.com");
    


});