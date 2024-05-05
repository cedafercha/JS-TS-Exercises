import { IDecorator } from "../interfaces/IDecorator";

export abstract class LibraryDecorator implements IDecorator {
    protected libraryElement: IDecorator;

    constructor(libraryElement: IDecorator) {
        this.libraryElement = libraryElement;
    }

    public getDetail(): string {
        return this.libraryElement.getDetail();
    }
}