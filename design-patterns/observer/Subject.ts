import { Observer } from './observer';

export class Subject<T> {
    private observers: Observer<T>[];

    constructor() {
        this.observers = [];
    }

    public subscribe(observer: Observer<T>): void {
        this.observers.push(observer);
    }

    public unsubscribe(observer: Observer<T>): void {
        this.observers = this.observers.filter(obs => obs != observer);
    }

    public unsubscribeAll(): void {
        this.observers = [];
    }

    public notify(value: T): void {
        this.observers.forEach(e => {
            e.refresh(value);
        });
    }
}