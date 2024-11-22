function longestIncreasingSubString(nums) {
    let dp = new Array(nums.length).fill(1);

    for(let i = 1; i <= nums.length; i++) {
        for(let j = i; j >= 0; j--) {
            if(nums[i] > nums[j]) {
                dp[i]=Math.max(dp[i], dp[j]+1);
            }
        }
    }

    return Math.max(...dp);
}

console.log(longestIncreasingSubString([10, 9, 2, 5, 3, 7, 101, 18]));