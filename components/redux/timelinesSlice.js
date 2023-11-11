import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../Status"
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
      },

      // Toggles expanded state of step in a timeline
      expand: (state, action) => {
        timeline = state[action.payload.timelineName]
        step = findStep(timeline.steps, action.payload.id)
        if (step != null) {
          step.expanded = !step.expanded
        }
      },

      // Toggles status of step
      toggleStatus: (state, action) => {
        timeline = state[action.payload.timelineName]
        step = findStep(timeline.steps, action.payload.id)
        console.log('found')
        console.log(step)
        if (step != null) {
          step.status = (step.status == STATUS.in_progress) ? STATUS.done : STATUS.in_progress
        }
      },
  }
})

function findStep(steps, id) {
  foundStep = null
  steps.forEach(step => {
    if (foundStep == null) {
      if (step.id == id) {
        foundStep = step
      } else if (step.substeps.length != 0) {
        foundStep = findStep(step.substeps, id)
      }
    }
  })

  return foundStep
}

export const { addStep, expand, toggleStatus } = timelinesSlice.actions
export default timelinesSlice.reducer