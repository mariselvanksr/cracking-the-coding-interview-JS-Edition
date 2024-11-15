function findIndexInSortedArr(arr, searchVal) {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        let mid = left + Math.floor((right-left)/2);

        if(arr[mid] === searchVal) {
            return mid;
        }

        // which side is sorted
        if(arr[mid] < arr[right]) {
            if(searchVal > arr[mid] && searchVal <= arr[right]) {
                left = mid+1;
            } else {
                right = mid - 1;
            }
        } else {
            if(searchVal < arr[mid] && searchVal >= arr[left]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }

    return -1;
}

console.log(findIndexInSortedArr([4,5,6,7,0,1,2], 4))
console.log(findIndexInSortedArr([4,5,6,7,0,1,2], 5))
console.log(findIndexInSortedArr([4,5,6,7,0,1,2], 6))
console.log(findIndexInSortedArr([4,5,6,7,0,1,2], 7))
console.log(findIndexInSortedArr([4,5,6,7,0,1,2], 0))
console.log(findIndexInSortedArr([4,5,6,7,0,1,2], 1))
console.log(findIndexInSortedArr([4,5,6,7,0,1,2], 2))
console.log(findIndexInSortedArr([4,5,6,7,0,1,2], 8))