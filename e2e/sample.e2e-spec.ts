import { AppiumDriver, createDriver, SearchOptions, nsCapabilities } from "nativescript-dev-appium";
import { assert } from "chai";
const addContext = require('mochawesome/addContext');

describe("sample scenario", async function(){
    let driver: AppiumDriver;

    before(async function(){
        nsCapabilities.testReporter.context = this; 
        driver = await createDriver();
    });

    after(async function () {
        await driver.quit();
        console.log("Quit driver!");
    });

    afterEach(async function () {
        if (this.currentTest.state === "failed") {
            await driver.logTestArtifacts(this.currentTest.title);
        }
    });

    it("should run a test", async function () {

        assert.equal(true, true);

    });


});