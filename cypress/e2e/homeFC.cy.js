import themes from "../../src/constants/themesColors";
import {
	brackets,
	exceptions,
	expressions,
	history,
	themesList,
} from "../expressions/expressions";


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

describe("Test navigation", () => {
	it("Should check navigation", () => {
		cy.visit("/");

		cy.get("[link_test='logo']").click();
		cy.location("pathname").should("eq", "/");

		cy.get("[link_test='home_fc']").click();
		cy.location("pathname").should("eq", "/");

		cy.get("[link_test='home_cc']").click();
		cy.location("pathname").should("eq", "/homeCC");

		cy.get("[link_test='settings']").click();
		cy.location("pathname").should("eq", "/settings");
	});
});

describe("Keypad test HomeFC", () => {
	it("Should check all buttons", () => {
		cy.visit("/");

		cy.enterExpr("1+2-3*4/5%(6)+7.90");
		cy.get("#expression").should("have.text", "1+2-3*4/5%(6)+");
		cy.get("#result").should("have.text", "7.90");
		cy.get("[id='CE']").click();

		cy.enterExpr("1+2-3*4/5%(6)+7.90=");
		cy.get("#expression").should("have.text", "1+2-3*4/5%(6)+7.90");
		cy.get("#result").should("have.text", "8.500");
		cy.get("[id='CE']").click();

		cy.enterExpr("1+2-3*4/5%(6)+7.9");
		cy.get("[id='C']").click();
		cy.get("#expression").should("have.text", "1+2-3*4/5%(6)+");
		cy.get("#result").should("have.text", "7.");
		cy.get("[id='C']").click();
		cy.get("#result").should("have.text", "7");
		cy.get("[id='C']").click();
		cy.get("#result").should("have.text", "");
		cy.get("[id='CE']").click();
		cy.get("#expression").should("have.text", "");
		cy.get("#result").should("have.text", "");
	});
});

describe("Test expressions result HomeFC", () => {
	it("Should check results HomeFC", () => {
		cy.visit("/");
		expressions.forEach((expr) => {
			cy.checkResult(expr);
		});
	});
});

describe("Test brackets HomeFC", () => {
	it("Should check brackets HomeFC", () => {
		cy.visit("/");
		brackets.forEach((expr) => {
			cy.checkResult(expr);
		});
	});
});
describe("Test exceptions HomeFC", () => {
	it("Should check exceptions HomeFC", () => {
		cy.visit("/");
		exceptions.forEach((expr) => {
			cy.checkResult(expr);
		});
	});
});
describe("Test themes", () => {
	it("Should check themes select", () => {
		cy.visit("/settings");
		cy.checkThemes(themesList, themes);
	});
});
describe("Test history", () => {
	it("Should check history", () => {
		cy.visit("/");
		cy.checkHistory(history);
		cy.visit("/settings");
		cy.get("[id='CH']").click();
		cy.visit("/");
	});
});
describe("Test clear history button", () => {
	it("Should check clear history button", () => {
		cy.visit("/");
		cy.checkHistory(history);
		cy.visit("/settings");
		cy.get("[id='CH']").click();
		cy.visit("/");
		cy.get("#history").children().should("have.length", 0);
	});
});

