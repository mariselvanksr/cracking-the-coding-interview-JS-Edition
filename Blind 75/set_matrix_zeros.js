function setMatrixZeros(nums) {
    const zeroIndexes = [];

    for(let i = 0;i < nums.length; i++) {
        for(let j = 0;j < nums[i].length; j++) {
            if(nums[i][j] === 0) {
                zeroIndexes.push([i, j]);
            }
        }
    }

    for(let i = 0; i < zeroIndexes.length; i++) {
        let [row, column] = zeroIndexes[i];
        makeRowZero(row);
        makeColumnZero(column);
    }

    function makeRowZero(row) {
        for(let i = 0; i < nums[row].length; i++) {
            nums[row][i] = 0;
        }
    }

    function makeColumnZero(column) {
        for(let i=0; i < nums.length; i++) {
            nums[i][column] = 0;
        }
    }

    return nums;
}

const input = [
    [1, 1, 1],
    [1, 0, 1],
    [0, 1, 1]
];

console.log(setMatrixZeros(input));