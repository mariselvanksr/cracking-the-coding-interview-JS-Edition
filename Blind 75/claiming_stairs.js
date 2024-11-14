function claimStairs(n) {
    if(n <= 0) return 0;
    if(n === 1) return 1;

    let dp = Array(n);
    //start from 0 or base
    dp[0] = 1;
    dp[1] = 2;

    for(let i = 2; i < dp.length; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[dp.length-1];
}

console.log(claimStairs(2))
console.log(claimStairs(3))
console.log(claimStairs(5))