import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../Status"
import { houseHuntingTimeline } from "./Timeline-HouseHunting";
import { fillerTimeline } from "./Timeline-Filler";
import { weddingPlanningTimeline } from "./Timeline-WeddingPlanning";
import { retirementPlanTimeline } from "./Timeline-RetirementPlan";
import { carTimeline } from "./Timeline-BuyingCar";

export const timelinesSlice = createSlice({
  name: 'timelines',
  initialState: {
     "House Hunting": houseHuntingTimeline,
     "Wedding Planning": weddingPlanningTimeline,
     "Retirement Plan": retirementPlanTimeline,
     "Buying a Car": carTimeline,
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

        // Toggle step's status
        toggledStep = findStep(timeline.steps, action.payload.id)
        if (toggledStep != null) {
          toggledStep.status = (toggledStep.status == STATUS.in_progress) ? STATUS.done : STATUS.in_progress
        }

        toggledStepStatus = toggledStep.status
        toggledStepLevel = toggledStep.level

        // Determine if any steps should autocomplete
        timeline.steps.forEach(step => {
          if (step.substeps.length > 0) {

            // Parent step was toggled
            if (toggledStepLevel == 0) {
              // Match substeps to parent's status>
              step.substeps.forEach(substep => {
                substep.status = step.status
              })

            // Substep was toggled
            } else {
              allSubstepsDone = true
              step.substeps.forEach(substep => {
                allSubstepsDone = allSubstepsDone && (substep.status == STATUS.done)
              })

              // Parent step should autocomplete if all substeps complete
              if (step.status == STATUS.in_progress) {
                
                step.status = allSubstepsDone ? STATUS.done : STATUS.in_progress

              // If parent step done, consider children
              } else {
                // If substep
                if (!allSubstepsDone) {
                  step.status = STATUS.in_progress
                }
              }
            }
          }
        })
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
        console.log('Changing step name')
        console.log(timeline)
        step = findStep(timeline.steps, action.payload.id)
        console.log(step)
        step.name = action.payload.newName
      },

      changeTimelineName: (state, action) => {
        timeline = state[action.payload.timelineName]
        timeline.name = action.payload.newName
        state[action.payload.newName] = timeline
        delete state[action.payload.timelineName]
        //console.log(state)
      },

      // Adds step to timeline's list of steps
      addStep: (state, action) => {
        state[action.payload.timelineName].steps.push(
          {
            id: "NewStep" + state.id++, 
            name: '', 
            status: STATUS.in_progress, 
            substeps: [],
            level: 0,
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