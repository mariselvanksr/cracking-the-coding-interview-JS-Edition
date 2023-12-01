/**
 * Problem:
 *  Given two strings, write a method to decide if one is the permutation of other.
 * 
 * Example: two, owt
 * 
 * Questions:
 *  Do we need to consider capital as a separate are the same? Consider all lowercase
 *  Do we have any numbers are special character present? For now, we don't need to consider that.
 *  Do we need to consider whitespace while finding permutation? Ex: 'dog   ' and 'god'. For now NO.
 */ 

/**
 * Solution 1:
 *  Sort and Compare the strings. If both have same characters then the return value should be true.
 */

function findPermutationWithSorting(str1, str2) {
    if(str1.length !== str2.length) return false;

    // Since both strings have same length we can consider the time complexity as O(n log n)
    str1 = str1.sort();
    str2 = str2.sort();

    return str1 === str2;
}

/**
 * Solution 2:
 *  Using HashTable to compare to store the string counts.
 *  For this additional space required. O(n)
 */

function findPermutationWithHashTable(str1, str2) {
    if(str1.length !== str2.length) return false;

    let str1CharHashTable = {};

    for(let i = 0; i < str1.length; i++) {
        let char = str1[i];
        str1CharHashTable[char] = str1CharHashTable[char] ? str1CharHashTable[char]+1 : 1;
    }

    for(let i = 0; i < str2.length; i++) {
        let char = str2[i];

        if(!str1CharHashTable[char]) return false

        str1CharHashTable[char] = str1CharHashTable[char] - 1;
    }

    return true;
}



