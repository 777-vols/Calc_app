import {
	expressions,
	brackets,
	exceptions,
} from "../expressions/expressions";

describe("Keypad test HomeCC", () => {
	it("Should check all buttons", () => {
		cy.visit("/homeCC");

		cy.enterExpr("1+2-3*4/5%(6)+7.90");
		cy.get("#result").should("have.text", "1 + 2 - 3 * 4 / 5 % (6) + 7.90");
		cy.get("[id='C']").click();

		cy.enterExpr("1+2-3*4/5%(6)+7.90=");
		cy.get("#result").should("have.text", "8.500");
		cy.get("[id='C']").click();

		cy.get("#result").should("have.text", "");
		cy.get("[id='C']").click();
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