import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../Status";
import { Timeline } from "../timelines/Timeline";

export const timelinesSlice = createSlice({
  name: 'timelines',
  initialState: {
     "House Hunting": new Timeline("House Hunting", STATUS.in_progress, [])
  },
  reducers: {
      addStep: (state, action) => {
        state[action.payload.timelineName].steps.push(action.payload.step)
          console.log(state)
      }
  }
})

export const { addStep } = timelinesSlice.actions
export default timelinesSlice.reducer