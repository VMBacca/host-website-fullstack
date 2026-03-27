describe("Users API", () => {
  it("should return users list", () => {
    cy.request("http://localhost:3000/api/users")
      .its("status")
      .should("eq", 200);
  });

  it("should return an array", () => {
    cy.request("http://localhost:3000/api/users")
      .its("body")
      .should("be.an", "array");
  });
});
