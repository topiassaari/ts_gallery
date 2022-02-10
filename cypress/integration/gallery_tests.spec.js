describe("gallery stuff works", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8000");
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
  it("displays image", () => {
    cy.get(".thumbnail")
      .first()
      .children()
      .should("have.attr", "src")
      .should(
        "include",
        "https://topias.kuvat.fi/kuvat/website%20gallery/P270.jpg?img=medium"
      );
  });
  it("opens lightbox", () => {
    cy.get(".thumbnail").first().click();
    cy.contains("x");
    cy.contains("prev");
    cy.contains("next");
    cy.contains("Herttoniemi, 2021");
  });
  it("filter works", () => {
    //todo replace static way of testing this
    cy.get("#thumbnailGrid").children().should("have.length", 27);
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
