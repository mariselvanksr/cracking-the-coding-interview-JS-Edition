function findMaxArea(heights) {
    let left = 0;
    let right = heights.length - 1;
    let maxArea = 0;

    while(left < right) {
        const currentArea = Math.min(heights[left], heights[right]) * (right - left);
        maxArea = Math.max(maxArea, currentArea);

        if (heights[left] <= heights[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

console.log(findMaxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));