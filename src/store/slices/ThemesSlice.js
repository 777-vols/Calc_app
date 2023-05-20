import colors from "@constants/themesColors";
import { createSlice } from "@reduxjs/toolkit";

const themesSlice = createSlice({
	name: "themes",
	initialState: {
		themeName: "light",
		currentTheme: {
			background: "white",
			color: "black",
			buttonBackground: "#f1f0f0"
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