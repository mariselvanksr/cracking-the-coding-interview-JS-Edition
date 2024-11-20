function charReplacement(s, k) {
    let map = {};
    let topFrequency = 0
    let longestFrequency = 0;
    let right = 0;
    let left = 0;

    while(right < s.length) {
        let rightChar = s[right];

        map[rightChar] = map[rightChar] + 1 || 0;
        topFrequency = Math.max(topFrequency, map[rightChar]);

        while((right-left+1)-topFrequency > k) {
            let leftChar = s[left];
            map[leftChar]--;
            left++;
        }

        longestFrequency = Math.max((right-left+1), longestFrequency);
        right++;
    }

    return longestFrequency;
}

console.log(charReplacement('AABABBAA', 2));