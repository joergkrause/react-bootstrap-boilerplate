export enum SessionType {

    ReactJSX,
    ReactTSX,
    Angular1,
    Angular2,
    Angular4,
    Vue

}

export class SessionViewModel {

    constructor(public id: number, public name: string, public type: SessionType, public visible: boolean, public nonPublic: boolean){
    }

}