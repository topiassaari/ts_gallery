describe("gallery stuff works", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("displays header", () => {
    cy.contains("A GALLERY OF IMAGES I'VE MADE IN THE PAST 6 YEARS");
    cy.get("#signature").should("be.visible");
    cy.get("#admin").should("be.visible");
    cy.contains("2018");
  });
  it("displays filters", () => {
    cy.wrap(["2022", "2021", "2020", "2019", "2018", "2017"]).each((filter) => {
      cy.contains(filter);
    });
  });
  it("navigates to admin", () => {
    cy.get("#admin").click();
    cy.contains("username");
    cy.contains("password");
  });
  it("displays image", () => {
    cy.get(".thumbnail")
      .first()
      .children()
      .should("have.attr", "src")
      .should(
        "include",
        "https://topias.kuvat.fi/kuvat/website%20gallery/P290.jpg?img=medium"
      );
  });
  it("opens lightbox", () => {
    cy.get(".thumbnail").first().click();
    cy.contains("x");
    cy.contains("prev");
    cy.contains("next");
    cy.contains("Kotka, 2022");
  });
  it("filter works", () => {
    //todo replace static way of testing this
    cy.get("#thumbnailGrid").children().should("have.length", 28);
    cy.contains("2017").click();
    cy.get("#thumbnailGrid").children().should("have.length", 4);
  });
  it("dark theme works", () => {
    cy.get("#root").should("have.class", "light");
    cy.get(".App").should("have.css", "background-color", "rgb(255, 255, 255)");

    cy.get("#themeSelector").click();
    cy.get("#root").should("have.class", "dark");
    cy.get(".App").should("have.css", "background-color", "rgb(29, 29, 29)");
  });
});
describe("mobile view works", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("lightbox controls available in mobile", () => {
    cy.viewport(375, 667);
    cy.get(".thumbnail").first().click();
    cy.get("#mobileControls").should("not.be.visible");
    cy.get("#desktopControls").should("be.visible");
  });
  it("lightbox controls available in landscape mobile", () => {
    cy.viewport(667, 375);
    cy.get(".thumbnail").first().click();
    cy.get("#mobileControls").should("be.visible");
    cy.get("#desktopControls").should("not.be.visible");
  });
  it("title is not visible", () => {
    cy.viewport(375, 667);
    cy.get("#titleContainer").should("not.be.visible");
  });
});
