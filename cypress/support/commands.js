Cypress.Commands.add("enterExpr", (expr) => {
	expr.split("").forEach((el) => {
		cy.get(`[id="${el}"]`).click();
	});
});

Cypress.Commands.add("checkResult", (expr) => {
	cy.enterExpr(expr.expression);
	cy.get("#result").should("have.text", expr.result);
	cy.get("[id='C']").click();
});

Cypress.Commands.add("checkCE", (hist) => {
	hist.forEach((el) => {
		cy.enterExpr(el.expression);
		cy.get("#history").children().first().should("have.text", el.result);
		cy.get("[id='C']").click();
	});
});

Cypress.Commands.add("checkThemes", (themes, themesList) => {
	console.log(themes);
	themes.forEach(el => {
		cy.get("select").select(el);
		cy.get("#wrapper")
			.should("have.css", "background-color", themesList[el].background)
			.should("have.css", "color", themesList[el].color);
	})
});

Cypress.Commands.add("checkHistory", (hist) => {
	hist.forEach((el) => {
		cy.enterExpr(el.expression);
		cy.get("#history").children().first().should("have.text", el.result);
		cy.get("[id='C']").click();
	});
});

