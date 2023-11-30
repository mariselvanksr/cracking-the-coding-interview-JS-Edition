/**
 * There are few implementations we have for graph
 * 1. Undirected non-weighted graph
 * 2. Undirected weighted graph (used in maps)
 * 3. Directed non-weighted graph (used in maps)
 * 4. Directed weighted graph (used in instagram followers mapping)
 */

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(this.adjacencyList[vertex]) return 'Vertex Already Added';
        this.adjacencyList[vertex] = [];
    }

    addEdges(vertex1, vertex2) {
        if(!this.adjacencyList[vertex1]) 
            this.addVertex(vertex1);
        
        if(!this.adjacencyList[vertex2]) 
            this.addVertex(vertex2);

        if(!this.adjacencyList[vertex1].includes(vertex2)) {
            this.adjacencyList[vertex1].push(vertex2);
        }

        if(!this.adjacencyList[vertex2].includes(vertex1)) {
            this.adjacencyList[vertex1].push(vertex1);
        }
    }

    removeEdge(vertex1, vertex2) {
        if(this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2);
        }

        if(this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1);
        }
    }

    removeVertex(vertex) {
        if(!this.adjacencyList[vertex])
            return 'Vertex already deleted';

        this.adjacencyList[vertex].forEach(edge => {
            if(!this.adjacencyList[edge]) return;

            this.adjacencyList[edge] = this.adjacencyList[edge].filter(val => val != vertex);
        });

        delete this.adjacencyList[vertex];
    }

    DFS(vertex, visitedVertexList = {}) {
        if(!this.adjacencyList[vertex] || !this.adjacencyList[vertex]?.length)
            return;

        visitedVertexList[vertex] = true;
        this.adjacencyList[vertex].forEach(otherVertex => {
            if(!visitedVertexList[otherVertex]) {
                this.DFS(otherVertex, visitedVertexList);
            }
        });

        return visitedVertexList;
    }

    DFS_With_Stack(startVertex) {
        let stack = [];
        // Add all visited elements
        let visited = {};

        stack.push(startVertex);

        while(stack.length) {
            let vertex = stack.pop();

            if(!visited[vertex]) {
                visited[vertex] = true;

                this.adjacencyList[vertex].forEach(vertexVal => stack.push(vertexVal));
            }
        }

        return Object.keys(visited);
    }

    BFS_With_Queue(startVertex) {
        let queue = [];
        // Add all visited elements
        let visited = {};

        queue.push(startVertex);

        while(queue.length) {
            let vertex = queue.shift();

            if(!visited[vertex]) {
                visited[vertex] = true;

                // If you want to go right to left just reverse the vertex array
                // this.adjacencyList[vertex].slice().reverse().forEach...
                this.adjacencyList[vertex].forEach(vertexVal => queue.push(vertexVal));
            }
        }

        return Object.keys(visited);
    }
}