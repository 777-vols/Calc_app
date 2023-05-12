import signPriority from "./SignPriority";

export default function RightPolishNotation(polishArray) {
	const numbers = [];
	const signs = [];

	for (let i = 0; i < polishArray.length; i++) {
		const priority = signPriority(polishArray[i]);

		if (priority === 0) {
			numbers.push(polishArray[i]);
		}
		if (priority === 1) {
			signs.push(polishArray[i]);
		}

		if (priority > 1) {
			while (signs.length !== 0) {
				if (signPriority(signs[signs.length - 1]) >= priority) {
					numbers.push(signs.pop());
				} else break;
			}
			signs.push(polishArray[i]);
		}

		if (priority === -1) {
			while (signPriority(signs[signs.length - 1]) !== 1) {
				numbers.push(signs.pop());
			}
			signs.pop();
		}
	}
	while (signs.length !== 0) {
		numbers.push(signs.pop());
	}

	return numbers;
}
