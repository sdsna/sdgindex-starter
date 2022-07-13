describe("Chapters", () => {
  it("renders the page", () => {
    cy.visit("/chapitres");
    cy.get("h1").should("contain", "Lire le rapport");
  });

  it("contains all chapters", () => {
    cy.get("a[href^='/chapitres/']").should("have.length", 6);
  });

  it("can load all chapters", () => {
    const selector = "a[href^='/chapitres/']";

    // For each chapter, test that the chapter page works
    cy.get(selector).then((links) => {
      Array.from({ length: links.length }).forEach((_, index) => {
        cy.get(selector)
          .eq(index)
          .then((link) => {
            cy.get(link).click();
            cy.url().should("include", link.attr("href"));

            // Force hard-reload to verify page loads successfully
            cy.reload(true);
            // Return to chapters page
            cy.go("back");
            /* eslint-disable cypress/no-unnecessary-waiting */
            cy.wait(3000);
          });
      });
    });
  });
});
