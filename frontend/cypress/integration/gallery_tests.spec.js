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
    cy.contains("2018");
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
});
