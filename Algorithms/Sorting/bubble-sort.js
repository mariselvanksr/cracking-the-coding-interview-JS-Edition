/**
 * 1. Start the loop from an end of the array i = arr.length - 1.
 * 2. Inside that start j from 0 to i.
 * 3. Swap values based on comparing two elements if greater swap
 */

function bubbleSort(arr) {
    for(let i = arr.length; i >= 0; i--) {
        for(let j = 0; j <= i; j++) {
            if(arr[j] > arr[j+1]) {
               [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
            }
        }
    }

    return arr;
}

console.log(bubbleSort([6,3,7,12,34,1,3]))