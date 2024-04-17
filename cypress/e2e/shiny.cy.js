describe("shiny app", () => {
  it("greets the name", () => {
    cy.visit("http://127.0.0.1:5555/");
    cy.get("#name").type("Vedha");
    cy.get("#greet").click();
    cy.get("body").should("contain", "Hello, Vedha");
  });

  it("shows validation error when invalid name is entered", () => {
    cy.visit("http://127.0.0.1:5555/");
    cy.get("#name").type("vedha");
    cy.get(".shiny-output-error-validation").should("exist");
  });

  it("does not show validation error when valid name is entered", () => {
    cy.visit("http://127.0.0.1:5555/");
    cy.get("#name").type("Vedha");
    cy.get(".shiny-output-error-validation").should("not.exist");
  });
});
