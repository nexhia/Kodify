describe ("Account page has", () => {
    
    beforeEach ( () => {
        cy.visit("/account?userId=1")
    });

    it ("header of Account Page", function() {
        cy.get("h1").should("contain.text", "Account Page")
    })

    it ("button labelled Back that takes user back to Home Page", function() {
        cy.get("a.btn.btn-primary").should("contain.text", "Back")
        
    })
})
