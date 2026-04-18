import { chromium, test, webkit, expect } from "@playwright/test"

test("dropdown handling",async({page})=>{

    await page.goto("https://demoqa.com/automation-practice-form")

    await page.getByPlaceholder("First Name").fill("Aryan");
    await expect(page.getByPlaceholder("First Name")).toHaveValue("Aryan"); 

    await page.getByPlaceholder("Last Name").fill("Srivastava");
    await expect(page.getByPlaceholder("Last Name")).toHaveValue("Srivastava"); 

    await page.getByPlaceholder("name@example.com").fill("Srivastava12@gmail.com");
    await expect(page.getByPlaceholder("name@example.com")).toHaveValue("Srivastava12@gmail.com"); 

    await page.locator(`//div[@id="genterWrapper"]//input[@id="gender-radio-1"]`).click();
    await expect(page.locator('#gender-radio-1')).toBeChecked(); 

    await page.getByPlaceholder("Mobile Number").fill("9219565712");
    await expect(page.getByPlaceholder("Mobile Number")).toHaveValue("9219565712"); 

    await page.locator(`//div[@id="dateOfBirth"]//input[@id="dateOfBirthInput"]`).fill("04 DEC 2003");
    
    await page.locator(`//input[@class="subjects-auto-complete__input"]`).fill("Maths");
    await page.keyboard.press("Enter");

    await page.locator(`//input[@class="subjects-auto-complete__input"]`).fill("English");
    await page.keyboard.press("Enter");

    await page.locator(`//input[@class="subjects-auto-complete__input"]`).fill("Science");
    await page.keyboard.press("Enter");

    await expect(page.locator('.subjects-auto-complete__multi-value__label')).toHaveCount(3); 

    await page.locator(`//input[@id="hobbies-checkbox-1"]`).click();
    await page.locator(`//input[@id="hobbies-checkbox-3"]`).click();

    await page.getByPlaceholder("Current Address").fill("Noida");

    await page.locator('#react-select-3-input').click();
    await page.keyboard.press("Enter");

    await page.locator('#react-select-4-input').click();
    await page.keyboard.press("Enter");

    await page.locator(`button#submit`).click();

    await page.screenshot({path:"screenshot/ss1.png"});

    const fs = require('fs');
    await expect(fs.existsSync("screenshot/ss1.png")).toBeTruthy(); 

});
