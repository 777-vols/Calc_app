describe("Header test homeFC page", () => {
	it("Should open '/'", () => {
		cy.visit("/");
		cy.get("[link_test='logo']").should("have.text", "Calculator App");
		cy.get("[link_test='home_fc']").should("have.text", "Home FC");
		cy.get("[link_test='home_cc']").should("have.text", "Home CC");
		cy.get("[link_test='settings']").should("have.text", "Settings");
	});
});
describe("Header test homeCC page", () => {
	it("Should open '/homeCC'", () => {
		cy.visit("/");
		cy.get("[link_test='logo']").should("have.text", "Calculator App");
		cy.get("[link_test='home_fc']").should("have.text", "Home FC");
		cy.get("[link_test='home_cc']").should("have.text", "Home CC");
		cy.get("[link_test='settings']").should("have.text", "Settings");
	});
});
describe("Header test settings page", () => {
	it("Should open '/settings'", () => {
		cy.visit("/");
		cy.get("[link_test='logo']").should("have.text", "Calculator App");
		cy.get("[link_test='home_fc']").should("have.text", "Home FC");
		cy.get("[link_test='home_cc']").should("have.text", "Home CC");
		cy.get("[link_test='settings']").should("have.text", "Settings");
	});
});
