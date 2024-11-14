function spiralMatrix(nums) {
    let left = 0;
    let top = 0;
    let bottom = nums.length - 1;
    let right = nums[0].length - 1;
    let size = nums.length * nums[0].length;
    let result = [];

    while(result.length < size) {
        // left to right
        for(let i = left; i <= right && result.length < size; i++) {
            result.push(nums[top][i]);
        }

        top++;

        // top to bottom
        for(let i = top; i <= bottom && result.length < size; i++) {
            result.push(nums[i][right]);
        }

        right--;

        // right to left
        for(let i = right; i >= left && result.length < size; i--) {
            result.push(nums[bottom][i]);
        }

        bottom--;

        // bottom to top
        for(let i = bottom; i >= top && result.length < size; i--) {
            result.push(nums[i][left])
        }

        left++;
    }

    return result;
}

const input = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const input_1 = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]

console.log(spiralMatrix(input));
console.log(spiralMatrix(input_1));
