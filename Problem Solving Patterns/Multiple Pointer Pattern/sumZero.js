/**
 * Write a function called SumZero which accepts sorted array of integers. 
 * The function should find the first pair which sums up to zero.
 */

function sumZeroIndexFinder(array) {
    if(array.length === 1) {
        return array[0] === 0 ? [0] : [];
    }

    let p1 = 0;
    let p2 = array.length - 1;

    while(p1 < p2) {
        let sum = array[p1] + array[p2];

        if(sum === 0) {
            return [p1, p2];
        } else if(sum > 0) {
            p2--;
        } else {
            p1++;
        }
    }

    return [];
}

console.log(sumZeroIndexFinder([-3,-2,-1,0,1,2,3]));
console.log(sumZeroIndexFinder([-3,-2,-1,0,1,]));