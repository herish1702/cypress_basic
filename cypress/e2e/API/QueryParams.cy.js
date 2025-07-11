describe("Query Params", () => {
    it ("Query Params", () => {

        const queryParams = {
            page:2
        }
        cy.request({
            method : "GET",
            url : "https://reqres.in/api/users",
            qs : queryParams
        }).then ( (response) => {
            expect(response.status).to.eq(200)
            expect(response.body).has.property("page", 2)
            expect(response.body.data).to.have.length(6)
            expect(response.body.data[2]).to.have.property("id", 9)
            expect(response.body.data[0]).to.have.property("email", "michael.lawson@reqres.in")
        })
    })
})