function countComponents(n, edges) {
    let count = 0;
    let graph = {};
    let visited = new Set();

    for (let index = 0; index < n; index++) {
        graph[index] = [];
    }

    for(let [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    for(let key in graph) {
        key = parseInt(key);

        count += dfs(key);
    }
    
    function dfs(key) {
        if(visited.has(key)) return 0;

        visited.add(key);

        for(let node of graph[key]){
            dfs(node);
        }

        return 1;
    }

    return count;
}

console.log(countComponents(5, [[0,1], [1,2], [3,4]]));