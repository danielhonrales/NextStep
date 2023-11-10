import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { stepReducer } from "./stepReducer"

export default configureStore({
    reducer: stepReducer
});