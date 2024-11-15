const {Builder, By} = require("selenium-webdriver");
const assert = require("assert");

describe('Startpage', function () {
    this.timeout(6000);
    let driver;

    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get(`file://${process.cwd()}/../01e_javascript/app/result/index.html`);
    })
    afterEach(async function () {
        await driver.quit();
    })

    it('navigate to app using teaser button', async function () {

        await driver.findElement(By.linkText("Direkt loslegen")).click();
        let headline = await driver.findElement(By.tagName("h1")).getText();

        assert.equal(headline, "Offene Aufgaben");
    })

    it('navigate to app using main navigation', async function () {
        await driver.findElement(By.linkText("App")).click();
        let headline = await driver.findElement(By.tagName("h1")).getText();
        assert.equal(headline, "Offene Aufgaben");
    })

    it('navigate to prices using main navigation', async function () {
        await driver.findElement(By.linkText("Preise")).click();
        let headline = await driver.findElement(By.className("teaser-title")).getText();
        assert.equal(headline, "Ein Angebot, das mit den Anforderungen wächst");
    })
})
