import puppeteer from 'puppeteer';

describe('Inn Form', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('Example-box отображается на странице при запуске.', async () => {
    await page.goto('http://localhost:8080');

    await page.waitForSelector('.example-box');
  });

  test('Popover отображается при нажатии на кнопку.', async () => {
    // jest.setTimeout(20000);
    await page.goto('http://localhost:8080');

    await page.waitForSelector('.example-box');

    const form = await page.$('.example-box');
    const button = await form.$('.btn');
    await button.click();

    await page.waitForSelector('.popover');
  });

  afterEach(async () => {
    await browser.close();
  });
});