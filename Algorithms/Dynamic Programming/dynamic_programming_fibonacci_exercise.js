/**
 * Fibonacci with Dynamic Programming
 * 
 * Time Complexity: O(n)
 */

/**
 * Using Memoization
 */

function fibonacciWithMemoization(n, memo = {}) {
    if(n <= 2) return 1;

    if(memo[n]) return memo[n];

    let result = fibonacciWithMemoization(n-1, memo) + fibonacciWithMemoization(n-2, memo)
    memo[n] = result;

    return result;
}

/**
 * Tabulation
 */

function fibonacciWithTabulation(n) {
    let initialValues = [0,1,1];

    for(let i = 3; i <= n; i++) {
        initialValues[i] = initialValues[i-1] + initialValues[i-2]
    }

    // .at(-1) will return last element in the array
    return initialValues.at(-1);
}

/**
 * Without Memoization or Tabulation if you run this in your browser it will broke the system
 * because of the number of calls :)
 */

console.log(fibonacciWithMemoization(100));
console.log(fibonacciWithTabulation(100));