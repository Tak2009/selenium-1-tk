// import the selenium web driver
const webdriver = require('selenium-webdriver');
const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();

let driver;

describe("Last Name", () => {
  before(() => {
    driver = new webdriver.Builder().forBrowser("chrome").build();
  });

  after(() => {
    return driver.quit();
  });

  it("check if this field is not blank", async () => {
    await driver.get("https://revolgy-forms-case-study-master.staging.axiory.com/jp/registration/demo");
    // 画面サイズ
    await driver.manage().window().setRect(1440, 830)
    // いったんinput areaにはいる
    await driver.findElement(By.id("lastname")).click()
  });
});