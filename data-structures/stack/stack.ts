// LIFO -> Last in, first out

class Stack<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    push(item: T) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);

console.log('Stack peek: ', stack.peek());
console.log('Stack pop: ', stack.pop());
console.log('Stack peek after pop: ', stack.peek());