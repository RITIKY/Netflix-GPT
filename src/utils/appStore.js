import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import browseReducer from "./browseSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer,
        browse: browseReducer,
        config: configReducer,
    },
});

export default appStore;

