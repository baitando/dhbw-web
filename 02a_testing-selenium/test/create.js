const {Builder, By} = require("selenium-webdriver");
const assert = require("assert");
const fs = require("fs");

describe('Create Page', function () {
    this.timeout(10000);
    let driver

    beforeEach(async function () {
        driver = await new Builder().forBrowser('chrome').build()
        await driver.get(`file://${process.cwd()}/../01e_javascript/app/result/anlage.html`);
    })

    afterEach(async function () {
        await driver.quit()
    })

    it('create task', async function () {
        await driver.findElement(By.id("title")).sendKeys("Meine erste Aufgabe");
        await driver.findElement(By.id("notes")).sendKeys("Auf gar keinen Fall vergessen!");
        await driver.findElement(By.id("due")).sendKeys("26.10.2021");
        await driver.findElement(By.id("responsible")).sendKeys("Max Mustermann");

        let image = await driver.takeScreenshot();
        await fs.writeFileSync('screenshot.png', image, 'base64');

        await driver.findElement(By.linkText("Anlegen")).click();

        let items = await driver.findElements(By.css("#tasks li"));

        assert.equal(items.length, 1);
    })
})
