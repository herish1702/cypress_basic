describe("Header, Cookies and Bearer Token", () => {
    // before("Getting Auth token",() => {
    //     let authToken = null;
    //     cy.request({
    //         method : "POST",
    //         url : "https://fakestoreapi.com/auth/login",
    //         headers : {
    //             "Content-Type" : "application/json"
    //         },
    //         body : {
    //             "username": "",
    //             "password": "string"
    //         }
    //     }).then( (response) => {
    //         authToken = response.body.token;
    //     })
    // })


    it("Add User", () => {
        cy.request({
            method : "POST",
            url : "https://fakestoreapi.com/users",
            headers : {
                "Content-Type" : "application/json"
            },
            body : {
                "id": 10,
                "username": "Joe_boy_31",
                "email": "joe@gmail.com",
                "password": "12345678"
            }
        }).then ( (response) => {
            expect(response.status).to.eq(200)
            cy.task("logToTerminal", response.body);
        })
    })

    // it("Get Created User", () => {
    //     cy.request({
    //         method : "GET",
    //         url : "https://fakestoreapi.com/users",
    //         headers : {
    //             "Content-Type" : "application/json"
    //         }
    //     }).then((response) => {
    //         expect(response.status).to.eq(200)
    //         cy.task("logToTerminal", "📦 User fetched successfully!");
    //         cy.task("logToTerminal", JSON.stringify(response.body, null, 2));
    //     })
    // })
})