import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../Status"
import { houseHuntingTimeline } from "./Timeline-HouseHunting";
import { fillerTimeline } from "./Timeline-Filler";

export const timelinesSlice = createSlice({
  name: 'timelines',
  initialState: {
     "House Hunting": houseHuntingTimeline,
     "Filler Timeline": fillerTimeline,
     'id': 0
  },
  reducers: {
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
        if (step != null) {
          step.status = (step.status == STATUS.in_progress) ? STATUS.done : STATUS.in_progress
        }
      },

      // Creates a new empty timeline
      newTimeline: (state, action) => {
        timelineName = 'NewTimeline'
        state[timelineName] = {
          name: timelineName,
          status: STATUS.in_progress,
          steps: []
        }
      },

      // Changes name of astep
      changeStepName: (state, action) => {
        timeline = state[action.payload.timelineName]
        step = findStep(timeline.steps, action.payload.id)
        step.name = action.payload.newName
      },

      changeTimelineName: (state, action) => {
        timeline = state[action.payload.timelineName]
        timeline.name = action.payload.newName
        state[action.payload.newName] = timeline
        delete state[action.payload.timelineName]
        console.log('HELP')
        console.log(state)
      },

      // Adds step to timeline's list of steps
      addStep: (state, action) => {
        state[action.payload.timelineName].steps.push(
          {
            id: "NewStep" + state.id++, 
            name: '', 
            status: STATUS.in_progress, 
            substeps: [],
            expanded: false
          }
        )
      },

      deleteStep: (state, action) => {
        steps = state[action.payload.timelineName].steps
        step = findStep(steps, action.payload.id)
        steps.splice(steps.indexOf(step), 1)
      }
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

export const { addStep, expand, toggleStatus, changeStepName, newTimeline, deleteStep, changeTimelineName } = timelinesSlice.actions
export default timelinesSlice.reducer