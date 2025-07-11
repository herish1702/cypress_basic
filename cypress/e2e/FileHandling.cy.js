require('cypress-file-upload')

describe('File Handling', () => {
    it.skip('Single File Upload', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get("input#file-upload").attachFile("Test_File.pdf")
        cy.get("input#file-submit").click()
        cy.wait(3000)
    })

    it.skip("Single File Upload with Rename", () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get("input#file-upload").attachFile({filePath:"Test_File.pdf", fileName:"Renamed_File.pdf"})
        cy.get("input#file-submit").click()
    })

    it.skip("Single File Upload - Drag n Drop", () => {
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get("div#drag-drop-upload").attachFile("Test_File.pdf", {subjectType: "drag-n-drop"})
    })

    it("Multiple File Upload", () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get("input#filesToUpload").attachFile(["Test_File.pdf", "Test_File_2.xlsx"])
    } 
    )
})