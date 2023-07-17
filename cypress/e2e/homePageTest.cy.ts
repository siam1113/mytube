describe("home page", () => {
  it("should display docs, learn, templates and deploy link", () => {
    cy.visit("/");
    cy.get("h2").contains("Docs").should("be.visible");
    cy.get("h2").contains("Learn").should("be.visible");
    cy.get("h2").contains("Templates").should("be.visible");
    cy.get("h2").contains("Deploy").should("be.visible");
  });
});
