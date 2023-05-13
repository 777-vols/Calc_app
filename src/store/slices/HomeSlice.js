import { createSlice } from "@reduxjs/toolkit";
import { Receiver } from "@utils/Receiver";

const homeSlice = createSlice({
	name: "home",
	initialState: {
		currentValue: "",
		currentOperator: "",
		expressionResult: "",
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
				state.currentValue = "";
				state.receiver.polishArray = [];
			}
			if (action.payload === ".") {
				if (!state.currentValue.includes(".")) {
					state.currentValue += action.payload;
				}
			} else {
				state.currentValue += action.payload;
			}
			state.historyItem += action.payload;
		},
		plus(state, action) {
			if (state.currentOperator === "home/equal") {
				state.historyItem += " + ";
				state.receiver.polishArray.push("+");
				state.expressionResult = "";
				state.currentValue = "";
				state.showingResult = false;
				state.currentOperator = action.type;
			}
			if (state.currentValue || state.currentOperator === "home/rightBracket") {
				if (state.currentValue)
					state.receiver.polishArray.push(state.currentValue);
				state.historyItem += " + ";
				state.receiver.polishArray.push("+");
				state.currentValue = "";
				state.currentOperator = action.type;
			}
		},
		minus(state, action) {
			state.showingResult = false;
			if (state.currentOperator === "home/equal") {
				state.historyItem += " - ";
				state.receiver.polishArray.push("-");
				state.expressionResult = "";
				state.currentValue = "";
				state.currentOperator = action.type;
			}
			if (state.currentOperator !== "home/minus") {
				if (state.currentValue)
					state.receiver.polishArray.push(state.currentValue);
				state.historyItem += " - ";
				state.receiver.polishArray.push("-");
				state.currentValue = "";
				state.currentOperator = action.type;
			}
		},
		divide(state, action) {
			if (state.currentOperator === "home/equal") {
				state.historyItem += " / ";
				state.receiver.polishArray.push("/");
				state.expressionResult = "";
				state.currentValue = "";
				state.showingResult = false;
				state.currentOperator = action.type;
			}
			if (state.currentValue || state.currentOperator === "home/rightBracket") {
				if (state.currentValue)
					state.receiver.polishArray.push(state.currentValue);
				state.historyItem += " / ";
				state.receiver.polishArray.push("/");
				state.currentValue = "";
				state.currentOperator = action.type;
			}
		},
		divWithRemainder(state, action) {
			if (state.currentOperator === "home/equal") {
				state.historyItem += " % ";
				state.receiver.polishArray.push("%");
				state.expressionResult = "";
				state.currentValue = "";
				state.showingResult = false;
				state.currentOperator = action.type;
			}
			if (state.currentValue || state.currentOperator === "home/rightBracket") {
				if (state.currentValue)
					state.receiver.polishArray.push(state.currentValue);
				state.historyItem += " % ";
				state.receiver.polishArray.push("%");
				state.currentValue = "";
				state.currentOperator = action.type;
			}
		},
		multiply(state, action) {
			if (state.currentOperator === "home/equal") {
				state.historyItem += " * ";
				state.receiver.polishArray.push("*");
				state.expressionResult = "";
				state.currentValue = "";
				state.showingResult = false;
				state.currentOperator = action.type;
			}
			if (state.currentValue || state.currentOperator === "home/rightBracket") {
				if (state.currentValue)
					state.receiver.polishArray.push(state.currentValue);
				state.historyItem += " * ";
				state.receiver.polishArray.push("*");
				state.currentValue = "";
				state.currentOperator = action.type;
			}
		},
		equal(state, action) {
			state.showingResult = true;
			state.currentOperator = action.type;

			state.receiver.polishArray.push(state.currentValue);
			state.receiver.bracketsFix();
			state.historyItem = state.receiver.polishArray.join("");
			state.expressionResult = state.receiver.execute();

			state.historyItem += " = " + state.expressionResult;
			const obj = { id: state.history.length, expression: state.historyItem };
			state.history.push(obj);
			state.historyItem = state.expressionResult;
		},
		leftBracket(state, action) {
			state.showingResult = false;
			if (state.currentOperator === "home/equal") {
				state.expressionResult = "";
				state.currentValue = "";
			}
			if (state.currentValue)
				state.receiver.polishArray.push(state.currentValue);
			state.currentOperator = action.type;
			state.receiver.leftBracketsCounter++;
			state.receiver.polishArray.push("(");
			state.historyItem += "(";
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
				state.currentValue = "";
			}
		},
		clearExpression(state, action) {
			state.currentValue = "";
			state.currentOperator = "";
			state.expressionResult = "";
			state.receiver.polishArray = [];
			state.historyItem = "";
		},
		clearAll(state, action) {
			state.currentValue = "";
			state.currentOperator = "";
			state.expressionResult = "";
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
	equal,
	clearExpression,
	clearAll,
	clearHistory,
	leftBracket,
	rightBracket,
	divWithRemainder
} = homeSlice.actions;

export default homeSlice.reducer;