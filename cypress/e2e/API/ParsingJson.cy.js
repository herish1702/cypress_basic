import {Utils} from "./Utils"

describe("Parsing JSON Response", () => {
    

    it("Simple Json", () => {
        let utilsobject = new Utils();
        utilsobject.performRequestCall({
            requestType: "GET",
            url: "https://fakestoreapi.com/users/10",
            }).then( (response) => {
            utilsobject.verifyStatusCode(response, 200);
        })
    })
})