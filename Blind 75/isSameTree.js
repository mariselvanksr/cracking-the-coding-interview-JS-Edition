/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function isSameTree(p, q) {
    // recurrsion break
    if(p === null && q === null) {
        return true;
    }

    if(p === null || q === null) {
        return false;
    }

    if(p.val === q.val) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }

    return false;
}

const tree_1 = {
    val: 2,
    left: {
        val: 1,
        left: null,
        right: null
    },
    right: {
        val: 3,
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
        right: null
    },
}

console.log(isSameTree(tree_1, tree_1));
console.log(isSameTree(tree_1, tree_2));