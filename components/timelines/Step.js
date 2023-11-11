export class Step {
    constructor(id, name, status, substeps, extraResources) {
        this.id = id;
        this.name = name;
        this.status = status;
        this.substeps = substeps;
        this.extraResources = extraResources;
    }
}