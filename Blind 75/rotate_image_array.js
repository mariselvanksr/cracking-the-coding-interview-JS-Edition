function rotateArr(arr) {
    // We should transpose and reverse the row
    for(let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr[i].length; j++) {
            let temp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;
        }
    }

    // reverse till middle of row
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length/2; j++){
            let temp = arr[i][j];
            arr[i][j] = arr[i][arr[i].length-1 - j];
            arr[i][arr[i].length-1 - j] = temp;
        }
    }

    return arr;
}

const input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const expectedArr = [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
]

console.log(rotateArr(input));