function levelOrderTraversal(root) {
    if(!root) {
        return [];
    }

    const queue = [root];
    const resultLevel = [];

    while(queue.length) {
        const currentLevel = [];
        // if not taken it when pushing it into queue the length always change.
        const len = queue.length;

        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            node?.left && queue.push(node.left);
            node?.right && queue.push(node.right);
            currentLevel.push(node.val);
        }

        resultLevel.push(currentLevel);
    }

    return resultLevel;
}


const tree_1 = {
    val: 2,
    left: {
        val: 1,
        left: null,
        right: null
    },
    right: {
        val: 13,
        left: null,
        right: {
            val: 14,
            left: null,
            right: null,
        }
    },
}


console.log(levelOrderTraversal(tree_1));