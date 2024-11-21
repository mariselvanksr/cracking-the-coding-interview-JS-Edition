function canFinishCourse(numOfCourse, preRequisites) {
    let adjustantList = {};
    let visited = new Set();

    for(let [a, b] of preRequisites) {
        if(!adjustantList[a]) {
            adjustantList[a] = [b]
        } else {
            adjustantList[a].push(b)
        }
    }

    function dfs(curr) {
        if(visited.has(curr)) return false;

        if(adjustantList.length === 0) return true;

        visited.add(curr)

        if(adjustantList[curr]) {
            for(let neighbour of adjustantList[curr]) {
                if(!dfs(neighbour)) {
                    return false;
                }
            }
        }

        visited.delete(curr);
        adjustantList[curr] = [];

        return true;
    }

    for(let key in adjustantList) {
        if(!dfs(key)) {
            return false;
        }
    }

    return true;
}

console.log(canFinishCourse(3, [[0,1],[1,2]]))