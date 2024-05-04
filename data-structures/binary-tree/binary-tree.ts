class BinaryTree<T> {
    public value: T;
    public left: BinaryTree<T> | null;
    public right: BinaryTree<T> | null;

    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const tree = new BinaryTree<number>(1);
tree.left = new BinaryTree(2);
tree.right = new BinaryTree(3);

console.log(tree);
console.log('Current value: ', tree.value);
console.log('Left value: ', tree.left?.value);
console.log('Right value: ', tree.right?.value);