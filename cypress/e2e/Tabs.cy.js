describe("Tabs", () => {
    it("Approach 1", ()=> {
        cy.visit("https://the-internet.herokuapp.com/windows")
        
        // Removing the target attribute to open the link in the same tab and validating the URL
        cy.get("div.example >a").invoke("removeAttr", "target").click()
        cy.url().should("eq", "https://the-internet.herokuapp.com/windows/new")
        
        // Operation done in the new tab
        cy.wait(5000)
        
        // Moving back to parent tab and validating the URL
        cy.go("back")
        cy.url().should("eq", "https://the-internet.herokuapp.com/windows")
    })

    it("Apporach 2", () => {
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get("div.example >a").then( (e) => {
            let url = e.prop("href")
            console.log(url)
            cy.visit(url)
        })    
        // Validating the URL
        cy.url().should("eq", "https://the-internet.herokuapp.com/windows/new")
            
        // Operation done in the new tab
        cy.wait(5000)

        // Moving back to parent tab and validating the URL
        cy.go("back")
        cy.url().should("eq", "https://the-internet.herokuapp.com/windows")
    })
})