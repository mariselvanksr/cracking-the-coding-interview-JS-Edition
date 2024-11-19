function combinationSum(candidate, target) {
    const results = [];

    function dfs(index, currentVal, arr) {
        if(currentVal < 0) return;

        if(currentVal === 0) {
            results.push([...arr])
        }

        for(let i = index; i < candidate.length; i++) {
            arr.push(candidate[i]);
            dfs(i, currentVal-candidate[i], arr);
            arr.pop();
        }
    }

    dfs(0, target, [])

    return results;
}

console.log(combinationSum([2,3,6,7], 7));