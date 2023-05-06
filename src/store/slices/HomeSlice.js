import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
	name: "home",
	initialState: {
		currentValue: ""
	},
	reducers: {
		inputValue(state, action) {
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
		plus() { },
		minus() { },
		divide() { },
		multiply() { },
		equal() { },
		clearValue() { },
		clearAll() { },
		leftBracket() { },
		rightBracket() { },
		divWithRemainder() { },
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