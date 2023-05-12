import { createSlice } from "@reduxjs/toolkit";
import { Receiver } from "@utils/Receiver";

const homeSlice = createSlice({
	name: "home",
	initialState: {
		currentValue: "",
		currentOperator: "",
		currentResult: "",
		history: [],
		historyItem: "",
		receiver: new Receiver(),
	},
	reducers: {
		inputValue(state, action) {
			state.receiver.showingResult = false;

			if (action.payload === ".") {
				if (!state.currentValue.includes(".")) {
					state.currentValue += action.payload;
				}
			}
			else {
				if (state.currentOperator === "home/equal" && !state.currentValue.includes(".")) {
					state.currentOperator = "";
					state.historyItem = "";
					state.currentResult = "";
					state.currentValue = "";
					state.receiver.result = 0;
					state.receiver.polishArray = [];
				}
				state.currentValue += action.payload;
			}
			state.historyItem += action.payload;
		},
		plus(state, action) {
			if (state.currentOperator === "home/equal") {
				state.historyItem += " + ";
				state.receiver.polishArray.push("+");
				state.currentResult = "";
				state.currentValue = "";
				state.receiver.showingResult = false;
				state.currentOperator = action.type;
			}
			else {
				state.historyItem += " + ";
				state.receiver.polishArray.push(state.currentValue);
				state.receiver.polishArray.push("+");
				state.currentValue = "";
				state.currentOperator = action.type;
			}
		},
		minus(state, action) {
			if (state.currentOperator === "home/equal") {
				state.historyItem += " - ";
				state.receiver.polishArray.push("-");
				state.currentResult = "";
				state.currentValue = "";
				state.receiver.showingResult = false;
				state.currentOperator = action.type;
			}
			else {
				state.historyItem += " - ";
				state.receiver.polishArray.push(state.currentValue);
				state.receiver.polishArray.push("-");
				state.currentValue = "";
				state.currentOperator = action.type;
			}
		},
		divide(state, action) {
			if (state.currentOperator === "home/equal") {
				state.historyItem += " / ";
				state.receiver.polishArray.push("/");
				state.currentResult = "";
				state.currentValue = "";
				state.receiver.showingResult = false;
				state.currentOperator = action.type;
			}
			else {
				state.historyItem += " / ";
				state.receiver.polishArray.push(state.currentValue);
				state.receiver.polishArray.push("/");
				state.currentValue = "";
				state.currentOperator = action.type;
			}
		},
		divWithRemainder(state, action) {
			if (state.currentOperator === "home/equal") {
				state.historyItem += " % ";
				state.receiver.polishArray.push("%");
				state.currentResult = "";
				state.currentValue = "";
				state.receiver.showingResult = false;
				state.currentOperator = action.type;
			}
			else {
				state.historyItem += " % ";
				state.receiver.polishArray.push(state.currentValue);
				state.receiver.polishArray.push("%");
				state.currentValue = "";
				state.currentOperator = action.type;
			}
		},
		multiply(state, action) {
			if (state.currentOperator === "home/equal") {
				state.historyItem += " * ";
				state.receiver.polishArray.push("*");
				state.currentResult = "";
				state.currentValue = "";
				state.receiver.showingResult = false;
				state.currentOperator = action.type;
			}
			else {
				state.historyItem += " * ";
				state.receiver.polishArray.push(state.currentValue);
				state.receiver.polishArray.push("*");
				state.currentValue = "";
				state.currentOperator = action.type;
			}
		},
		equal(state, action) {
			state.receiver.showingResult = true;
			state.currentOperator = action.type;

			state.receiver.polishArray.push(state.currentValue);
			state.receiver.bracketsFix();
			state.historyItem = state.receiver.polishArray.join("");
			state.currentResult = state.receiver.execute();

			state.historyItem += " = " + state.currentResult;
			const obj = { id: state.history.length, expression: state.historyItem };
			state.history.push(obj);
			state.historyItem = state.currentResult;
		},
		leftBracket(state, action) {
			if (state.currentValue)
				state.receiver.polishArray.push(state.currentValue);
			state.receiver.leftBracketsCounter++;
			state.receiver.polishArray.push("(");
			state.historyItem += "(";
			state.currentValue = "";
		},
		rightBracket(state, action) {
			if (state.currentValue)
				state.receiver.polishArray.push(state.currentValue);
			state.receiver.rightBracketsCounter++;
			state.receiver.polishArray.push(")");
			state.historyItem += ")";
			state.currentValue = "";
		},
		clearExpression(state, action) {
			state.currentValue = "";
			state.nowOperator = "";
			state.currentResult = "";
			state.receiver.polishArray = [];
			state.historyItem = "";
		},
		clearAll(state, action) {
			state.currentValue = "";
			state.nowOperator = "";
			state.currentResult = "";
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