import { STATUS } from "../Status";

const specificationsStep = {
    id: "Car-0", 
    name: "Specifications", 
    status: STATUS.done, 
    substeps: [
        {
            id: "Car-1-0",
            name: "Make",
            status: STATUS.done,
            substeps: [],
            level: 1,
        },
        {
            id: "Car-1-1",
            name: "Model",
            status: STATUS.done,
            substeps: [],
            level: 1,
        },
        {
            id: "Car-1-2",
            name: "Year",
            status: STATUS.done,
            substeps: [],
            level: 1,
        },
    ],
    level: 0,
    expanded: false
}

const findDealershipsStep = {
    id: "Car-1", 
    name: "Find Dealerships", 
    status: STATUS.done, 
    substeps: [],
    level: 0,
    expanded: false
}

export const carTimeline = {
    name: "Buying a Car", 
    status: STATUS.done, 
    steps: [
        specificationsStep,
        findDealershipsStep
    ],
}