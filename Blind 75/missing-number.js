function findMissingNumber(nums) {
    let xor = nums.length;

    for(let i = 0; i< nums.length; i++) {
        xor = xor ^ i ^ nums[i];
    }

    return xor;
}

function findMissingNumberWithSet(nums) {
    let set = new Set(nums);

    for(let i = 0; i < nums.length; i++) {
        if(!set.has(i)) {
            return i;
        }
    }
}

console.log(findMissingNumber([3,0,1]));
console.log(findMissingNumberWithSet([3,0,1]));