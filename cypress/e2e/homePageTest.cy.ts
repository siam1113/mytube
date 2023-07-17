describe("home page", () => {
  it("should display navbar links", () => {
    cy.visit("/");
    cy.get("a").contains("All").should("be.visible");
    cy.get("a").contains("Channels").should("be.visible");
    cy.get("a").contains("Videos").should("be.visible");
    cy.get("a").contains("Shorts").should("be.visible");
    cy.get("a").contains("Playlists").should("be.visible");
  });
});
