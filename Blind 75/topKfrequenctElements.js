function topKFrequentElements(nums, k) {
    let map = {}
    let bucket = [];
    let result = [];

    for(let num of nums) {
        if(!map[num]) {
            map[num] = 1;
        } else {
            map[num] = map[num] + 1;
        }
    }

    for(let [num, frequency] of Object.entries(map)) {
        if(!bucket[frequency]) {
            bucket[frequency] = new Set().add(num);
        } else {
            bucket[frequency].add(num);
        }
    }

    for(let i = bucket.length - 1; i >= 0; i--) {
        if(bucket[i]) result.push(...bucket[i]);
        if(result.length === k) return result;
    }

    return result;
}

console.log(topKFrequentElements([1,1,1,2,2,3], 2));
console.log(topKFrequentElements([1,1,1,2,2,3], 1));
