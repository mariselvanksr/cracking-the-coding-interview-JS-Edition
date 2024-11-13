function findNumberOfIslands(nums) {
    let count = 0;

    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums[i].length; j++) {
            if(nums[i][j] === '1') {
                count = count + dfs(nums, i, j);
            }
        }
    }

    function dfs(arr, row, col) {
        if(row < 0
            || col < 0
            || row > arr.length - 1
            || col > arr[row].length - 1
            || arr[row][col] === '0'
        ) {
            return;
        }

        arr[row][col] = '0';

        dfs(arr, row+1, col);
        dfs(arr, row-1, col);
        dfs(arr, row, col+1);
        dfs(arr, row, col-1);

        return 1;
    }

    return count;
}

const input = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
];

const input_2 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
];

console.log(findNumberOfIslands(input));
console.log(findNumberOfIslands(input_2));