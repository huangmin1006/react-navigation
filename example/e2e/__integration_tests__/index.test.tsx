import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
let page: Page;

beforeAll(async () => {
  browser = await chromium.launch({ headless: Boolean(process.env.CI) });
});

afterAll(async () => {
  await browser?.close();
});

beforeEach(async () => {
  page = await browser.newPage();

  await page.goto('http://localhost:3579');
});

afterEach(async () => {
  page.close();
});

it('loads the example app', async () => {
  const title = await page.$eval('[role=heading]', (el) => el.textContent);

  expect(title).toBe('Examples');
});
