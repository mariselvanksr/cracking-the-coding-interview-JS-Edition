function coinChange(coins, target) {
    const dp = Array(target+1).fill(Infinity);
    dp[0] = 0;

    for(let currentAmount = 1; currentAmount <= target; currentAmount++) {
        for(let coin of coins) {
            if(currentAmount -  coin >=0) {
                dp[currentAmount] = Math.min(dp[currentAmount], 1+dp[currentAmount-coin])
            }
        }
    }

    return dp[target] > target ? -1 : dp[target];
}

console.log(coinChange([1,2,5], 11));
