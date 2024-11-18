function generateTire(words) {
    let root = {};

    for(let word of words) {
        let currentNode = root;

        for(let char of word) {
            if(!currentNode[char]) {
                currentNode[char] = {}
            }

            currentNode = currentNode[char];
        }

        currentNode.word = word;
    }

    return root;
}

function findWordsInBoard(board, words) {
    const root = generateTire(words);
    const result = [];

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            dfs(root, i, j, result, board);
        }
    }

    return result;
}

function dfs(node, i, j, result, board) {
    if(node.word) {
        result.push(node.word);
        delete node.word;
    }

    if(i < 0 || j < 0 || i > board.length-1 || j > board[0].length-1 || !node[board[i][j]]) {
        return false;
    }

    const currentChar = board[i][j];
    board[i][j] = '#';

    dfs(node[currentChar], i+1, j, result, board);
    dfs(node[currentChar], i-1, j, result, board);
    dfs(node[currentChar], i, j+1, result, board);
    dfs(node[currentChar], i, j-1, result, board);

    board[i][j] = currentChar;
}



const board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]];
const words = ["oath","pea","eat","rain"];

console.log(findWordsInBoard(board, words));