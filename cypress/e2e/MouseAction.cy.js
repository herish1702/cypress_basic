require("@4tw/cypress-drag-drop")

describe("Mouse Action", () => {
    it.skip("Mouse Hover", () => {
        cy.visit("https://demo.opencart.com")
        cy.xpath("//a[text()='Desktops']/ancestor::ul/descendant::a[text()='Mac (1)']").should("not.be.visible")
        cy.xpath("//a[text()='Desktops']").trigger("mouseover").click()
        cy.xpath("//a[text()='Desktops']/ancestor::ul/descendant::a[text()='Mac (1)']").should("be.visible")
    })

    it.skip("Mouse Right Click - Approach 1", () => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.xpath("//span[text()='right click me']").rightclick()
        cy.xpath("//span[text()='Copy']").should("be.visible")
    })

    it.skip("Mouse Right Click - Approach 2", () => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.xpath("//span[text()='right click me']").trigger("contextmenu")
        cy.xpath("//span[text()='Copy']").should("be.visible")
    })

    it.skip("Double Click - Approach 1", () => {
        cy.visit("https://cps-check.com/double-click-test")
        cy.get("#clicker").dblclick()
        cy.get("#dcCount").then((e) => {
            let count = e.text()
            expect(count).to.not.eq("0")
        })
    })

    it.skip("Double Click - Approach 2", () => {
        cy.visit("https://cps-check.com/double-click-test")
        cy.get("#clicker").trigger("dblclick")
        cy.xpath("//p[text()='Double clicks: ']").then ((e) => {
            let count = e.text()
            expect(count).to.not.eq("0")
        })
    })

    it.skip("Drag and Drop", () => {
        cy.visit("https://www.globalsqa.com/demo-site/draganddrop/")
        cy.get('[alt="The peaks of High Tatras"]').drag("#trash", {force: true})
    })

    it("Scroll to Element", () => {
        cy.visit("https://www.worldometers.info/geography/how-many-countries-are-there-in-the-world/")
        cy.xpath("//a[text()='Ghana']").scrollIntoView().should("be.visible")
    })
})
