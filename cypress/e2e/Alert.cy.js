describe("Alerts", () => {
    it.skip("Js Alert", () => {

        // Cypress will automatically handle the alert popups
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.xpath("//button[text()='Click for JS Alert']").click()
        
        // Validate the alert text
        cy.on("window:alert", (alert_message) => {
            expect (alert_message).to.equal("I am a JS Alert")
        })

        // Validate the outcome of the alert
        cy.get("#result").should("have.text", "You successfully clicked an alert")
    })

    it.skip("Js Confirm Alert - Clicking Ok CTA", () => {

        // Cypress will automatically handle the alert popups with OK button
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.xpath("//button[text()='Click for JS Confirm']").click()
        
        // Validate the alert text
        cy.on("window:confirm", (alert_message) => {
            expect (alert_message).to.equal("I am a JS Confirm")
        })

        // Validate the outcome of the confirm alert
        cy.get("#result").should("have.text", "You clicked: Ok")
    })

    it.skip("Js Confirm Alert - Clicking Cancel CTA", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.xpath("//button[text()='Click for JS Confirm']").click()
        cy.on("window:confirm", () => false)

        // Validate the outcome of the confirm alert when Cancel is clicked
        cy.get("#result").should("have.text", "You clicked: Cancel")
    })

    it.skip("Js Prompt Alert - Clicking OK CTA", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then((win) => {
            cy.stub(win, "prompt").returns("Hello World")
        })

        cy.xpath("//button[text()='Click for JS Prompt']").click()
    }) 

    it.skip("Authentication Alert - Approach 1", ()=> {
        // Approach 1 : Passing the content of alert in cy.visit()
        
        cy.visit("https://the-internet.herokuapp.com/basic_auth", {
            auth: {
                username: "admin",
                password: "admin"
            }
        })
        cy.xpath("//div[@class='example']/descendant::p").should("have.contain", "Congratulations")

    })

    it("Authentication Alert - Approach 2", ()=> {
        // Approach 2 : Injucting credentials in URL
        
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.xpath("//div[@class='example']/descendant::p").should("have.contain", "Congratulations")
    })
})
