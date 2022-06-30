describe("Chapters", () => {
  it("renders the page", () => {
    cy.visit("/chapters");
    cy.get("h1").should("contain", "Read the Report");
  });

  it("contains all chapters", () => {
    cy.get("a[href^='/chapters/']").should("have.length", 5);
  });

  it("can load all chapters", () => {
    const selector = "a[href^='/chapters/']";

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
