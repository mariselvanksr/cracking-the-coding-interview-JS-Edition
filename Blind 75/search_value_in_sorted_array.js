function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;

    while(left < right) {
        let mid = Math.floor((right + left)/2);

        if(nums[right] < nums[mid]) {
            /**
             * Why mid + 1 for left?
             * Because we know that the exsisting mid is higher than the right most element. There is no 
             * need to include it for the next run
             */
            left = mid + 1;
        } else {
            /**
             * Why assign mid instead of mid+1?
             * Because we know the fact of mid is probably the min element that we are looking for.
             * So, we keep that in our calculation cycle.
             */
            right = mid; 
        }
    }

    return nums[left];
}

console.log(findMin([11,12,13,14,0,1,2]))