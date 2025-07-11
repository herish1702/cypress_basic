describe("My First Test", () => {

    beforeEach("Navigate to the page", () => {
        cy.visit("https://www.fabriplay.com/login")
    })

    it("Check the Title of the page", () => {
        cy.title().should('eq','Login | Fabriplay')
    })

    it("Check the URL of the page", () => {
        cy.url().should('eq', 'https://www.fabriplay.com/login')
    })
})