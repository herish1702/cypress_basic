describe('Xpath Locators', () => {
    it('xpathLocators', () => {  
        cy.visit('https://www.fabriplay.com/login')
        cy.get("#email").type("6369188818")
        cy.xpath("//button[text()='Continue']").click()
        cy.get("#password").type("Mukilan@2003")
        cy.xpath("//button[text()='Sign in']").click()
    })
})