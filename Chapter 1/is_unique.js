/**
 * Problem:
 * 
 * 1.1 Determine all the characters in a string is unique without any additional space.
 * 
 * Observation:
 *  1. What are all the characters that we expect? ASCII - 0 to 127 characters
 *  2. No additional space
 * 
 * Just Know:
 *  https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html
 *  https://www.ssec.wisc.edu/~tomw/java/unicode.html
 */

/**
 *  Solution 1: Brute force
 *  The "ASCII_Char" array never exceeds length of 128. We can consider space as O(1)
 *  Time complexity will be also O(1) since it's also a constant.
 *  Or assume the str length is n and c is character set length. 
 *  Then space complexity will be O(c) and time complexity O(min(c, n)) or O(c)
 */ 

function findStringUniqueWithBruteForce(str) {
    // If it's ASCII we can have condition like str.length <= 127
    // Because if it goes above that there should be a duplicate for sure

    if(str.length > 127) return false;

    let ASCII_Char = Array.from({length: 128}).map(() => false);
    let hasDuplicate = false;

    for(let i = 0; i < str.length; i++) {
        let currentCharCode = str.charCodeAt(i);
        
        if(ASCII_Char[currentCharCode]) {
            hasDuplicate = true;
            break;
        }
    }

    return hasDuplicate;
}

/**
 * Solution 2: Using set
 */

function findStringUniqueWithSet(str) {
    return str.length === [...new Set(str.split())].length
}

/**
 * Solution 3: Using HashMap
 */

function findStringUniqueWithMap(str) {
    let hashMap = {};

    let hasDuplicate = false;

    for(let i = 0; i < str.length; i++) {
        if(hashMap[str[i]]) {
            hasDuplicate = true;

            break;
        }

        hashMap[str[i]] = true;
    }

    return hasDuplicate;
}

/**
 * Solution 4: Using recursion
 * 
 * 1. No additional data structure
 * 2. No additional space
 * 
 * Time Complexity: O(n^3)
 * 
 * The function calls O(n) + O(n-1) + O(n-2)...+ O(1)
 * O(n) + O(n-1) + O(n-2)...+ O(1) = O(1+2+....n)
 * O(n(n+1)/2) = O(((n^2 + n)/2))
 * 
 * ie: O(n^2)
 * 
 * Each operation inside the function uses max of O(n) time.
 * 
 * Reasoning From GPT:
 *  The time complexity of the findStringUniqueWithRecursion function you provided is O(n^2), where 'n' is the length of the input string 'str'. Here's the reasoning for this time complexity:
 *  The function works recursively and takes the following steps for each character in the input string 'str':
 *  It checks if the input string is empty, which takes O(1) time.
 *  It extracts the first character of the string ('first_char') and then removes that character from 'str' by calling str.substring(1). Extracting the first character takes O(1) time, but removing the first character by creating a new string with str.substring(1) takes O(n) time in the worst case because it requires copying the entire string except for the first character to create a new string.
 *  It checks whether 'first_char' is unique in the remaining part of 'str' using the str.includes(first_char) operation. In the worst case, this also takes O(n) time because it may have to traverse the entire 'str' to determine if 'first_char' exists within it.
 *  If 'first_char' is not found in the remaining 'str', the function makes a recursive call with the updated 'str' (which is one character shorter). This recursive call happens 'n' times, and each time it performs the same operations as the original call with a shorter 'str'.
 *  Since the recursive function makes 'n' recursive calls, and each call involves O(n) work (due to the substring and includes operations), the overall time complexity is O(n) multiplied by the number of recursive calls, resulting in O(n^2) as the time complexity for this function.
 *  Note that the worst-case time complexity occurs when there are no duplicate characters in the input string, and the function must perform the maximum amount of work for each character in the string.
 */

function findStringUniqueWithRecursion(str) {
    if(!str) return true;

    let first_char = str[0];
    str = str.substring(1)

    return !str.includes(first_char) && findStringUniqueWithRecursion(str)
}