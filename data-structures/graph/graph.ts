class Graph<T> {
    public nodes: T[];
    public adjList: { [key: string]: T[] };
    
    constructor() {
        this.nodes = [];
        this.adjList = {};
    }

    public addNode(node: T): void {
        this.nodes.push(node);
        this.adjList[node as string] = [];
    }

    public addEdge(node1: T, node2: T): void {
        const firstNode = this.adjList[node1 as string];
        const secondNode = this.adjList[node2 as string];

        if(firstNode && secondNode) {
            firstNode.push(node2);
            secondNode.push(node1);
        }
    }

    public removeEdge(node1: T, node2: T): void {
        const indexNode1 = this.adjList[node2 as string]?.indexOf(node1) ?? null;
        const indexNode2 = this.adjList[node1 as string]?.indexOf(node2) ?? null;

        if (indexNode1 !== null && indexNode2 !== null) {
            this.adjList[node1 as string].splice(indexNode2, 1);
            this.adjList[node2 as string].splice(indexNode1, 1);
        }
    }
}

const graph = new Graph<number>();
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addNode(5);

graph.addEdge(1, 3);
graph.addEdge(1, 5);
graph.addEdge(2, 4);
graph.addEdge(3, 5);
graph.addEdge(5, 2);

console.log('Graph: ', graph);

graph.removeEdge(5, 1);
console.log('Graph after removeEdge: ', graph);
