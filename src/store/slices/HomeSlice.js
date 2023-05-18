import { createSlice } from "@reduxjs/toolkit";
import { Receiver } from "@utils/Receiver";

const homeSlice = createSlice({
	name: "home",
	initialState: {
		currentValue: "",
		currentOperator: "",
		expressionResult: "",
		oldExpression: "",
		oldValue: "",
		history: [],
		historyItem: "",
		showingResult: false,
		receiver: new Receiver(),
	},
	reducers: {
		inputValue(state, action) {
			state.showingResult = false;
			if (state.currentOperator === "home/equal" && !state.currentValue.includes(".")) {
				state.currentOperator = "";
				state.historyItem = "";
				state.expressionResult = "";
				state.oldValue = state.currentValue;
				state.currentValue = "";
				state.receiver.polishArray = [];
			}
			if (action.payload === ".") {
				if (!state.currentValue.includes(".")) {
					state.currentValue += action.payload;
					state.historyItem += action.payload;
				}
			} else {
				state.currentValue += action.payload;
				state.historyItem += action.payload;
			}
		},
		plus(state, action) {
			if (state.currentOperator === "home/equal") {
				state.historyItem += "+";
				state.receiver.polishArray.push("+");
				state.expressionResult = "";
				state.oldValue = state.currentValue;
				state.currentValue = "";
				state.showingResult = false;
				state.currentOperator = action.type;
			}
			if (state.currentValue || state.currentOperator === "home/rightBracket" || state.receiver.isLastSign()) {
				if (state.currentValue !== "-" && state.currentValue[state.currentValue.length - 1] !== ".") {
					if (state.currentValue)
						state.receiver.polishArray.push(state.currentValue);
					if (state.receiver.isLastSign()) {
						state.historyItem = state.historyItem.slice(0, state.historyItem.length - 1);
						state.receiver.polishArray.pop();
					}
					state.historyItem += "+";
					state.oldValue = state.currentValue;
					state.currentValue = "";
					state.receiver.polishArray.push("+");
					state.currentOperator = action.type;
				}
			}
		},
		minus(state, action) {
			state.showingResult = false;
			if (state.currentOperator === "home/equal") {
				state.historyItem += "-";
				state.receiver.polishArray.push("-");
				state.expressionResult = "";
				state.oldValue = state.currentValue;
				state.currentValue = "";
				state.currentOperator = action.type;
			}
			if (state.currentValue || state.currentOperator === "home/rightBracket" || state.receiver.isLastSign()) {
				if (state.currentValue !== "-" && state.currentValue[state.currentValue.length - 1] !== ".") {
					if (state.currentValue)
						state.receiver.polishArray.push(state.currentValue);
					if (state.receiver.isLastSign()) {
						state.historyItem = state.historyItem.slice(0, state.historyItem.length - 1);
						state.receiver.polishArray.pop();
					}
					state.historyItem += "-";
					state.receiver.polishArray.push("-");
					state.oldValue = state.currentValue;
					state.currentValue = "";
					state.currentOperator = action.type;
				}
			}
			if (!state.currentOperator || state.currentOperator === "home/leftBracket") {
				state.historyItem += "-";
				state.currentValue = "-";
				state.currentOperator = action.type;
			}
		},
		divide(state, action) {
			if (state.currentOperator === "home/equal") {
				state.historyItem += "/";
				state.receiver.polishArray.push("/");
				state.expressionResult = "";
				state.oldValue = state.currentValue;
				state.currentValue = "";
				state.showingResult = false;
				state.currentOperator = action.type;
			}
			if (state.currentValue || state.currentOperator === "home/rightBracket" || state.receiver.isLastSign()) {
				if (state.currentValue !== "-" && state.currentValue[state.currentValue.length - 1] !== ".") {
					if (state.currentValue)
						state.receiver.polishArray.push(state.currentValue);
					if (state.receiver.isLastSign()) {
						state.historyItem = state.historyItem.slice(0, state.historyItem.length - 1);
						state.receiver.polishArray.pop();
					}
					state.historyItem += "/";
					state.receiver.polishArray.push("/");
					state.oldValue = state.currentValue;
					state.currentValue = "";
					state.currentOperator = action.type;
				}
			}
		},
		divWithRemainder(state, action) {
			if (state.currentOperator === "home/equal") {
				state.historyItem += "%";
				state.receiver.polishArray.push("%");
				state.expressionResult = "";
				state.oldValue = state.currentValue;
				state.currentValue = "";
				state.showingResult = false;
				state.currentOperator = action.type;
			}
			if (state.currentValue || state.currentOperator === "home/rightBracket" || state.receiver.isLastSign()) {
				if (state.currentValue !== "-" && state.currentValue[state.currentValue.length - 1] !== ".") {
					if (state.currentValue)
						state.receiver.polishArray.push(state.currentValue);
					if (state.receiver.isLastSign()) {
						state.historyItem = state.historyItem.slice(0, state.historyItem.length - 1);
						state.receiver.polishArray.pop();
					}
					state.historyItem += "%";
					state.receiver.polishArray.push("%");
					state.oldValue = state.currentValue;
					state.currentValue = "";
					state.currentOperator = action.type;
				}
			}
		},
		multiply(state, action) {
			if (state.currentOperator === "home/equal") {
				state.historyItem += "*";
				state.receiver.polishArray.push("*");
				state.expressionResult = "";
				state.oldValue = state.currentValue;
				state.currentValue = "";
				state.showingResult = false;
				state.currentOperator = action.type;
			}
			if (state.currentValue || state.currentOperator === "home/rightBracket" || state.receiver.isLastSign()) {
				if (state.currentValue !== "-" && state.currentValue[state.currentValue.length - 1] !== ".") {
					if (state.currentValue)
						state.receiver.polishArray.push(state.currentValue);
					if (state.receiver.isLastSign()) {
						state.historyItem = state.historyItem.slice(0, state.historyItem.length - 1);
						state.receiver.polishArray.pop();
					}
					state.historyItem += "*";
					state.receiver.polishArray.push("*");
					state.oldValue = state.currentValue;
					state.currentValue = "";
					state.currentOperator = action.type;
				}
			}
		},
		equal(state, action) {
			if (state.currentValue && state.currentOperator !== "home/equal")
				state.receiver.polishArray.push(state.currentValue);
			state.showingResult = true;
			state.currentOperator = action.type;

			state.receiver.bracketsFix();
			state.historyItem = state.receiver.getPolishArray().join("");
			state.expressionResult = state.receiver.execute();

			state.oldExpression = state.historyItem;
			state.historyItem += " = " + state.expressionResult;
			const obj = { id: state.history.length, expression: state.historyItem };
			state.history.push(obj);
			state.historyItem = state.expressionResult;
		},
		leftBracket(state, action) {
			state.showingResult = false;
			if (state.currentOperator === "home/equal") {
				state.expressionResult = "";
				state.oldValue = state.currentValue;
				state.currentValue = "";
			}
			if (state.currentValue)
				state.receiver.polishArray.push(state.currentValue);
			state.currentOperator = action.type;
			state.receiver.leftBracketsCounter++;
			state.receiver.polishArray.push("(");
			state.historyItem += "(";
			state.oldValue = state.currentValue;
			state.currentValue = "";
		},
		rightBracket(state, action) {
			if (state.currentValue)
				state.receiver.polishArray.push(state.currentValue);
			if (state.receiver.rightBracketsCounter < state.receiver.leftBracketsCounter) {
				state.currentOperator = action.type;
				state.receiver.rightBracketsCounter++;
				state.receiver.polishArray.push(")");
				state.historyItem += ")";
				state.oldValue = state.currentValue;
				state.currentValue = "";
			}
		},
		clearExpression(state, action) {
			state.oldValue = "";
			state.currentValue = "";
			state.currentOperator = "";
			state.expressionResult = "";
			state.oldExpression = "";
			state.receiver.polishArray = [];
			state.historyItem = "";
		},
		clearAll(state, action) {
			state.oldValue = "";
			state.currentValue = "";
			state.currentOperator = "";
			state.expressionResult = "";
			state.oldExpression = "";
			state.receiver.polishArray = [];
			state.historyItem = "";
			state.history = [];
		},
		clearHistory(state, action) {
			state.history = [];
		},
	}
});

export const {
	inputValue,
	plus,
	minus,
	divide,
	multiply,
	divWithRemainder,
	equal,
	clearExpression,
	clearAll,
	clearHistory,
	leftBracket,
	rightBracket
} = homeSlice.actions;

export default homeSlice.reducer;