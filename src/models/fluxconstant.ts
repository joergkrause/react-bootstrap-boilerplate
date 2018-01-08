
export class FluxConstant {

    constructor(public name: string) {

    }

    public toString(): string {
        return this.name;
    }

    public static set(list: Array<string>): Array<FluxConstant> {

        let constants = new Array<FluxConstant>();

        list.forEach((item) => {
            constants.push(new FluxConstant(item));
        });

        return constants;

    }

}