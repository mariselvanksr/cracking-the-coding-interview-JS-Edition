function pacificAtlantic(heights) {
    let height = heights.length;
    let width = heights[0].length;
    let pacificQueue = [];
    let atlanticQueue = [];

    for(let i = 0; i < height; i++) {
        for(let j = 0; j < width; j++) {
            if(i === 0 || j == 0) {
                pacificQueue.push([i,j]);
            }

            if(i === height-1 || j === width-1) {
                atlanticQueue.push([i, j]);
            }
        }
    }

    function dfs(queue) {
        const isValid = (x, y) => x >= 0 && y >= 0 && x < height && y < width;
        const visited = Array.from(Array(height), () => new Array(width).fill(false));
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]

        while(queue.length) {
            const [currentRow, currentCol] = queue.shift();
            visited[currentRow][currentCol] = true;
            
            for(let dir of directions) {
                const nextRow = currentRow + dir[0];
                const nextCol = currentCol + dir[1];

                if(!isValid(nextRow, nextCol) || visited[nextRow][nextCol]) continue;

                if(heights[currentRow][currentCol] <= heights[nextRow][nextCol]) {
                    queue.push([nextRow, nextCol]);
                }
            }
        }

        return visited;
    }

    let pacificVisited = dfs(pacificQueue);
    let atlanticVisited = dfs(atlanticQueue);

    let result = [];

    for(let i = 0; i < heights.length; i++) {
        for(let j = 0; j < heights[0].length; j++) {
            if(pacificVisited[i][j] && atlanticVisited[i][j]) {
                result.push([i,j]);
            }
        }
    }

    return result;
}

const input = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]];

console.log(pacificAtlantic(input));