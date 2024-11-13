function maxProfixFromHouse(amounts) {
    if(!amounts.length) return 0;

    let dp = Array(amounts.length);
    dp[0] = amounts[0];
    dp[1] = Math.max(dp[0], amounts[1]);

    for(let house = 2;  house < amounts.length; house++) {
        dp[house] = Math.max((dp[house - 2]+amounts[house]), dp[house - 1])
    }

    return dp[amounts.length - 1];
}

console.log(maxProfixFromHouse([1,2,3,1]));