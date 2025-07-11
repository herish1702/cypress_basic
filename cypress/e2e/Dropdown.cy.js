describe("Dropdown", () => {
    it("Dynamic Dropdown", () => {
        cy.visit("https://www.google.com/")
        cy.get("textarea[name='q']").type("Cypress")
        cy.wait(3000)
        cy.get("div.wM6W7d > span").each(($el, index, $list) => {
            if ($el.text() === "cypress") {
                cy.wrap($el).click()
            }
            else {
                cy.log("Option not found")
            }
        })
    })
})