/**
 * Write a function to accepts array and number N. The function should calculate maximum sum of n consecutive
 * elements in an array.
 */


function findMaximumSubArraySum(arr, n) {
    let max = 0;
    let maximumSubArraySum = 0;

    for(let i = 0; i < n; i++) {
        maximumSubArraySum += arr[i];
    }

    max = maximumSubArraySum;

    for(let i = n; i < arr.length; i++) {
        // minus first element in the window
        let firstElementIndexInWindow = i - n;
        maximumSubArraySum = maximumSubArraySum - arr[firstElementIndexInWindow];
        // add newly createdElement
        maximumSubArraySum = maximumSubArraySum + arr[i];

        max = Math.max(max, maximumSubArraySum);
    }

    return max;
}


console.log(findMaximumSubArraySum([2,1,4,7,3,2,1,6,8,10,5,1], 4)) // 6 + 8 + 10 + 5 = 29
console.log(findMaximumSubArraySum([2,1,4,7,3,2,1,6,8,10,5,1], 3)) // 6 + 8 + 10 = 24