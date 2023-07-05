describe("Index", () => {
  it("renders the page!", () => {
    cy.visit("/");
    cy.contains("Rapport sur le développement durable pour le Bénin 2023");
  });

  it("all links are defined", () => {
    cy.get("#content a").each(($el) => {
      cy.wrap($el).should("have.attr", "href");
      cy.wrap($el).should("not.have.attr", "href", "/TODO");
    });
  });
});
