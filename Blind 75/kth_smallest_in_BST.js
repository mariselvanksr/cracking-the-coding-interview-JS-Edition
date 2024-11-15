function kthSmallest(node, k) {
    let sortedArray = [];

    function inOrderTraversal(node) {
        if (!node) return;

        inOrderTraversal(node.left);
        sortedArray.push(node.value);
        inOrderTraversal(node.right);
    }

    inOrderTraversal(node);

    return sortedArray[k-1];
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

console.log(kthSmallest(bst, 1));
