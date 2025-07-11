describe("Browser Navigation", () => {
    it("Browser Navigation - Back", () => {
        cy.visit("https://demo.opencart.com")
        cy.xpath("//a[text()='Desktops']").click()
        cy.go("back")
        cy.url().should("be.eq","https://demo.opencart.com")
    })

    it("Browser Navigation - Without Back", () => {
        cy.visit("https://demo.opencart.com")
        cy.xpath("//a[text()='Desktops']").click()
        cy.go(-1)
        cy.url().should("be.eq","https://demo.opencart.com")
    })

    it("Browser Navigation - Forward", () => {
        cy.visit("https://demo.opencart.com")
        cy.xpath("//a[text()='Desktops']").click()
        cy.go("forward")
    })

    it("Browser Navigation - Without Forward", () => {
        cy.visit("https://demo.opencart.com")
        cy.xpath("//a[text()='Desktops']").click()
        cy.go(1)
    })

    it("Browser Navigation - Reload", () => {
        cy.visit("https://demo.opencart.com")
        cy.xpath("//a[text()='Desktops']").click()
        cy.reload()
    })

})