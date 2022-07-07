describe("Downloads", () => {
  it("renders the page", () => {
    cy.visit("/telechargements");
    cy.get("h1").should("contain", "Téléchargements");
  });

  it("lists four regional indices", () => {
    cy.contains("div", "Indices régionaux sur les ODD").within(() => {
      cy.get("a").should("have.length", 4);
    });
  });

  it("lists eight subnational indices", () => {
    cy.contains("div", "Indices infranationaux sur les ODD").within(() => {
      cy.get("a").should("have.length", 10);
    });
  });

  // it("all downloads have links with hrefs", () => {
  //   cy.get("#content a").each(($el) => {
  //     cy.wrap($el).should("have.attr", "href");
  //     cy.wrap($el).should("not.have.attr", "href", "TODO");
  //   });
  // });
});
