function isValidBinarySearchTree(node) {
    if (!node) {
        return true;
    }

    const val = node.val;

    if(node.left?.val >= val || node.right?.val <= val) {
        return false;
    }

    return isValidBinarySearchTree(node.left) && isValidBinarySearchTree(node.right);
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
        right: null
    },
}

const tree_2 = {
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

console.log(isValidBinarySearchTree(tree_1))
console.log(isValidBinarySearchTree(tree_2))