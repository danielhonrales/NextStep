import { STATUS } from "../Status";

const determinePreferencesStep = {
    id: "HouseHunting-0", 
    name: "Determine Preferences", 
    status: STATUS.in_progress, 
    substeps: [
        {
            id: "HouseHunting-0-0",
            name: "Set Budget",
            status: STATUS.in_progress,
            substeps: []
        },
        {
            id: "HouseHunting-0-1",
            name: "Choose Building Material",
            status: STATUS.in_progress,
            substeps: []
        },
    ],
    expanded: false
}

const findCandidatesStep = {
    id: "HouseHunting-1", 
    name: "Find Candidates", 
    status: STATUS.in_progress, 
    substeps: [],
    expanded: false
}

const securePropertyStep = {
    id: "HouseHunting-2", 
    name: "Secure Property", 
    status: STATUS.in_progress, 
    substeps: [
        {
            id: "HouseHunting-2-0",
            name: "Speak with a Real Estate Agent",
            status: STATUS.in_progress,
            substeps: []
        },
    ],
    expanded: false
}

export const houseHuntingTimeline = {
    name: "House Hunting", 
    status: STATUS.in_progress, 
    steps: [
        determinePreferencesStep,
        findCandidatesStep,
        securePropertyStep
    ],
}