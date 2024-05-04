class LinkedListNode<T> {
    public value: T;
    public prev: LinkedListNode<T> | null;
    public next: LinkedListNode<T> | null;

    constructor(
        value: T,
        prev: LinkedListNode<T> | null = null,
        next: LinkedListNode<T> | null = null
    ) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class DoubleLinkedList<T> {
    private head: LinkedListNode<T> | null;
    private tail: LinkedListNode<T> | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    public append(value: T) {
        const newNode = new LinkedListNode(value);

        if(!this.head) {
            this.head = newNode;
        } else {
            this.tail!.next = newNode;
            newNode.prev = this.tail;
        }

        this.tail = newNode;
    }

    public traverse(callback: Function) {
        let currentNode = this.head;

        while (currentNode !== null) {
            callback(currentNode);

            currentNode = currentNode.next;
        }
    }
}

const list = new DoubleLinkedList<number>();
list.append(1);
list.append(2);
list.append(3);

const printNode = <T>(node: LinkedListNode<T>) => console.log(`Value: ${node.value} / Prev: ${node.prev?.value} / Next: ${node.next?.value}`);
list.traverse(printNode);