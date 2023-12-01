/**
 * Write a function to minimize the repeated strings.
 * 
 * Input:
 *  aabbbccdd
 *
 * Output:
 *  a2b3c2d2
 */

/**
 * Solution 1:
 *  We can use string concatenation for this operation.
 *  
 *  Time Complexity: O(s + k^2)
 *      s -> string length
 *      k -> Number of repeated characters. For each repeated character the string concatenation operation
 * will be executed, which is slow because it copies every character into new location and create a new string
 * this take O(s) time.
 */

function stringCompressor(str) {
    if(!str) return str;

    let finalString = '';
    let countForCharacter = 0;

    for(let i = 0; i < str.length; i++) {
        countForCharacter += 1;

        if(((i+1) >= str.length) || str[i+1] != str[i]) {
            finalString += str[i]+countForCharacter;
            countForCharacter = 0;
        }
    }

    return finalString;
}

console.log(stringCompressor('aabbbccddde'));

/**
 * Solution 2:
 *  Using StringBuilder approach. Since JS doesn't have default StringBuilder class we are using array 
 * as a builder.
 * 
 * Time Complexity: O(n) n = string count
 */


function stringCompressorWithStringBuilder(str) {
    if(!str) return str;

    let stringBuilder = [];
    let uniqueCharCounter = 0;

    for(let i = 0; i < str.length; i++) {
        uniqueCharCounter += 1;

        if(((i+1) >= str.length) || str[i+1] != str[i]) {
            stringBuilder.push(str[i]);
            stringBuilder.push(uniqueCharCounter);
            uniqueCharCounter = 0;
        }
    }

    return stringBuilder.join('');
}

console.log(stringCompressorWithStringBuilder('aabbbccddde'));
