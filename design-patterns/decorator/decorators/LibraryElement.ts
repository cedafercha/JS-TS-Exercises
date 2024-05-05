import { IDecorator } from "../interfaces/IDecorator";

export class LibraryElement implements IDecorator {
    protected type: string;

    constructor(type: string) {
        this.type = type;
    }

    public getDetail(): string {
        return this.type;
    }
}