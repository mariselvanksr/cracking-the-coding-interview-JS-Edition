/**
 * Write a function called coinChange which accepts two parameters:
 * an array of denominations and a value. The function should return the number 
 * of ways you can obtain the value from the given collection of denominations. 
 * You can think of this as figuring out the number of ways to make change for a given 
 * value from a supply of coins.
 */

const denominations = [1, 5, 10, 25]


// using recursive
function coinChange(denominations, n, sum) {
    if(sum == 0) return 1;

    if(sum < 0) return 0;

    if(n <= 0) return 0;

    return coinChange(denominations, n - 1, sum) + coinChange(denominations, n, sum - denominations[n-1])
}

 
console.log(coinChange(denominations, denominations.length, 1)) // 1
console.log(coinChange(denominations, denominations.length,  2)) // 1
console.log(coinChange(denominations, denominations.length, 5)) // 2
console.log(coinChange(denominations, denominations.length, 10)) // 4
console.log(coinChange(denominations, denominations.length,  25)) // 13
console.log(coinChange(denominations, denominations.length, 45)) // 39
console.log(coinChange(denominations, denominations.length, 100)) // 242
console.log(coinChange(denominations, denominations.length, 145)) // 622
console.log(coinChange(denominations, denominations.length, 1451)) // 425663