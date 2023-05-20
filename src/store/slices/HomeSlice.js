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
			if (state.receiver.emptyBracketsCheck()) {
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
					if (!(state.currentValue[0] === "0" && action.payload === "0"
						&& !state.currentValue.includes("."))) {
						state.currentValue += action.payload;
						state.historyItem += action.payload;
					}
				}
			}
		},
		operator(state, action) {
			if (state.receiver.emptyBracketsCheck()) {
				state.showingResult = false;
				if (state.currentOperator === "home/equal") {
					state.historyItem += action.payload;
					state.receiver.polishArray.push(action.payload);
					state.expressionResult = "";
					state.currentValue = "";
					state.oldValue = state.currentValue;
					state.currentOperator = action.payload;
				}
				if (state.currentValue || state.currentOperator === "home/rightBracket"
					|| state.receiver.isLastSign()) {
					if (state.currentValue !== "-" && state.currentValue[state.currentValue.length - 1] !== ".") {
						if (state.currentValue)
							state.receiver.polishArray.push(state.currentValue);
						if (state.receiver.isLastSign()) {
							state.historyItem = state.historyItem.slice(0, state.historyItem.length - 1);
							state.receiver.polishArray.pop();
						}
						state.historyItem += action.payload;
						if (state.currentValue)
							state.oldValue = state.currentValue;
						state.currentValue = "";
						state.receiver.polishArray.push(action.payload);
						state.currentOperator = action.payload;
					}
				}
				if (action.payload === "-") {
					if (!state.currentOperator || state.currentOperator === "home/leftBracket") {
						if (!state.currentValue.includes(".")) {
							state.historyItem += action.payload;
							state.currentValue = action.payload;
							state.currentOperator = action.type;
						}
					}
				}
			}
		},
		equal(state, action) {
			if (state.currentValue[state.currentValue.length - 1] !== ".") {
				if (state.currentValue && state.currentOperator !== "home/equal") {
					state.receiver.polishArray.push(state.currentValue);
					state.currentValue = "";
				}

				if (state.receiver.bracketsFix() && !state.receiver.isLastSign()) {
					state.showingResult = true;
					state.currentOperator = action.type;

					state.historyItem = state.receiver.getPolishArray().join("");
					state.expressionResult = state.receiver.execute();

					state.oldExpression = state.historyItem;
					state.historyItem += " = " + state.expressionResult;
					const obj = { id: state.history.length, expression: state.historyItem };
					state.history.push(obj);
					state.historyItem = state.expressionResult;
				}
			}
		},
		leftBracket(state, action) {
			if (state.currentValue[state.currentValue.length - 1] !== ".") {
				state.showingResult = false;
				if (state.currentOperator === "home/equal") {
					state.expressionResult = "";
					if (state.currentValue)
						state.oldValue = state.currentValue;
					state.currentValue = "";
				}
				if (state.currentValue)
					state.receiver.polishArray.push(state.currentValue);
				state.currentOperator = action.type;
				state.receiver.leftBracketsCounter++;
				state.receiver.polishArray.push("(");
				state.historyItem += "(";
				if (state.currentValue)
					state.oldValue = state.currentValue;
				state.currentValue = "";
			}
		},
		rightBracket(state, action) {
			if (state.currentValue[state.currentValue.length - 1] !== ".") {
				if (state.currentValue)
					state.receiver.polishArray.push(state.currentValue);
				if (state.receiver.rightBracketsCounter < state.receiver.leftBracketsCounter) {
					state.currentOperator = action.type;
					state.receiver.rightBracketsCounter++;
					state.receiver.polishArray.push(")");
					state.historyItem += ")";
					if (state.currentValue)
						state.oldValue = state.currentValue;
					state.currentValue = "";
				}
			}
		},
		clearExpression(state, action) {
			if (state.currentValue) {
				state.currentValue = String(state.currentValue).slice(0, state.currentValue.length - 1);
				state.historyItem = String(state.historyItem).slice(0, state.historyItem.length - 1);
				state.oldValue = "";
			}
		},
		clearAll(state, action) {
			state.oldValue = "";
			state.currentValue = "";
			state.currentOperator = "";
			state.expressionResult = "";
			state.oldExpression = "";
			state.receiver.polishArray = [];
			state.historyItem = "";
		},
		clearHistory(state, action) {
			state.history = [];
		},
	}
});

export const {
	inputValue,
	operator,
	equal,
	clearExpression,
	clearAll,
	clearHistory,
	leftBracket,
	rightBracket
} = homeSlice.actions;

export default homeSlice.reducer;