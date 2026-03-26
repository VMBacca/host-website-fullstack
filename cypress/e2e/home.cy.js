describe("Homepage", () => {
  it("should load the homepage", () => {
    cy.visit("http://localhost:3000");
  });

  it("should display main content", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Hosting"); // ajusta conforme texto da sua página
  });
});

describe("API Test", () => {
  it("should return plans", () => {
    cy.request("http://localhost:3000/api/plans")
      .its("status")
      .should("eq", 200);
  });
});
