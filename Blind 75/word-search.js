function wordSearch(board, word) {
    for(let r = 0; r<board.length; r++) {
        for(let c = 0; c<board[r].length; c++) {
            if(board[r][c] === word[0] && dfs(r, c, 0)) {
                return true;
            }
        }
    }

    function dfs(row, col, i) {
        if (word.length === i) return true;
        if(row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] !== word[i]) {
            return false;
        }

        board[row][col] = '#';

        if(dfs(row+1, col, i+1) || dfs(row-1, col, i+1) || dfs(row, col+1, i+1) || dfs(row, col-1, i+1)) {
            return true;
        }

        board[row][col] = word[i];
    }

    return false;
}

const board = [
    ['A', 'B', 'C', 'A'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
]

console.log(wordSearch(board, 'ABCCED'));