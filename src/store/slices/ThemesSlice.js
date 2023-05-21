import colors from "@constants/themesColors";
import { createSlice } from "@reduxjs/toolkit";

const themesSlice = createSlice({
	name: "themes",
	initialState: {
		themeName: "light",
		currentTheme: {
			background: "rgb(255, 255, 255)",
			color: "rgb(0, 0, 0)",
			buttonBackground: "rgb(241, 240, 240)"
		}
	},
	reducers: {
		toggleTheme(state, action) {
			state.themeName = action.payload.newTheme;
			state.currentTheme = colors[action.payload.newTheme];
		}
	}
});

export const { toggleTheme } = themesSlice.actions;
export default themesSlice.reducer;