/**
 * Write a function to replace all the spaces in a string into %20. Assume you have additional space at the end
 * to accommodate these additional character. And you are given the "true" length of the string as well.
 */

/**
 * Assume our string is "user name   " and true length 9 (user name)
 */

/**
 * Solution 1: String replace with JS prebuilt functions
 */

function URLifyWithStringReplacement(str, trueLength) {
    str = str.trim(); // Remove additional empty spaces at last
    return str.replace(' ', '%20');
}

/**
 * Solution 2: Algorithm to replace the empty space.
 * Consider each char positions in an array. We have to operate the array
 */


function URLifyWithReplacementAlgorithmWithArray(str, trueLength) {
    let strArray = str.split('');

    // [u,s,e,r, ,n,a,m,e, , ,]
    let index = strArray.length - 1;

    for(let i = trueLength - 1; i >= 0;i--) {
        if(strArray[i] !== ' ') {
            strArray[index] = strArray[i];
            index--;
        } else {
            strArray[index] = '0';
            strArray[index-1] = '2';
            strArray[index-2] = '%';

            index -= 3;
        }
    }

    console.log(strArray)

    return strArray.join();
}

URLifyWithReplacementAlgorithmWithArray('user name  ', 9);