/**
 * Given a string write a function to check if it is a permutation of a palindrome.
 * 
 * Input: Tact Coa
 * Output: True (permutations: taco cat, atco cta)
 */

/**
 * If a string should be a palindrome we should have at most all the characters in even count.
 * We can have one as an odd because we can use that in the middle.
 * 
 * Solution:
 *  We don't need to consider space as a character.
 */

function findPermutationOfPalindrome(str) {
    let charCountMap = {};
    let oddCount = 0;

    for(let i = 0; i< str.length; i++) {
        if(str[i] === ' ') continue;

        charCountMap[str[i]] = charCountMap[str[i]] ? charCountMap[str[i]] + 1 : 1;

        if((charCountMap[str[i]] % 2) == 1) {
            oddCount++;
        } else {
            oddCount--;
        }
    }

    return oddCount <= 1;
}


console.log(findPermutationOfPalindrome('taco cat'));
console.log(findPermutationOfPalindrome('Tact Coa'));

function findPermutationOfPalindromeWithBitWiseOperation(str) {
    str = str.replace(' ', '');
    let bit = 0;

    for(let i = 0; i < str.length; i++) {
        let charCode = str[i].charCodeAt();

        let mask = 1 << charCode;

        if((bit & mask) === 0) {
            bit |= mask;
        } else {
            bit &= ~mask;
        }
    }

    return (bit & (bit - 1)) == 0
}

console.log(findPermutationOfPalindromeWithBitWiseOperation('taco cat'));