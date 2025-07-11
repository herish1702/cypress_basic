class Utils {
    performRequestCall = ({requestType, url, headers = {}, qs = {}, body = {}, cookies = {}}) => {
        return cy.request({
            method: requestType.toUpperCase(),
            url,
            headers,
            qs,
            body,
            cookies,
            failOnStatusCode: false
        });
    }

    verifyStatusCode = (response, expectedStatusCode) => {
        expect(response.status).to.eq(expectedStatusCode);
    }
}

export { Utils };
