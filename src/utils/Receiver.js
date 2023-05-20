import ExpressionCorrector from "./RPN modules/ExpressionCorrector";
import PolishDecoder from "./RPN modules/PolishDecoder";
import RightPolishNotation from "./RPN modules/RPN";

export const Receiver = class {
	constructor() {
		this.commandsList = [];
		this.polishArray = [];
		this.leftBracketsCounter = 0;
		this.rightBracketsCounter = 0;
		this.finalCommands = [];
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

	bracketsFix() {
		if (this.leftBracketsCounter > this.rightBracketsCounter) {
			for (let i = 0; i < this.leftBracketsCounter - this.rightBracketsCounter; i++) {
				this.polishArray.push(")");
				if (this.polishArray.join("").includes("()")) {
					this.polishArray.pop();
					return false;
				}
			}
		}
		this.epmptyBracketsCounters();

		if (this.polishArray.join("").includes("()"))
			return false;
		else
			return true;
	}

	emptyBracketsCheck() {
		if (this.polishArray.join("").includes("()"))
			return false;
		else
			return true;
	}

	isLastSign() {
		if ("+-*/%".includes(this.polishArray[this.polishArray.length - 1]))
			return true;
		else
			return false;
	}

	setPolishArray(value) {
		if (value)
			this.polishArray.push(value);
		else
			this.polishArray.pop();
	}
	getPolishArray() {
		return this.polishArray;
	}
	emptyPolishArray() {
		this.polishArray = [];
	}

	getLeftBracketsCounter() {
		return this.leftBracketsCounter;
	}
	setLeftBracketsCounter() {
		this.leftBracketsCounter++;
	}

	getRightBracketsCounter() {
		return this.rightBracketsCounter;
	}
	setRightBracketsCounter() {
		this.rightBracketsCounter++;
	}
	epmptyBracketsCounters() {
		this.leftBracketsCounter = 0;
		this.rightBracketsCounter = 0;
	}
};