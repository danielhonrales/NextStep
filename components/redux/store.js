import { combineReducers, configureStore, createReducer, createSlice } from "@reduxjs/toolkit";
import timelinesReducer from "./timelinesSlice";

export default configureStore({
    reducer: {
        timelines : timelinesReducer
    }
});