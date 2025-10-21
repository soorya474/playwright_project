//need to pass the page fixture
//for launching yrl,page validation etc we need this
//page>global variable
//here the arrpow function is taking page ficture as aparameter.thtsy braces
//by default what browser u have specified in playwright.config.ts it will be runnning
//all assertions can access from expect modul
import test, { expect, Locator } from "playwright/test";

//what is synchronous and asynchronous
//after step1 is completed only it will go to step2>>>step3[java,python etc also jvavscript,typescript]
//async>>step1>>not completed>>start step2>>then step3>>w/o completing the background steps of previous steps
//its cald asynchronousCertain JS/TS coommands is asynchronous in nature
//bacground task succesful>>its calle a promise[resolved-rejected]
//if promise rejected>it will throw an error
//so we need to use await statemnet for such statemnets which will have background 
//async keyword shud be there if we specify await
test("Verify page title",async ({page})=>{
    await page.goto("");
    await page.title();//this will give you the title of the page
    await expect(page).toHaveTitle("give titlename")
    const logo:Locator=await page.getByAltText("");
    
    await expect(logo).toBeVisible();

})
//To run the test 
//npx playwright test>>this execute all the tests in the test folder
//will follow headless execution
//worker>>1 browser instance
//by default playwright generated html report
//npx playwright show-report>>in yout local server it gets opened

//To run headed mode
//npx playwright test --headed

//to run a specific test
//npx playwright test filename.spec.ts
//to run multiple tests
//npx playwright test filename1.spec.ts filename2.spec.ts
//to debug
//npx playwright test filename.spec.ts --debug