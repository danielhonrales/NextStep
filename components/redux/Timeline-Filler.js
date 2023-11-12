import { STATUS } from "../Status";

const fillerStep = {
    id: "Filler-0", 
    name: "Filler Step", 
    status: STATUS.in_progress, 
    substeps: [
        {
            id: "Filler-0-0",
            name: "Filler SubStep",
            status: STATUS.in_progress,
            substeps: []
        },
        {
            id: "Filler-0-1",
            name: "Filler Substep",
            status: STATUS.in_progress,
            substeps: []
        },
    ],
    expanded: false
}

export const fillerTimeline = {
    name: "Filler Timeline", 
    status: STATUS.in_progress, 
    steps: [
        fillerStep,
    ],
}