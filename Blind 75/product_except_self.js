function productExceptSelf(nums) {
    let prefix = [];
    let prefixStart = 1;
    let suffix = [];
    let suffixStart = 1;
    let result = [];

    // find prefix
    for(let i = 0; i < nums.length; i++) {
        prefix.push(prefixStart);
        prefixStart = prefixStart*nums[i];
    }

    // find suffix
    for(let i = nums.length-1; i >= 0; i--) {
        suffix.unshift(suffixStart);
        suffixStart = suffixStart*nums[i];
    }

    // multiply prefix and suffix for result
    for(let i = 0; i < nums.length; i++) {
        result.push(prefix[i]*suffix[i]);
    }

    return result;
}

// without suffix

function productExceptSelf_1(nums) {
    let prefix = [];
    let start = 1;
    let result = [];

    // find prefix
    for(let i = 0; i < nums.length; i++) {
        prefix.push(start);
        start = start*nums[i];
    }

    start = 1;

    // find suffix
    for(let i = nums.length-1; i >= 0; i--) {
        result[i] = start*prefix[i];
        start = start*nums[i];
    }

    return result;
}

// without prefix and suffix
function productExceptSelf_2(nums) {
    let result = [];
    let start = 1;

    // find prefix
    for(let i = 0; i < nums.length; i++) {
        result.push(start);
        start = start*nums[i];
    }

    start = 1;

    // find suffix
    for(let i = nums.length-1; i >= 0; i--) {
        result[i] = start*result[i];
        start = start*nums[i];
    }

    return result;
}

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf_1([1,2,3,4]));
console.log(productExceptSelf_2([1,2,3,4]));
