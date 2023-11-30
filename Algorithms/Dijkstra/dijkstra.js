/**
 * Pre-requite:
 *  1. Weighted Graph
 *  2. Priority Queue (Easy to take smaller elements while doing Dijkstra's)
 */

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        this.values.push({value, priority});
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort(){
        this.values.sort((a, b) => a.priority - b.priority);
    }
}


class WeightedGraph {
    constructor() {
        this.adjacentList = {};
    }

    addVertex(vertex) {
        if(this.adjacentList[vertex]) return 'Vertex already present';

        this.adjacentList[vertex] = [];
    }

    addEdges(vertex1, vertex2, weight) {
        this.adjacentList[vertex1].push({node: vertex2, weight});
        this.adjacentList[vertex2].push({node: vertex1, weight});
    }

    dijkstra(startNode, endNode) {
        if(startNode === endNode) return 0;

        let priorityQueue = new PriorityQueue();
        let distances = {};
        let previous = {};
        let visited = [];

        for(let vertex in this.adjacentList) {
            if(vertex === startNode) {
                priorityQueue.enqueue(vertex, 0)
                distances[vertex] = 0;
            } else {
                priorityQueue.enqueue(vertex, Infinity)
                distances[vertex] = Infinity;
            }
            
            previous[vertex] = null;
        }

        while(priorityQueue.values.length) {
            let currentNodeToStart = priorityQueue.dequeue().value;

            // If dequeued vertex is smaller then we are done. 
            // Because we always push the node in priority queue in that way.

            if(currentNodeToStart === endNode) {
                // All the calculations are done here. We can calculate the path and
                // distance to get from startNode to endNode in this place

                let path = [endNode];

                while(path.at(-1) !== startNode) {
                    let lastNode = path.at(-1);
                    path.push(previous[lastNode]);
                }

                return {
                    path: path.reverse(),
                    distances: distances[endNode]
                }; 
            }

            if(currentNodeToStart || distances[currentNodeToStart] !== Infinity) {
                for(let indexForNeighbor in this.adjacentList[currentNodeToStart]) {
                    let nextNode = this.adjacentList[currentNodeToStart][indexForNeighbor];
                    let newDistances = distances[currentNodeToStart] + nextNode.weight;
                    let neighborNode = nextNode.node;

                    if(newDistances < distances[neighborNode]) {
                        distances[nextNode.node] = newDistances;
                        previous[neighborNode] = currentNodeToStart;
                        priorityQueue.enqueue(neighborNode, newDistances);
                    }
                }
            }

            visited.push(currentNodeToStart);
        }
    }
}
/**
 * Create a weighted Graph for Dijkstra's
 */

let weightedGraph = new WeightedGraph();

weightedGraph.addVertex('A');
weightedGraph.addVertex('B');
weightedGraph.addVertex('C');
weightedGraph.addVertex('D');
weightedGraph.addVertex('E');
weightedGraph.addVertex('F');

weightedGraph.addEdges('A', 'B', 4);
weightedGraph.addEdges('A', 'C', 2);
weightedGraph.addEdges('B', 'E', 3);
weightedGraph.addEdges('C', 'D', 2);
weightedGraph.addEdges('C', 'F', 4);
weightedGraph.addEdges('D', 'E', 3);
weightedGraph.addEdges('D', 'F', 1);
weightedGraph.addEdges('E', 'F', 1);


let shortestPath = weightedGraph.dijkstra('A', 'E');
console.log(shortestPath);