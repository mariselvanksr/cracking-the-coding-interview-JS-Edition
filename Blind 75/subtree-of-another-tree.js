function isSubTreeOfAnotherTree(tree, subTree) {
    function isSame(root1, root2) {
        if (!root1 && !root2) return true;
        if (!root1 || !root2) return false;
        if (root1.val !== root2.val) return false;

        return isSame(root1.left, root2.left) && isSame(root1.right, root2.right);
    }

    function dfs(node) {
        if (!node) return false;

        if (isSame(node, subTree)) {
            return true;
        }

        return dfs(node.left) || dfs(node.right);
    }

    return dfs(tree)
}

const tree = {
    "value": 3,
    "left": {
        "value": 4,
        "left": {
            "value": 2,
            "left": null,
            "right": null
        },
        "right": {
            "value": 1,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 5,
        "left": null,
        "right": {
            "value": 5,
            "left": null,
            "right": null
        }
    }
};

const subTree = {
    "value": 4,
    "left": {
        "value": 2,
        "left": null,
        "right": null
    },
    "right": {
        "value": 1,
        "left": null,
        "right": null
    }
};

console.log(isSubTreeOfAnotherTree(tree, subTree));
