describe("HTTPS Request", () => {

    it("POST Call", () => {
        cy.request({
            method : "POST",
            url : "https://fakestoreapi.com/users",
            body : {
                "id": 10,
                "username": "Lolly",
                "email": "lolly@gmail.com",
                "password": "Test123*"
            }
        })
        .its("status")
        .should("eq",200)
    })

    it("GET Call", () => {
        cy.request("GET", "https://fakestoreapi.com/users/10")
        .its("status")
        .should("eq",200)
    })

    it("PUT Call", () => {
        cy.request("Put","https://fakestoreapi.com/users/10")
        .its("status")
        .should("eq",200)
    })

    it("Delete call", () => {
        cy.request("DELETE", "https://fakestoreapi.com/users/10")
        .its("status")
        .should("eq",200)
    })

    it("GET Call", () => {
        cy.request("GET", "https://fakestoreapi.com/users/10")
        .its("status")
        .should("eq",200)
    })
})