describe("Index", () => {
  it("renders the page!", () => {
    cy.visit("/");
    cy.contains("Benin Sustainable Development Report");
  });
  // TODO
  // it("all links are defined", () => {
  //     cy.get("#content a").each(($el) => {
  //       cy.wrap($el).should("have.attr", "href");
  //       cy.wrap($el).should("not.have.attr", "href", "/TODO");
  //     });
  //   });
});
