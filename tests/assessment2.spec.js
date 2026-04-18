import { chromium, test, webkit, expect } from "@playwright/test"

test("dropdown handling",async({page})=>{

    await page.goto("https://vinothqaacademy.com/demo-site/")

    await expect(page).toHaveURL(/vinothqaacademy/);

    await page.locator(`//input[@id="vfb-5"]`).fill("Aryan");
    await expect(page.locator('#vfb-5')).toHaveValue("Aryan");

    await page.locator(`//input[@id="vfb-7"]`).fill("Srivastava");
    await expect(page.locator('#vfb-7')).toHaveValue("Srivastava");

    await page.locator(`//span[@class="vfb-span"]//input[@id="vfb-31-1"]`).click();
    await expect(page.locator('#vfb-31-1')).toBeChecked();

    await page.locator(`//span[@class="vfb-span"]//input[@id="vfb-20-1"]`).click();
    await page.locator(`//span[@class="vfb-span"]//input[@id="vfb-20-4"]`).click();
    await expect(page.locator('#vfb-20-4')).toBeChecked();

    await page.locator(`//span[@class="vfb-full"]//input[@id="vfb-13-address"]`).fill("Mohali");
    await expect(page.locator('#vfb-13-address')).toHaveValue("Mohali");

    await page.locator(`//span[@class="vfb-full"]//input[@id="vfb-13-address-2"]`).fill("Street 22");

    await page.locator(`//span[@class="vfb-left"]//input[@id="vfb-13-city"]`).fill("Building F-22");
    await page.locator(`//span[@class="vfb-right"]//input[@id="vfb-13-state"]`).fill("Punjab");

    await page.locator(`//span[@class="vfb-left"]//input[@id="vfb-13-zip"]`).fill("140301");
    await expect(page.locator('#vfb-13-zip')).toHaveValue("140301");

    await page.locator(`(//span[@class="select2-selection__arrow"])[1]`).click();
    await page.locator(`//span[@class="select2-search select2-search--dropdown"]//input`).fill("Ind");
    await page.keyboard.press("Enter");

    await page.locator(`//li[@class="vfb-item vfb-item-email  "]//input[@id="vfb-14"]`).fill("aryan123@gmail.com");

    await page.locator(`//li[@class="vfb-item vfb-item-date  "]//input[@id="vfb-18"]`).fill("04/17/2026");

    await page.locator(`(//span[@class="select2-selection__arrow"])[2]`).click();
    await page.locator(`//span[@class="select2-search select2-search--dropdown"]//input`).fill("10");
    await page.keyboard.press("Enter");

    await page.locator(`(//span[@class="select2-selection__arrow"])[3]`).click();
    await page.locator(`//span[@class="select2-search select2-search--dropdown"]//input`).fill("35");
    await page.keyboard.press("Enter");

    await page.locator(`//li[@class="vfb-item vfb-item-number  "]//input`).fill("9219565712");

    await page.locator(`//li[@class="vfb-item vfb-item-textarea  "]//textarea`).fill("NO QUERRY");
    await page.locator(`(//span[@class="vfb-span"])[12]//input`).fill("33");

    await page.locator(`//li[@class="vfb-item vfb-item-submit"]//input`).click;

    await page.screenshot({path:"screenshot/ss2.png"});
    const fs = require('fs');
    await expect(fs.existsSync("screenshot/ss2.png")).toBeTruthy(); 
});