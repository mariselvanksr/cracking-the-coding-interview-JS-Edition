function findPalindromicSubstring(str) {
    let count = 0;
    let left = 0;
    let right = 0;

    for(let i = 0; i < str.length; i++) {
        left = right = i;
        isPalindrom(left, right);
        isPalindrom(left, right+1);
    }

    function isPalindrom(left, right) {
        while(left >= 0 && right <= str.length && str[left] === str[right]) {
            count++;
            left--;
            right++;
        }
    }

    return count;
}

console.log(findPalindromicSubstring('abc'))
console.log(findPalindromicSubstring('aaa'))
