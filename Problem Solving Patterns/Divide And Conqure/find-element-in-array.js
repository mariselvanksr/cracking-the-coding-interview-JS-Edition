/**
 * Search an element in an sorted array
 */

function foundElementInArray(arr, searchEle) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        // Source for index out of range issue
        // https://www.youtube.com/watch?v=_eS-nNnkKfI
        let mid = left + Math.floor((right - left)/2);
        
        if(arr[mid] === searchEle) {
            return true;
        } else if (arr[mid] < searchEle) {
            left = mid + 1;
        } else if (arr[mid] > searchEle) {
            right = mid - 1;
        }
    }

    return false;
}

console.log(foundElementInArray([1,2,3,4,5,6,7,8,9,10], 4))
console.log(foundElementInArray([1,2,3,4,5,6,7,8,9,10], 10))
console.log(foundElementInArray([1,2,3,4,5,6,7,8,9,10], 1))
console.log(foundElementInArray([1,2,3,4,5,6,7,8,9,10], 3))
console.log(foundElementInArray([1,2,3,4,5,6,7,8,9,10], 8))
console.log(foundElementInArray([1,2,3,4,5,6,7,8,9,10], 9))
console.log(foundElementInArray([1,2,3,4,5,6,7,8,9,10], 0))
console.log(foundElementInArray([1,2,3,4,5,6,7,8,9,10], 11))