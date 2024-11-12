function containsDuplicate(nums) {
    const tempSet = new Set();

    for(let num of nums) {
        tempSet.add(num);
    }

    /**
     * Or you can directly use
     * new Set(nums)
     */

    return tempSet.size !== nums.length;
}

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,0]));
