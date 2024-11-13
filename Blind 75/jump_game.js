function canJump(nums) {
    let targetIndex = nums.length - 1;

    for(let i = nums.length - 1; i <= 0; i--) {
        if(i+nums[i] >= targetIndex) {
            targetIndex = i;
        }
    }

    return targetIndex === 0;
}

console.log(canJump[2,3,1,1,4]);