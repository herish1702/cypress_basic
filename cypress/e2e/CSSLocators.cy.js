describe('CSS Locators', () => {
    it('cssLocators', () => {
        cy.visit('https://www.fabriplay.com/login')
        cy.get("#email").type("6369188818")
    })
})