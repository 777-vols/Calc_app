import {
	brackets,
	exceptions,
	expressions,
} from "../expressions/expressions";

describe("Keypad test HomeCC", () => {
	it("Should check all buttons", () => {
		cy.visit("/homeCC");

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

describe("Test expressions result HomeCC", () => {
	it("Should check results HomeCC", () => {
		cy.visit("/homeCC");
		expressions.forEach((expr) => {
			cy.checkResult(expr);
		});
	});
});

describe("Test brackets HomeCC", () => {
	it("Should check brackets HomeCC", () => {
		cy.visit("/homeCC");
		brackets.forEach((expr) => {
			cy.checkResult(expr);
		});
	});
});
describe("Test exceptions HomeCC", () => {
	it("Should check exceptions HomeCC", () => {
		cy.visit("/homeCC");
		exceptions.forEach((expr) => {
			cy.checkResult(expr);
		});
	});
});