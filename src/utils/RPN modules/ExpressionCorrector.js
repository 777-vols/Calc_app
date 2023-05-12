export default function correctExpressionCorrector(polishArray) {
	const correctExpression = [];

	if (polishArray.length === 1 && !Number(polishArray[0])) {
		return correctExpression;
	}

	for (let i = 0; i < polishArray.length; i++) {
		const current = polishArray[i];

		if (current === "-" || current === "+") {
			if (i === 0) {
				correctExpression.push("0");
			} else if (polishArray[i - 1] === "(") {
				correctExpression.push("0");
			}
		}
		if (current === "/" || current === "*") {
			if (i === 0) {
				correctExpression.push("1");
			} else if (polishArray[i - 1] === "(") {
				correctExpression.push("1");
			}
		}

		if (
			current === "(" &&
			!"+-*/%.(".includes(polishArray[i - 1]) &&
			polishArray[i - 1]
		) {
			correctExpression.push("*");
		}

		if (!"+-*/%.()".includes(current) && polishArray[i - 1] === ")") {
			correctExpression.push("*");
		}

		correctExpression.push(current);
		if (i === polishArray.length - 1) {
			if ("+-*/%".includes(polishArray[i])) {
				correctExpression.pop();
			}
		}
	}
	return correctExpression;
}
