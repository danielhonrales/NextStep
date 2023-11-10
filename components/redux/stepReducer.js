import { createReducer } from "@reduxjs/toolkit";
import { STATUS } from "../Status";
import { Timeline } from "../timelines/Timeline";
import { addStep } from "./action";

const initialState = {
  timelines: {"House Hunting": new Timeline("House Hunting", STATUS.in_progress, [])}
};

export const stepReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(addStep, (state, action) => {})
})