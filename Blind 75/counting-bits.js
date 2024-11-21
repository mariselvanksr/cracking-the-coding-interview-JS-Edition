function countingBits(n) {
    const dp = new Array(n+1);
    dp[0] = 0;

    let offset = 1;

    for(let i = 1; i <= n; i++) {
        if(offset*2 === i) {
            offset = i;
        }

        dp[i] = 1+dp[i - offset];
    }

    return dp;
}

console.log(countingBits(4));