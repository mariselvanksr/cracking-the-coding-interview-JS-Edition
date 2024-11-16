function getMinWindowSubstring(m, n) {
    const map = new Map();

    for(let char of n) {
        if(map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }

    let left = right = 0;
    let maxSubStr = '';
    let maxLen = Infinity;
    let count = map.size;

    while(right < m.length) {
        if(map.has(m[right])) {
            map.set(m[right], map.get(m[right]) - 1);

            if(map.get(m[right]) === 0) {
                count--;
            }
        }

        right++;

        while(count === 0) {
            if(right-left < maxLen) {
                maxLen = right-left;
                maxSubStr = m.slice(left, right);
            }

            if(map.has(m[left])) {
                map.set(m[left], map.get(m[left]) + 1);

                if(map.get(m[left]) > 0) {
                    count++;
                }
            }

            left++;
        }
    }

    return maxSubStr;
}

console.log(getMinWindowSubstring('ADOBECODEBANC', 'ABC'))