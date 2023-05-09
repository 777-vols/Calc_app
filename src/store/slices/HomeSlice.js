import { createSlice } from "@reduxjs/toolkit";
import { Receiver } from "@utils/Receiver";
import { PlusCommand } from "@utils/PlusCommand";
import { MinusCommand } from "@utils/MinusCommand";
import { MultiplyCommand } from "@utils/MultiplyCommand";
import { DivideCommand } from "@utils/DivideCommand";
import { DivWithRemCommand } from "@utils/DivWithRemCommand";
import operatorCheck from "@utils/OperatorCheck";

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
				}
				state.currentValue += action.payload;
			}
			state.historyItem += action.payload;
		},
		plus(state, action) {
			if (state.currentOperator === "home/equal") {
				state.historyItem += " + ";
				state.currentResult = "";
				state.currentValue = "";
				state.receiver.showingResult = false;
				state.currentOperator = action.type;
			}
			else {
				operatorCheck(state, PlusCommand);
				state.historyItem += " + ";
				state.currentValue = "";
				state.currentOperator = action.type;
			}
		},
		minus(state, action) {
			if (state.currentOperator === "home/equal") {
				state.historyItem += " - ";
				state.currentResult = "";
				state.currentValue = "";
				state.receiver.showingResult = false;
				state.currentOperator = action.type;
			}
			else {
				operatorCheck(state, MinusCommand);
				state.historyItem += " - ";
				state.currentValue = "";
				state.currentOperator = action.type;
			}
		},
		divide(state, action) {
			if (state.currentOperator === "home/equal") {
				state.historyItem += " / ";
				state.currentResult = "";
				state.currentValue = "";
				state.receiver.showingResult = false;
				state.currentOperator = action.type;
			}
			else {
				operatorCheck(state, DivideCommand);
				state.historyItem += " / ";
				state.currentValue = "";
				state.currentOperator = action.type;
			}
		},
		divWithRemainder(state, action) {
			if (state.currentOperator === "home/equal") {
				state.historyItem += " % ";
				state.currentResult = "";
				state.currentValue = "";
				state.receiver.showingResult = false;
				state.currentOperator = action.type;
			}
			else {
				operatorCheck(state, DivWithRemCommand);
				state.historyItem += " % ";
				state.currentValue = "";
				state.currentOperator = action.type;
			}
		},
		multiply(state, action) {
			if (state.currentOperator === "home/equal") {
				state.historyItem += " * ";
				state.currentResult = "";
				state.currentValue = "";
				state.receiver.showingResult = false;
				state.currentOperator = action.type;
			}
			else {
				operatorCheck(state, MultiplyCommand);
				state.historyItem += " * ";
				state.currentValue = "";
				state.currentOperator = action.type;
			}
		},
		equal(state, action) {
			if (state.currentOperator === "home/plus")
				state.receiver.addCommand(new PlusCommand(+state.currentValue));
			if (state.currentOperator === "home/minus")
				state.receiver.addCommand(new MinusCommand(+state.currentValue));
			if (state.currentOperator === "home/divide")
				state.receiver.addCommand(new DivideCommand(+state.currentValue));
			if (state.currentOperator === "home/divWithRemainder")
				state.receiver.addCommand(new DivWithRemCommand(+state.currentValue));
			if (state.currentOperator === "home/multiply")
				state.receiver.addCommand(new MultiplyCommand(+state.currentValue));

			state.receiver.showingResult = true;
			state.currentOperator = action.type;
			state.currentResult = state.receiver.execute();

			state.historyItem += " = " + state.currentResult;
			const obj = { id: state.history.length, expression: state.historyItem };
			state.history.push(obj);
			state.historyItem = state.currentResult;
		},
		leftBracket(state, action) { },
		rightBracket(state, action) { },
		clearExpression(state, action) {
			state.currentValue = "";
			state.nowOperator = "";
			state.currentResult = "";
			state.historyItem = "";
		},
		clearAll(state, action) {
			state.currentValue = "";
			state.nowOperator = "";
			state.currentResult = "";
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