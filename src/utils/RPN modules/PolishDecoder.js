import { DivideCommand } from "@utils/DivideCommand";
import { MultiplyCommand } from "@utils/MultiplyCommand";
import { PlusCommand } from "@utils/PlusCommand";
import { DivWithRemCommand } from "@utils/DivWithRemCommand";
import { MinusCommand } from "@utils/MinusCommand";
import signPriority from "./SignPriority";

export default function PolishDecoder(polishArray) {
	let numbers = [];
	const commands = [];
	const stack = [];

	for (let i = 0; i < polishArray.length; i++) {
		if (signPriority(polishArray[i]) === 0) {
			while (signPriority(polishArray[i]) === 0) {
				numbers.push(polishArray[i++]);
				if (i === polishArray.length) break;
			}
			for (let j = 0; j < numbers.length; j++) {
				stack.push(numbers[j]);
			}
			numbers = [];
		}

		if (signPriority(polishArray[i]) > 1) {
			const a = stack.pop();
			const b = stack.pop();
			if (typeof a !== "string" || typeof b !== "string") {
				let current;
				let next;
				if (typeof a !== "string" && typeof b !== "string") {
				} else if (typeof a !== "string") {
					next = NaN;
					current = b;
				} else if (typeof b !== "string") {
					next = a;
					current = NaN;
				}
				if (polishArray[i] === "+") {
					stack.push(new PlusCommand(current, next));
					commands.push(new PlusCommand(current, next));
				} else if (polishArray[i] === "-") {
					stack.push(new MinusCommand(current, next));
					commands.push(new MinusCommand(current, next));
				} else if (polishArray[i] === "*") {
					stack.push(new MultiplyCommand(current, next));
					commands.push(new MultiplyCommand(current, next));
				} else if (polishArray[i] === "/") {
					stack.push(new DivideCommand(current, next));
					commands.push(new DivideCommand(current, next));
				} else if (polishArray[i] === "%") {
					stack.push(new DivWithRemCommand(current, next));
					commands.push(new DivWithRemCommand(current, next));
				}
			} else {
				if (polishArray[i] === "+") {
					stack.push(new PlusCommand(b, a));
					commands.push(new PlusCommand(b, a));
				} else if (polishArray[i] === "-") {
					stack.push(new MinusCommand(b, a));
					commands.push(new MinusCommand(b, a));
				} else if (polishArray[i] === "*") {
					stack.push(new MultiplyCommand(b, a));
					commands.push(new MultiplyCommand(b, a));
				} else if (polishArray[i] === "/") {
					stack.push(new DivideCommand(b, a));
					commands.push(new DivideCommand(b, a));
				} else if (polishArray[i] === "%") {
					stack.push(new DivWithRemCommand(b, a));
					commands.push(new DivWithRemCommand(b, a));
				}
			}
		}
	}



	const finalCommands = [];
	const commandsList = [...commands.reverse()];
	let result;

	for (let i = commandsList.length - 1; i > -1; i--) {
		if (
			!Number.isNaN(commandsList[i].val1) &&
			!Number.isNaN(commandsList[i].val2)
		) {
			finalCommands.push(commandsList[i].execute());
			commandsList.pop();
		} else if (!Number.isNaN(commandsList[i].val1)) {
			commandsList[i].val2 = finalCommands.pop();
			finalCommands.push(commandsList[i].execute());
			commandsList.pop();
		} else if (!Number.isNaN(commandsList[i].val2)) {
			commandsList[i].val1 = finalCommands.pop();
			finalCommands.push(commandsList[i].execute());
			commandsList.pop();
		} else if (
			Number.isNaN(commandsList[i].val1) &&
			Number.isNaN(commandsList[i].val2)
		) {
			commandsList[i].val2 = finalCommands.pop();
			commandsList[i].val1 = finalCommands.pop();
			finalCommands.push(commandsList[i].execute());
			commandsList.pop();
		}
	}

	if (finalCommands.length !== 0) {
		result = finalCommands.pop();
	} else {
		result = Number(polishArray.length === 0 ? 0 : polishArray.pop());
	}

	return Number.isInteger(result) ? result : result.toFixed(3);
}
