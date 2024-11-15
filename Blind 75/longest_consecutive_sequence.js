function findLongestConsecutiveSequence(nums) {
    // remove duplicate and easy for us to search previous value in O(1)
    const set = new Set(nums);
    let maxSequence = 0;

    for(let num of set) {
        // find start of sequence
        if(set.has(num-1)) continue;

        let currentMax = 1;
        while(set.has(num+1)) {
            currentMax++;
            num++;
        }

        maxSequence = Math.max(maxSequence, currentMax);
    }

    return maxSequence;
}

console.log(findLongestConsecutiveSequence([400,4,1,100,3,2,1]));