import { BookDecorator } from "./decorators/BookDecorator";
import { BookSynopsisDecorator } from "./decorators/BookSynopsisDecorator";
import { EmployeeDecorator } from "./decorators/EmployeeDecorator";
import { LibraryElement } from "./decorators/LibraryElement";

const libraryElementBook = new LibraryElement("Book");
const harryPotterBook = new BookDecorator(libraryElementBook, "Harry Potter", "J. K. Rowling");

const harryPotterSynopsis = new BookSynopsisDecorator(harryPotterBook, "Harry Potter, an 11-year-old boy who discovers he is the son of famous wizards and will attend Hogwarts School of Witchcraft and Wizardry. Harry learns of an entire society of wizards and witches.");

const libraryElementEmployee = new LibraryElement("Employee");
const employee = new EmployeeDecorator(libraryElementEmployee, "Jhoe Doe", "Librarian");

console.log(harryPotterBook.getDetail());

console.log(' ------------------------------ ');
console.log(harryPotterSynopsis.getDetail());

console.log(' ------------------------------ ');
console.log(employee.getDetail());

