describe("Screenshot and Screen Recording", () => {

    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false; // ignore all uncaught exceptions
        });
    });

    it ("ScreenShot", () => {
        cy.visit("https://oceanwp.org/demos/")
        //cy.screenshot("HomePage") // Captures a screenshot of the entire page

         cy.get('[rel="home"]').screenshot("Test") // Captures screenshot of the element with rel="home" and names it "Test"
    })
})
