import { IDecorator } from "../interfaces/IDecorator";
import { LibraryDecorator } from "./LibraryDecorator";

export class EmployeeDecorator extends LibraryDecorator {
    private name: string;
    private role: string;

    constructor(libraryElement: IDecorator, name: string, role: string) {
        super(libraryElement);
        this.name = name;
        this.role = role;
    }

    public getDetail(): string {
        return `Type: ${super.getDetail()} -> Name: ${this.name}. Role: ${this.role}.`;
    }
}