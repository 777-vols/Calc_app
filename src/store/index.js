import { configureStore } from "@reduxjs/toolkit";

import homeReducer from "./slices/HomeSlice";
import themesReducer from "./slices/ThemesSlice";

const store = configureStore({
	reducer: {
		themes: themesReducer,
		home: homeReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
});

export default store;