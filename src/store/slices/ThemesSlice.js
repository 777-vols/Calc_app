import { createSlice } from "@reduxjs/toolkit";

const themesSlice = createSlice({
	name: "themes",
	initialState: {
		colors: {
			light: {
				background: "white",
				color: "black",
				buttonBackground: "#f1f0f0"
			},
			dark: {
				background: "rgb(94 94 94)",
				color: "#f1f1f1",
				buttonBackground: "rgb(52, 52, 52)"
			},
			colored: {
				background: "rgb(174 140 191)",
				color: "rgb(46 0 67)",
				buttonBackground: "#d8bde5"
			}
		},
		currentTheme: {
			background: "white",
			color: "black",
			buttonBackground: "#f1f0f0"
		}
	},
	reducers: {
		toggleTheme(state, action) {
			state.currentTheme = state.colors[action.payload.newTheme];
		}
	}
});

export const { toggleTheme } = themesSlice.actions;
export default themesSlice.reducer;