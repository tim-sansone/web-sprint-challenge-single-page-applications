describe("Ordering a Pizza App", () => {

    // refresh before every test
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    })

    const orderPizza = () => cy.get("#order-pizza");
    const nameInput = () => cy.get("#name-input");
    const sizeInput = () => cy.get("#size-dropdown");
    const toppings = () => cy.get("input[type=checkbox]");
    const specialText = () => cy.get("#special-text");
    const orderButton = () => cy.get("#order-button");

    it("Sanity check", () => {
        expect(2 + 2).to.equal(4);
        expect(2 - 2).not.to.equal(1);
    })

    it("Can navigate to the form page", () => {
        cy.url().should("include", "localhost:3000");
        orderPizza().should("exist").click();
        cy.url().should("include", "/pizza");
    })

    it("All inputs exist", () => {
        orderPizza().click();
        nameInput().should("exist");
        sizeInput().should("exist");
        toppings().should("exist");
        specialText().should("exist");
        orderButton().should("exist");
    })

    it("Can input a name", () => {
        orderPizza().click();
        nameInput()
            .should("have.value", "")
            .type("Tim Sansone")
            .should("have.value", "Tim Sansone");
    })

    it("Can check multiple boxes", () => {
        orderPizza().click();
        toppings()
            .should("not.be.checked")
            .check()
            .should("be.checked")

    })

    it("Can submit form", () => {
        orderPizza().click();
        nameInput().type("Tim Sansone");
        sizeInput().select("Party");
        toppings().eq(0).check();
        toppings().eq(3).check();
        toppings().eq(4).check();
        specialText().type("Please leave on the back porch");
        orderButton().click();
        cy.contains("data");
        cy.contains("Tim Sansone");
        cy.contains("Party");
        cy.contains("Please leave on the back porch");
    })

})