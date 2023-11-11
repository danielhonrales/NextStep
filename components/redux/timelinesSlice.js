import { createSlice } from "@reduxjs/toolkit";
import { houseHuntingTimeline } from "./Timeline-HouseHunting";

export const timelinesSlice = createSlice({
  name: 'timelines',
  initialState: {
     "House Hunting": houseHuntingTimeline
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