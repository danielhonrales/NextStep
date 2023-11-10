import { createAction } from "@reduxjs/toolkit";

export const ADD_STEP = "ADD_STEP";

let stepId = 0;

export const addStep = createAction(ADD_STEP)