describe("Post Request - Request Body", () => {
    it("Approach 1 - Hardcoding the json object", () => {
        
        const requestBody = {
            "id": 1,
            "username": "Lolly",
            "email": "lolly@gmail.com",
            "password": "123456"
        }

        cy.request({
            method : "POST",
            url : "https://fakestoreapi.com/users",
            body : requestBody
        }).then ((response) => {
            expect(response.status).to.eq(200)
            //expect(response.body.id).to.eq(1)
        })
    })

    it("Apporach 2 - Dynamically generating Json valuse", () => {
        const requestBody = {
            "id": 11,
            "username": Math.random().toString(5).substring(2),
            "email":  Math.random().toString(5).substring(2)+"@gmail.com",
        }

        cy.request({
            method : "POST",
            url : "https://fakestoreapi.com/users",
            body : requestBody
        }).then ((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.id).to.eq(requestBody.id)
        })

    })

    beforeEach( () => {
        cy.fixture("PostCall.json").as("postData")
    })

    it("Appoach 3 - Using fixture file", function () {

        cy.request({
            method : "POST",
            url : "https://fakestoreapi.com/users",
            body : this.postData
        }).then ((response) => {
            expect(response.status).to.eq(200)
            //expect(response.body.id).to.eq(requestBody.id)
        })
    })
})