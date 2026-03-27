describe("Homepage", () => {
  it("should load the homepage", () => {
    cy.visit("http://localhost:3000");
    cy.url().should("include", "localhost:3000");
  });

  it("should display main structure", () => {
    cy.visit("http://localhost:3000");

    cy.get("body").should("be.visible");
    cy.get("header").should("exist");
    cy.get("footer").should("exist");
  });
});
