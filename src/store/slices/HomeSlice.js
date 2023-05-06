import { createSlice } from "@reduxjs/toolkit";
import { Receiver } from "@utils/Receiver";
import { FirstValue } from "@utils/FirstValue";
import { PlusCommand } from "@utils/PlusCommand";
import { MinusCommand } from "@utils/MinusCommand";
import { MultiplyCommand } from "@utils/MultiplyCommand";
import { DivideCommand } from "@utils/DivideCommand";

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
					state.expression += action.payload;
				}
			} else {
				state.currentValue += action.payload;
				state.expression += action.payload;
			}
		},
		plus(state, action) {
			let command;
			if (state.currentOperator === "home/equal") {
				state.historyItem += " + ";
				state.currentResult = "";
				state.currentValue = "";
				state.currentOperator = action.type;
			}
			else {
				if (state.currentOperator === "") {
					command = new FirstValue(+state.currentValue);
				}
				else {
					command = new PlusCommand(+state.currentValue);
				}
				state.receiver.addCommand(command);

				state.historyItem += state.currentValue + " + ";
				state.currentValue = "";
				state.currentOperator = action.type;
			}
		},
		minus(state, action) {
			let command;
			if (state.currentOperator === "home/equal") {
				state.historyItem += " - ";
				state.currentResult = "";
				state.currentValue = "";
				state.currentOperator = action.type;
			}
			else {
				if (state.currentOperator === "") {
					command = new FirstValue(+state.currentValue);
				}
				else {
					command = new MinusCommand(+state.currentValue);
				}
				state.receiver.addCommand(command);

				state.historyItem += state.currentValue + " - ";
				state.currentValue = "";
				state.currentOperator = action.type;
			}
		},
		divide(state, action) {
			let command;
			if (state.currentOperator === "home/equal") {
				state.historyItem += " / ";
				state.currentResult = "";
				state.currentValue = "";
				state.currentOperator = action.type;
			}
			else {
				if (state.currentOperator === "") {
					command = new FirstValue(+state.currentValue);
				}
				else {
					command = new DivideCommand(+state.currentValue);
				}
				state.receiver.addCommand(command);

				state.historyItem += state.currentValue + " / ";
				state.currentValue = "";
				state.currentOperator = action.type;
			}
		},
		multiply(state, action) {
			let command;
			if (state.currentOperator === "home/equal") {
				state.historyItem += " * ";
				state.currentResult = "";
				state.currentValue = "";
				state.currentOperator = action.type;
			}
			else {
				if (state.currentOperator === "") {
					command = new FirstValue(+state.currentValue);
				}
				else {
					command = new MultiplyCommand(+state.currentValue);
				}
				state.receiver.addCommand(command);

				state.historyItem += state.currentValue + " * ";
				state.currentValue = "";
				state.currentOperator = action.type;
			}
		},
		equal(state, action) {
			// console.log(action);
			if (state.currentOperator === "home/plus")
				state.receiver.addCommand(new PlusCommand(+state.currentValue));
			if (state.currentOperator === "home/minus")
				state.receiver.addCommand(new MinusCommand(+state.currentValue));
			if (state.currentOperator === "home/divide")
				state.receiver.addCommand(new DivideCommand(+state.currentValue));
			if (state.currentOperator === "home/multiply")
				state.receiver.addCommand(new MultiplyCommand(+state.currentValue));
			state.receiver.showingResult = true;
			state.currentOperator = action.type;
			state.currentResult = state.receiver.execute();

			state.historyItem += state.currentValue + " = " + state.currentResult;
			const obj = { id: state.history.length, expression: state.historyItem };
			state.history.push(obj);
			state.historyItem = state.currentResult;
		},
		clearValue(state, action) { },
		clearAll(state, action) { },
		leftBracket(state, action) { },
		rightBracket(state, action) { },
		divWithRemainder(state, action) { },
	}
});

export const {
	inputValue,
	plus,
	minus,
	divide,
	multiply,
	equal,
	clearValue,
	clearAll,
	leftBracket,
	rightBracket,
	divWithRemainder
} = homeSlice.actions;

export default homeSlice.reducer;