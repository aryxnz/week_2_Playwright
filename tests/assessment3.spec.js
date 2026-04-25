import{expect, test} from '@playwright/test';

import excel from 'exceljs';

test('Excel file handling', async ({browser}) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(`https://www.flipkart.com/`);
    await expect(page).toHaveURL(`https://www.flipkart.com/`);

    await page.locator(`(//div[@class="css-146c3p1 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-1iln25a r-1b1g84l r-tuq35u r-u8s1d r-q4m81j r-1r0gou5"])[6]`).click();

    await page.locator(`(//div[@class="grid-formation grid-column-2"]//div[@class="OfydJ4 "])[2]`).click();

    await page.locator(`(//div[@class="tx4xZf StZidb"]//div[@class="ybaCDx"])[1]`).click();

    await page.locator(`(//div[@class="s6YJlm"]//div[@class="WNv7PR"])[1]`).click();

    let name =await page.locator(`((//div[@class="lvJbLV col-12-12"])[3]//a[@class="pIpigb"])[1]`).textContent();
    const price = await page.locator(`((//div[@class="lvJbLV col-12-12"])[3]//div[@class="RGLWAk"]//div[@class="hZ3P6w"])[1]`).textContent();



    const [page1] = await Promise.all([context.waitForEvent('page'),
        page.locator(`((//div[@class="lvJbLV col-12-12"])[3]//a[@class="pIpigb"])[1]`).click()
    ]);

    await page1.locator(`(//div[@class="css-146c3p1 r-dnmrzs r-1udh08x r-1udbk01 r-3s2u2q r-1iln25a"])[4]`).click();

    await page1.waitForLoadState();                            
    const price1 = await page1.locator(`//div[@class="v1zwn21l v1zwn20 _1psv1zeb9 _1psv1ze0"]`).textContent()
    await expect(price1).toBe(price)      
    await expect(price1).toContain('₹')
    console.log(name);
    console.log(price);

    let workbook = new excel.Workbook();
    await workbook.xlsx.readFile("C:/Users/asus/Desktop/PlaywrightGIT/fileupload/New Microsoft Excel Worksheet.xlsx");
    let sheet10 = workbook.getWorksheet("Sheet10")
    if(!sheet10){
        sheet10 = await workbook.addWorksheet("Sheet10")
    }
    sheet10.getRow(1).getCell(1).value = name
    sheet10.getRow(1).getCell(2).value = price1
    await workbook.xlsx.writeFile("C:/Users/asus/Desktop/PlaywrightGIT/fileupload/New Microsoft Excel Worksheet.xlsx")

});