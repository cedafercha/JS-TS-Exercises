import { IDecorator } from "../interfaces/IDecorator";
import { LibraryDecorator } from "./LibraryDecorator";

export class BookSynopsisDecorator extends LibraryDecorator {
    private synopsis: string;

    constructor(libraryElement: IDecorator, synopsis: string) {
        super(libraryElement);
        this.synopsis = synopsis;
    }

    public getDetail(): string {
        return `${super.getDetail()} ${this.synopsis}`;
    }
}