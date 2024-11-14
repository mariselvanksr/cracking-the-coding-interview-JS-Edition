function findLongestSubString(str) {
    let left = 0;
    let right = 0;
    let set = new Set();
    let max = 0;

    while(right < str.length) {
        if(!set.has(str[right])) {
            set.add(str[right]);

            max = Math.max(max, set.size);
            right++;
        } else {
            set.delete(str[left]);
            left++;
        }
    }

    return max;
}

console.log(findLongestSubString('abcabcbb'))
console.log(findLongestSubString(''))