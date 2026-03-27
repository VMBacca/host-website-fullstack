describe("Signup Flow", () => {
  it("should send correct data to API", () => {
    cy.intercept("POST", "/api/users", (req) => {
      expect(req.body.firstName).to.eq("Vini");
      expect(req.body.lastName).to.eq("teste");
      expect(req.body.email).to.include("@");

      req.reply({
        statusCode: 201,
        body: { message: "Usuário cadastrado com sucesso!" },
      });
    }).as("createUser");

    cy.visit("http://localhost:3000/start-hosting/index.html");

    cy.get("#first-name").type("Vini");
    cy.get("#last-name").type("teste");
    cy.get("#email").type(`vini_${Date.now()}@email.com`);
    cy.get("#password").type("123456");

    cy.get("#agree-terms").check();
    cy.get("button[type='submit']").click();

    cy.wait("@createUser").then((interception) => {
      expect(interception.response.statusCode).to.eq(201);
      expect(interception.response.body.message).to.eq(
        "Usuário cadastrado com sucesso!",
      );
    });
  });
});
