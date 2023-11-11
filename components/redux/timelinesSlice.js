import { createSlice } from "@reduxjs/toolkit";
import { houseHuntingTimeline } from "./Timeline-HouseHunting";

export const timelinesSlice = createSlice({
  name: 'timelines',
  initialState: {
     "House Hunting": houseHuntingTimeline
  },
  reducers: {
      // Adds step to timeline's list of steps
      addStep: (state, action) => {
        state[action.payload.timelineName].steps.push(action.payload.step)
          console.log(state)
      },

      // Toggles expanded state of step in a timeline
      expand: (state, action) => {
        timeline = state[action.payload.timelineName]
        timeline.steps.forEach(step => {
          if (step.name == action.payload.name) {
            step.expanded = !step.expanded
          }
        });
      }
  }
})

export const { addStep, expand } = timelinesSlice.actions
export default timelinesSlice.reducer