/**
 * Implement a function which accepts sorted array and returns the unique values count.
 */


function countUniqueValues(arr) {
    if(arr.length <= 1) {
        return arr.length;
    }

    let p1 = arr[0];
    let p2 = arr[1];

    let uniqueCount = 0;

    while(p2 < arr.length) {
        if(arr[p1] !== arr[p2]) {
            uniqueCount++;
            p1 = p2;
            p2++;
        } else {
            p2++;
        }
    }

    return uniqueCount;
}

console.log(countUniqueValues([0,0,0,1,1,1,2,3,4,4,5,5,5,6]))