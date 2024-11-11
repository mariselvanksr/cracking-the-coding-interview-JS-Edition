function twoSum(nums, target) {
    const map = new Map();

    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const remainingNeedValue = target - num;

        if(map.has(remainingNeedValue)) {
            return [map.get(remainingNeedValue), i];
        } else {
            map.set(num, i);
        }
    }
}

console.log(twoSum([2,7,11,15], 9));