/**
    Given an array of 1s and 0s which has all 1s first followed by all 0s, 
write a function called countZeroes, which returns the number of zeroes in the array.

    countZeroes([1,1,1,1,0,0]) // 2
    countZeroes([1,0,0,0,0]) // 4
    countZeroes([0,0,0]) // 3
    countZeroes([1,1,1,1]) // 0
    Time Complexity - O(log n)
 */

function countZeroes(arr) {
    if(arr[arr.length - 1] === 1) return 0; 

    let start = 0;
    let end = arr.length - 1;
    let mid = start + Math.floor((end - start) / 2);

    while(start <= end) {
        if((mid == 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
            break;
        }

        if(arr[mid] === 1) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }

        mid = start + Math.floor((end - start) / 2);
    }

    return arr.length - mid;
}

console.log(countZeroes([1,1,1,1,0,0]))
console.log(countZeroes([1,0,0,0,0]))
console.log(countZeroes([0,0,0]))
console.log(countZeroes([1,1,1,1]))