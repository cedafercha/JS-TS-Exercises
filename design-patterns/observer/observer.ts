import { Subject } from "./Subject";

export class Observer<T> {
    private fn: (value: T) => void;

    constructor(fn: (value: T) => void) {
        this.fn = fn;
    }

    refresh(value: T) {
        this.fn(value);
    }
}

const observer = new Observer((value: number) => console.log('-- Observer 1: ', value));
const observer2 = new Observer((value: number) => console.log('** Observer 2: ', value));

const subject = new Subject<number>();

subject.subscribe(observer);
subject.subscribe(observer2);
subject.notify(1);

subject.unsubscribe(observer2);
subject.notify(2);

subject.unsubscribeAll();
subject.notify(3);