function findLowestCommmonAncestor(node, p, q) {
    if (!node) return;

    if (node.val < p && node.val < q) {
        return findLowestCommmonAncestor(node.left, p, q);
    } else if (node.val > p && node.val > q) {
        return findLowestCommmonAncestor(node.right, p, q);
    } else {
        return node.val;
    }
}

const bst = {
    "val": 6,
    "left": {
        "val": 2,
        "left": {
            "val": 0,
            "left": null,
            "right": null
        },
        "right": {
            "val": 4,
            "left": {
                "val": 3,
                "left": null,
                "right": null
            },
            "right": {
                "val": 5,
                "left": null,
                "right": null
            }
        }
    },
    "right": {
        "val": 8,
        "left": {
            "val": 7,
            "left": null,
            "right": null
        },
        "right": {
            "val": 9,
            "left": null,
            "right": null
        }
    }
}

console.log(findLowestCommmonAncestor(bst, 2, 8));