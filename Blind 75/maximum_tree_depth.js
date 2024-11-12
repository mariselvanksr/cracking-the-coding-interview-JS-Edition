function getMaximunTreeDepth(root) {
    if(!root) return 0;

    return 1 + Math.max(getMaximunTreeDepth(root.left), getMaximunTreeDepth(root.right));
}

function getMaximunTreeDepthUsingBFS(root) {
    if(!root) {
        return 0;
    }

    const queue = [root];
    let maxDepth = 0;

    while(queue.length) {
        let len = queue.length;

        for(let i = 0; i < len; i++) {
            let current = queue.shift();

            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }

        maxDepth++;
    }

    return maxDepth;
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


console.log(getMaximunTreeDepth(tree_1));
console.log(getMaximunTreeDepthUsingBFS(tree_1));