const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");

let driver;

describe("SeleniumChromeTest", () => {
  before(() => {
    driver = new Builder().forBrowser("chrome").build();
  });

  after(() => {
    return driver.quit();
  });

  it("正常系_表示_ページタイトル", async () => {
    // 指定したURLに遷移する　//Navigate to
    await driver.get("https://saikeblog.com");

    // 要素を取得
    const title = await driver.getTitle();

    // 検証
    assert.equal(title, "さいけの技術ブログ");
  });

  it("正常系_遷移_技術ページ", async () => {
    // 指定したURLに遷移する Navigate to Url
    await driver.get("https://saikeblog.com");

    // タブの「技術」要素を取得し、クリックする
    await driver.findElement(By.id("menu-item-37")).click();

    // 要素を取得
    const title = await driver.getTitle();
    const currentUrl = await driver.getCurrentUrl();

    // 検証
    assert.equal(title, "技術 – さいけの技術ブログ");
    assert.equal(
      currentUrl,
      "https://saikeblog.com/category/%e6%8a%80%e8%a1%93/"
    );
  });
});