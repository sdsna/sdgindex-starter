describe("Index", () => {
  it("says Hello World!", () => {
    cy.visit("/index");
    cy.get("h1").should("contain", "Hello World");
  });
});
