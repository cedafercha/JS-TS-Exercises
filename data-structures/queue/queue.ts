// FIFO -> First in, first out

class Queue<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    enqueue(item: T) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }
}

const queue = new Queue<Function>();

queue.enqueue(() => console.log('Do some task first...'));
queue.enqueue(() => console.log('Then do anything else...'));

queue.dequeue()!();
queue.dequeue()!();