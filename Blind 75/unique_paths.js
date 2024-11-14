function uniquePaths(row, column) {
    const dp = Array.from(Array(row), () => new Array(column));

    // lets make first row and column as one since there is
    // only one way to go left and bottom from previous node

    for (let index = 0; index < dp[0].length; index++) {
        dp[0][index] = 1;
    }

    for (let index = 0; index < dp.length; index++) {
        dp[index][0] = 1;
    }

    for(let i = 1; i < dp.length; i++) {
        for(let j = 1; j < dp[i].length; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }

    return dp[row-1][column-1];
}

console.log(uniquePaths(3, 7));