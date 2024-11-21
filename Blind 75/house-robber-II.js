function robHouse(nums) {
    if(nums.length === 0) return nums[0];
    if(nums.length === 1) return Math.max(nums[0], nums[1]);

    const dp1 = new Array(nums.length);
    const dp2 = new Array(nums.length);

    // since first and last house are connected we are excluding it from the dp1 and dp2 
    // respectively. So, first dp start from 0 to nums.length - 2, and second one was
    // from 1 to nums.length-1. In this way we are not triggering the alarm.

    robHouseTwice(0, nums.length - 2, dp1,)
    robHouseTwice(1, nums.length - 1, dp2)

    function robHouseTwice(i, numLen, dpArr) {
        dpArr[i] = nums[i];
        dpArr[i+1] = Math.max(dpArr[i], nums[i+1]);

        for(let j = i+2; j <= numLen; j++) {
            dpArr[j] = Math.max(nums[j]+ dpArr[j-2], dpArr[j-1]);
        }
    }

    // dp1 = [2,3,_]
    // dp2 = [_,3,3]

    return Math.max(dp1[dp1.length - 2], dp2[dp2.length - 1]);
}

console.log(robHouse([2,3,2]))
console.log(robHouse([1,2,3,1]))
