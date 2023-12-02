/**
 * Find a longest substring in an string. The substring should not have an repeating character.
 */

function findLongestSubStringLength(str) {
    if(!str) return 'Input Empty';

    if(str.length === 0) return str;

    let p1 = 0;
    let p2 = 1;
    let min = p1;
    let max = p2;
    let maxLength = (p2 - p1) + 1;

    while(p2 < str.length) {
        if (str[p1] !== str[p2]) {
            let currentMax = (p2 - p1) + 1;

            if(currentMax > maxLength) {
                min = p1;
                max = p2;
                maxLength = currentMax;
            }
            
            p2++;
        } else {
            p1++;
            p2++;
        }
    }

    return maxLength; 
}

console.log(findLongestSubStringLength('hithera')); // ither