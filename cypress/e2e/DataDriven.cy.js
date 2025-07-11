import { clickElement, typeText, dragAndDropElement } from '../support/utils'
import 'cypress-xpath'
import "@4tw/cypress-drag-drop"

describe('Fabriplay', () => {

    beforeEach( () => {
        cy.fixture("Url.json").as ("urlData")
        cy.fixture("LoginData").as ("loginData")
    })

    it('Order Function', function() {  
        cy.visit(this.urlData.url)
        typeText("#email", this.loginData.number)
        clickElement("//button[text()='Continue']")
        typeText("#password",this.loginData.password)
        clickElement("//button[text()='Sign in']")
        clickElement("//span[text()=' Orders']")
        clickElement("//button[text()='+ Create order']")
        typeText('input[placeholder="Phone number"]',"1234567890")
        typeText("input[name='clientName']", "Test user")
        typeText("input[name='address']", "Test Address")
        clickElement("//label[text()='Reference']/following-sibling::div/div")
        clickElement("//li[text()='Instagram']")
        clickElement("//div[@class='MuiGrid-root css-rfnosa']/descendant::div[@role='combobox']")
        clickElement("//li[text()='Pant']")
        typeText("input[name='products.0.productName']", "Test Product")
        dragAndDropElement("//span[text()='Striching']", '[data-rbd-droppable-id="steps-0"]')
        dragAndDropElement("//span[text()='Embroid']", '[data-rbd-droppable-id="steps-0"]')
        typeText("[name='advanceReceived']", "500")
        clickElement("//button[text()='Create order']")
    })
})

