import { STATUS } from "../Status";

const saveMoneyStep = {
    id: "Retirement-0", 
    name: "Save Money", 
    status: STATUS.in_progress, 
    substeps: [],
    level: 0,
    expanded: false
}

const getOldStep = {
    id: "Retirement-1", 
    name: "Get Old", 
    status: STATUS.in_progress, 
    substeps: [],
    level: 0,
    expanded: false
}

export const retirementPlanTimeline = {
    name: "Retirement Plan", 
    status: STATUS.in_progress, 
    steps: [
        saveMoneyStep,
        getOldStep,
    ],
}