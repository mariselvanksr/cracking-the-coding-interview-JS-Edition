function invertBinaryTree(root) {
    if (!root) return [];

    [root.left, root.right] = [root.right, root.left];

    invertBinaryTree(root.left);
    invertBinaryTree(root.right);

    return root;
}

const bst = {
    "value": 3,
    "left": {
        "value": 1,
        "left": null,
        "right": {
            "value": 2,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 4,
        "left": null,
        "right": null
    }
}

const tree = {
    "value": 2,
    "left": {
        "value": 1,
        "left": null,
        "right": null
    },
    "right": {
        "value": 3,
        "left": null,
        "right": null
    }
}

const tree_2 = {
    "value": 4,
    "left": {
        "value": 2,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 3,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": 7,
        "left": {
            "value": 6,
            "left": null,
            "right": null
        },
        "right": {
            "value": 9,
            "left": null,
            "right": null
        }
    }
};

console.log(invertBinaryTree(bst));
console.log(invertBinaryTree(tree));
console.log(invertBinaryTree(tree_2));