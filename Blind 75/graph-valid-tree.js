function isValidGraph(n, edges) {
    let adjustantList = [];

    for(let i = 0; i < n; i++) {
        adjustantList[i] = [];
    }

    for(let [a, b] of edges) {
        adjustantList[a].push(b);
        adjustantList[b].push(a);
    }

    const visited = new Set();

    function checkCycle(node, parent) {
        visited.add(node);
        let neighbours = adjustantList[node];

        for(let neighbour of neighbours) {
            if(visited.has(neighbour)) {
                if(neighbour !== parent) {
                    return true;
                }
            } else {
                if(checkCycle(neighbour, node)) {
                    return true;
                }
            }
        }

        return false;
    }

    if(checkCycle(0, -1)) {
        return false;
    }

    for(let i = 0; i < n-1; i++) {
        if(!visited.has(i)) {
            return false;
        }
    }

    return true;
}

console.log(isValidGraph(5, [[0,1], [0,2], [0,3], [1,4]]));