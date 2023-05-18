import RightPolishNotation from "./RPN modules/RPN";
import PolishDecoder from "./RPN modules/PolishDecoder";
import ExpressionCorrector from "./RPN modules/ExpressionCorrector";

export const Receiver = class {
	constructor() {
		this.commandsList = [];
		this.polishArray = [];
		this.leftBracketsCounter = 0;
		this.rightBracketsCounter = 0;
		this.finalCommands = [];
	}

	bracketsFix() {
		if (this.leftBracketsCounter > this.rightBracketsCounter) {
			for (let i = 0; i < this.leftBracketsCounter - this.rightBracketsCounter; i++) {
				this.polishArray.push(")");
			}
		}
		this.leftBracketsCounter = 0;
		this.rightBracketsCounter = 0;
	}

	execute() {
		this.polishArray = ExpressionCorrector(this.polishArray);
		this.polishArray = RightPolishNotation(this.polishArray);
		const result = PolishDecoder(this.polishArray);

		this.commandsList = [];
		this.polishArray = [];

		this.polishArray.push(String(result));
		return result;
	}

	isLastSign() {
		if ("+-*/%".includes(this.polishArray[this.polishArray.length - 1]))
			return true;
		else
			return false;
	}

	getPolishArray() {
		return this.polishArray;
	}
};