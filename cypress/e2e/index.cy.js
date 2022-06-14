describe("Index", () => {
  it("says Hello World!", () => {
    cy.visit("/");
    cy.get("h1").should("contain", "Hello World");
  });
});
