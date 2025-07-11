describe("Assertion", () => {
    // it("Implicit Assertions using Should", () => {
    //     cy.visit('https://www.fabriplay.com/login')
    //     cy.url().should('include', 'fabriplay')
    //     cy.title().should('eq', 'Login | Fabriplay')
    //     cy.url().should('contain', 'login')
    // })
    // it("Chainning Assertions", () => {

    //     cy.visit('https://www.fabriplay.com/login')
        
    //     cy.url().should('include', 'fabriplay')
    //     .should('contain', 'login')
        
    //     cy.title().should('eq', 'Login | Fabriplay')
        
    // })
    // it ("Implicit Assertion using And", () => {
    //     cy.visit('https://www.fabriplay.com/login') 

    //     cy.url().should('include', 'fabriplay')  // Will condider as one assertion
    //     .and('contain', 'loin')

    //     cy.title().should('eq', 'Login | Fabriplay')
    // })

    it("Explicit Assertions", () => {
        cy.visit('https://www.fabriplay.com/login')
        cy.get("#email").type("6369188818")
        cy.xpath("//button[text()='Continue']").click()
        cy.get("#password").type("Mukilan@2003")
        cy.xpath("//button[text()='Sign in']").click()
        
        // BDD 
        let expectedUseName = "KumarTailor"
        let actualUserName = cy.xpath("//h3[text()=' ▾']")
        expect(actualUserName).to.equal(expectedUseName)


        cy.xpath("//h3[text()=' ▾']").then( (x) => {
            let actualUserName = x.text()
            expect(actualUserName).to.equal(expectedUseName)
        })
    })
})