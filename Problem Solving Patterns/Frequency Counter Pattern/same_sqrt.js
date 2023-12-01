/**
 * Write a function which accepts 2 arrays. Check if the sqrt of the first array values are placed 
 * in second array with the same frequency.
 */

function sameSqrtChecker(a1, a2) {
    if(a1.length !== a2.length) return;

    let a1_map = {};
    let a2_map = {};

    for(let value of a1) {
        a1_map[value] = a1_map[value] || 0;
        
        a1_map[value] = ++a1_map[value];
    }

    for(let value of a2) {
        a2_map[value] = a2_map[value] || 0;
        
        a2_map[value] = ++a2_map[value];
    }

    for(let value of a1) {
        if(!(value ** 2 in a2_map)) {
            return false;
        }

        if(a1_map[value] !== a2_map[value**2]) {
            return false;
        }
    }

    return true;
}

console.log(sameSqrtChecker([1,2,3,4,4,1], [1,1,4,16,9,16]))