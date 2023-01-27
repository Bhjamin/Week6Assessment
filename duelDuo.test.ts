import { Builder, Capabilities, By } from "selenium-webdriver"
import { beforeEach, afterEach, test } from "@jest/globals"

let driver;

require('chromedriver')

beforeEach(async () => {
    driver = new Builder().withCapabilities(Capabilities.chrome()).build()
    await driver.get('http://localhost:4000/')
})

afterEach(async () => {
    try {
        await driver.quit();
    } catch (error) {
        console.log(error)
    }
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})
