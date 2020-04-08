// import the selenium web driver
const { Builder, Key, By } = require("selenium-webdriver");
const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();

let driver;

describe("Last Name", () => {
  before(() => {
    driver = new Builder().forBrowser("chrome").build();
  });

  after(() => {
    return driver.quit();
  });

  it("blank case", async () => {
    await driver.get("https://revolgy-forms-case-study-master.staging.axiory.com/jp/registration/demo");
    // 画面サイズ
    await driver.manage().window().setRect(1440, 830)
    // いったんinput areaにはいる
    await driver.findElement(By.id("lastname")).click()
    await driver.findElement(By.id("firstname")).click()
    await driver.findElement(By.css(".atm-error-message-container")).click()
    assert(await driver.findElement(By.css(".atm-error-message-container")).getText() == "お客様のご苗字をご教示下さい。")
  });
  it("number case", async () => {
    // いったんinput areaにはいる
    await driver.findElement(By.id("lastname")).sendKeys("9")
    await driver.findElement(By.id("firstname")).click()
    await driver.findElement(By.css(".atm-error-message-container")).click()
    assert(await driver.findElement(By.css(".atm-error-message-container")).getText() == "ご苗字が正しくないフォーマットで記入されています。半角の英字でご記入下さい。")
  });
  it("pass case. erorr message should be empty", async () => {
    // いったんinput areaにはいる
    await driver.findElement(By.id("lasttname")).click()
    await driver.findElement(By.id("lasttname")).clear()
    await driver.findElement(By.id("lastname")).sendKeys("kimotoKIMOTO")
    await driver.findElement(By.id("firstname")).click()
    const errorMessage = await driver.findElement(By.css(".atm-error-message-container")).getText()
    assert.equal(errorMessage, "");
    });
});