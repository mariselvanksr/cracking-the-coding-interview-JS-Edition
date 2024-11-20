function maximumProductSubArray(nums) {
    let prevMax = nums[0];
    let prevMin = nums[0];
    let max = nums[0];

    for(let i = 1; i < nums.length; i++) {
        let currentMax = Math.max(nums[i], nums[i]*prevMax, nums[i]*prevMin);
        let currentMin = Math.max(nums[i], nums[i]*prevMax, nums[i]*prevMin);

        prevMax = currentMax;
        prevMin = currentMin;

        max = Math.max(currentMax, max);
    }

    return max;
}

console.log(maximumProductSubArray([3,2,-2,4]));