import "cypress-file-upload";
describe("File Uploads",()=>{
    it('Single File Upload',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('#file-upload').attachFile("sample-'&.pdf");
        cy.get('#file-submit').click();
        cy.wait(5000);

        cy.get("div[class='example'] h3").should("have.text","File Uploaded!");

        

    })
    it.skip('File Upload and Rename',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('#file-upload').attachFile({filePath:"sample-'&.pdf",fileName:"myfile.pdf"}); // Remane the file while uploading
        cy.get('#file-submit').click();
        cy.wait(5000);

        cy.get("div[class='example'] h3").should("have.text","File Uploaded!");

        

    })
    it.skip('File Upload By Drag and Drop',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('#drag-drop-upload').attachFile("sample-'&.pdf",{subjectType:'drag-n-drop'});
        cy.wait(5000);
        cy.get('#file-submit').click();
        cy.wait(5000);

        cy.get("div[class='example'] h3").should("have.text","File Uploaded!");

        

    })

    it.skip('Upload Multiple files',()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
        cy.get("input[name='filesToUpload']")
             .attachFile(["sample-'&.pdf","1.jpeg"]);
        cy.wait(3000);
        cy.get(':nth-child(6) > strong').should("have.text","Files You Selected:");

        

    })
    it.skip('File Upload- Shadow Dom',()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
        cy.get("input[name='filesToUpload']")
             .attachFile(["sample-'&.pdf","1.jpeg"]);
        cy.wait(3000);
        cy.get(':nth-child(6) > strong').should("have.text","Files You Selected:");

        

    })
    // it.only('File Upload- Shadow Dom',()=>{
    //     cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
    //     cy.get("input[name='filesToUpload']")
    //          .attachFile(["sample-'&.pdf","1.jpeg"]);
    //     cy.wait(3000);
    //     cy.get(':nth-child(6) > strong').should("have.text","Files You Selected:");

        

    // })


})