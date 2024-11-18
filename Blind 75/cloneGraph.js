class Node {
    constructor(val = 0, neighbours = []) {
        this.val = val;
        this.neighbours = neighbours;
    }
}

function cloneGraph(node) {
    let visited = {};

    function dfs(node) {
        if(!node) return node;
        if(!!visited[node.val]) return visited[node.val];

        let root = new Node(node.val);
        visited[root.val] = root;
        
        for(let neighbour of node.neighbours) {
            root.neighbours.push(dfs(neighbour));
        }

        return root;
    }

    return dfs(node);
}

const node_1 = new Node(1);
const node_2 = new Node(2);
const node_3 = new Node(3);
const node_4 = new Node(4);

node_1.neighbours = [node_2, node_4];
node_2.neighbours = [node_1, node_3];
node_3.neighbours = [node_2, node_4];
node_4.neighbours = [node_1, node_3];

// to check if cloned change the value of returned root and compare with node_1 val
const cloned = cloneGraph(node_1);
console.log(cloned);

console.log('before root value change', cloned.val === node_1.val);

cloned.val = 10;

console.log('after root value change', cloned.val === node_1.val);


