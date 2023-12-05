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
    let zeroStartPoint = arr.length - 1;

    while(start <= end) {
        let mid = start + Math.floor((end - start) / 2);

        if(arr[mid] === 0 && (arr[mid - 1] === 1 || mid === 0)) {
            zeroStartPoint = mid;
            
            break;
        }

        if(arr[mid] === 0 && arr[mid - 1] === 0) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return arr.length - zeroStartPoint;
}

console.log(countZeroes([1,1,1,1,0,0]))
console.log(countZeroes([1,0,0,0,0]))
console.log(countZeroes([0,0,0]))
console.log(countZeroes([1,1,1,1]))