import { should } from "chai"

describe("ChatGPT Tasks", ()=> {

    // it("Task 1", () => {
    //     cy.visit("https://example.cypress.io")
    //     cy.get("a.dropdown-toggle").click()
    //     cy.contains('Querying').click()
    // })

    // it("Task 2", () => {
    //     cy.visit("https://example.cypress.io/commands/actions")
    //     cy.get("input#email1").as("emailInput")
    //     cy.get("@emailInput").type("lolly@qa.com")
    //     cy.get("@emailInput").should("have.value","lolly@qa.com")
    //     cy.get('@emailInput').then( (text) => {
    //         cy.log(text).text()
    //     })
    // })

    // it("Task 3", () => {
    //     cy.request({
    //         method: "GET",
    //         url : "https://jsonplaceholder.typicode.com/posts/1"
    //     }).then( (response) => {
    //         expect(response.status).to.eq(200)
    //         expect(response.body).to.have.property('title', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
    //     })
    // })

    it("Task-4",() => {
        cy.session("loginSession", () => {
            cy.request('POST', 'https://reqres.in/api/login', {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }).then((res) => {  
                expect(res.status).to.eq(200)   
                window.localStorage.setItem('authToken', res.body.token)
            })
        })
        
    })

    it("Task - 5", () => {
        cy.visit("https://example.cypress.io/commands/querying")
        cy.xpath("//button[@id='query-btn']").click()
        cy.xpath("//button[@id='query-btn']").isDisplayed()
    })
})