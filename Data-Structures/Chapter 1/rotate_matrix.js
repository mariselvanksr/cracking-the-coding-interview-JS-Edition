/**
 * Rotate Matrix:
 *  Rotate an N*N matrix by 90 degrees. Do it in-place.
 */

/**
 * Solution:
 *   We have to move layer by layer. Layer represents row. If we have 5 rows we have to 
 *   rotate first 2 rows parseInt(5/2) to achieve this.
 */


function rotate90Degrees(arr) {
    if(!arr.length && !arr[0].length && arr.length !== arr[0].length) return;

    let rotationPoint = Math.floor(arr.length/2);
    let n = arr.length;

    for(let layer = 0; layer < rotationPoint; layer++) {
        let first = layer;
        let last = n - 1 - layer;

        for(let i = first; i < last; i++) {
            let offset = i - first;

            let temp = arr[first][i];

            arr[first][i] = arr[last - offset][first];
            arr[last - offset][first] = arr[last][last - offset];
            arr[last][last - offset] = arr[i][last];
            arr[i][last] = temp;
        }
    }

    return arr;
}


let array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log(rotate90Degrees(array));
/**
 * [ 
 *  [ 7, 4, 1 ], 
 *  [ 8, 5, 2 ], 
 *  [ 9, 6, 3 ] 
 * ]
 */