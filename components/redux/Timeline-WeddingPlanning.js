import { STATUS } from "../Status";

const pickVenueStep = {
    id: "Wedding-0", 
    name: "Pick Venue", 
    status: STATUS.done, 
    substeps: [],
    level: 0,
    expanded: false
}

const planEventsStep = {
    id: "Wedding-1", 
    name: "Plan Events", 
    status: STATUS.in_progress, 
    substeps: [
        {
            id: "Wedding-1-0",
            name: "Schedule",
            status: STATUS.done,
            substeps: [],
            level: 1,
        },
        {
            id: "Wedding-1-1",
            name: "Budget",
            status: STATUS.in_progress,
            substeps: [],
            level: 1,
        },
    ],
    level: 0,
    expanded: false
}

const inviteGuestsStep = {
    id: "Wedding-2", 
    name: "Invite Guests", 
    status: STATUS.in_progress, 
    substeps: [],
    level: 0,
    expanded: false
}

export const weddingPlanningTimeline = {
    name: "Wedding Planning", 
    status: STATUS.in_progress, 
    steps: [
        pickVenueStep,
        planEventsStep,
        inviteGuestsStep
    ],
}