function isPalindromeWithoutAlphaNumericChar(str) {
    str = cleanupInput(str);
    let left = 0;
    let right = str.length - 1;

    while(left < right) {
        if(str[left] !== str[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

function cleanupInput(str) {
    let cleanStr = '';

    for(let char of str) {
        if(isAlphaNumeric(char)) {
            cleanStr += char.toLowerCase();
        }
    }

    return cleanStr;
}

function isAlphaNumeric(char) {
    return (char >= 'a' && char <= 'z')
        || (char >= 'A' && char <= 'Z')
        || (char >= '0' && char <= '9')
}

console.log(isPalindromeWithoutAlphaNumericChar('A man, a plan, a canal: Panama'));
console.log(isPalindromeWithoutAlphaNumericChar('race a car'));