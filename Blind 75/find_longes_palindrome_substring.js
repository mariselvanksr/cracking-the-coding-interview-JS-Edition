function findLongestPalindromeSubstring(str) {
    let longesPalindromeString = '';

    function isPalindrom(right, left) {
        while(right >= 0 && left < str.length && str[right] === str[left]) {
            left--;
            right++;
        }

        return str.slice(left+1, right);
    }

    for(let i = 0; i<str.length; i++) {
        const oddPalindrome = isPalindrom(i, i);
        const evenPalindrome = isPalindrom(i, i+1);
        
        const currentLongest = oddPalindrome.length > evenPalindrome.length ? oddPalindrome : evenPalindrome;

        longesPalindromeString = longesPalindromeString.length > currentLongest.length ? longesPalindromeString : currentLongest;
    }

    return longesPalindromeString;
}

console.log(findLongestPalindromeSubstring('babad'));