function maxSubArray(nums) {
    let max = nums[0];
    let currentMax = nums[0];

    for(let i = 1; i < nums.length; i++) {
        currentMax = Math.max(nums[i], currentMax+nums[i]);
        max = Math.max(max, currentMax);
    }

    return max;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));