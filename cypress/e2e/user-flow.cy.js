describe("User Flow", () => {
  it("should create and list user", () => {
    let users = [];

    cy.intercept("GET", "/api/users", (req) => {
      req.reply({
        statusCode: 200,
        body: users,
      });
    }).as("getUsers");

    cy.intercept("POST", "/api/users", (req) => {
      users.push(req.body);

      req.reply({
        statusCode: 201,
        body: { message: "Usuário cadastrado com sucesso!" },
      });
    }).as("createUser");

    cy.intercept("GET", "/api/plans", {
      statusCode: 200,
      body: [],
    });

    cy.visit("http://localhost:3000/start-hosting/index.html");

    const newUser = {
      firstName: "Vinicius",
      lastName: "Bacca",
      email: `vinicius_${Date.now()}@email.com`,
      password: "123456",
    };

    cy.get("#first-name").type(newUser.firstName);
    cy.get("#last-name").type(newUser.lastName);
    cy.get("#email").type(newUser.email);
    cy.get("#password").type(newUser.password);
    cy.get("#agree-terms").check();

    cy.get("button[type='submit']").click();

    cy.wait("@createUser");

    cy.wrap(users).should((response) => {
      expect(response.length).to.eq(1);
      expect(response[0].email).to.eq(newUser.email);
    });
  });
});
