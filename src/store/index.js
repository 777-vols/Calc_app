import { configureStore } from "@reduxjs/toolkit";
import themesReducer from "./slices/ThemesSlice";
import homeReducer from "./slices/HomeSlice";

const store = configureStore({
	reducer: {
		themes: themesReducer,
		home: homeReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
});

export default store;