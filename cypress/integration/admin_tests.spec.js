describe("admin stuff works", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8000");
    cy.get("#admin").click();
  });
  it("navigates to gallery", () => {
    cy.get("#signature").click();
    cy.contains("2018");
  });
  it("shows login form", () => {
    cy.contains("username");
    cy.contains("password");
    cy.contains("imgTable").should("not.exist");
  });
  it("doesn't log in with wrong values", () => {
    cy.get("#admin").click();
    cy.get("#username").type("wrong value");
    cy.get("#password").type("wrong value");
    cy.get(".button").click();
    cy.contains("login failed");
  });
  it("logs in with correct values", () => {
    cy.get("#admin").click();
    cy.get("#username").type(Cypress.env("USERNAME"));
    cy.get("#password").type(Cypress.env("PASSWORD"));
    cy.get(".button").click();
    cy.contains("img");
    cy.contains("logged in " + Cypress.env("USERNAME"));
  });
  it("adds image", () => {
    cy.get(".add").click();
    cy.get("#formUrl").type("https://topiassaari.com");
    cy.get("#formDesc").type("test");
    cy.get(".submit").click();
    cy.contains("test");
    cy.contains("img added");
  });
  it("updates image", () => {
    cy.contains("test").click();
    cy.get("#formDesc").type("i");
    cy.get(".update").click();
    cy.contains("testi");
  });
  it("deletes image", () => {
    cy.contains("testi").click();
    cy.get(".delete").click();
    cy.contains("testi").should("not.exist");
  });
  it("logs out", () => {
    cy.get("#logout").click();
    cy.contains("logged out");
  });
});
