import { IDecorator } from "../interfaces/IDecorator";
import { LibraryDecorator } from "./LibraryDecorator";

export class BookDecorator extends LibraryDecorator {
    private name: string;
    private author: string;

    constructor(libraryElement: IDecorator, name: string, author: string) {
        super(libraryElement);
        this.name = name;
        this.author = author;
    }

    public getDetail(): string {
        return `Type: ${super.getDetail()} -> Name: ${this.name}, author: ${this.author}.`;
    }
}