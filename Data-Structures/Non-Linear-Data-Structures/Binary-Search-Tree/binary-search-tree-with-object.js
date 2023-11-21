class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.tree = null;
    }

    insert(value) {
        let newNode = new Node(value);

        if(!this.tree) {
            this.tree = newNode;

            return;
        }

        let currentNode = this.tree;

        while(true) {
            if(currentNode.value === value) return;

            if(currentNode.value > value) {
                if(!currentNode.left) {
                    currentNode.left = newNode;

                    return;
                }

                currentNode = currentNode.left;
            } else if(currentNode.value < value) {
                if(!currentNode.right) {
                    currentNode.right = newNode;

                    return;
                }

                currentNode = currentNode.right;
            }
        }
    }

    find(value) {
        if(!this.tree) return false;

        let currentNode = this.tree;

        while (currentNode) {
            if(currentNode.value > value) {
                currentNode = currentNode.left;
            } else if(currentNode.value < value) {
                currentNode = currentNode.right;
            } else {
                return currentNode
            }
        }

        return false;
    }

    /**
     * Source: https://www.freecodecamp.org/news/binary-tree-algorithms-for-javascript-beginners/
     */

    static in_orderTraversal(root, values = []) {
        if(root) {
            this.in_orderTraversal(root.left, values);
            values.push(root.value);
            this.in_orderTraversal(root.right, values);
        }

        return values;
    }

    static post_orderTraversal(root, values = []) {
        if(root) {
            this.post_orderTraversal(root.left, values);
            this.post_orderTraversal(root.right, values);
            values.push(root.value);
        }

        return values;
    }

    static pre_orderTraversal(root, values = []) {
        if(root) {
            values.push(root.value);
            this.pre_orderTraversal(root.left, values);
            this.pre_orderTraversal(root.right, values);
        }

        return values;
    }

    static maxDepth(tree) {
        if(!tree) return;

        const calcDepth = (node) => {
            if(!node) return 0;
            return Math.max(1 + calcDepth(node.left), 1 + calcDepth(node.right));
        }

        return calcDepth(tree);
    }

    /**
     * Source: https://codestandard.net/articles/lowest-common-ancestor-binary-search-tree/
     */
    static findLowestCommonAncestor(tree, value1, value2) {
        if(!tree) return -1;

        if(tree.value === value1 || tree.value === value2) {
            return tree.value;
        }
        
        if(tree.value < value1 && tree.value < value2) {
            return this.findLowestCommonAncestor(tree.right, value1, value2);
        }

        if(tree.value > value1 && tree.value > value2) {
            return this.findLowestCommonAncestor(tree.left, value1, value2);
        }

        return tree.value;
    }
}

let bst = new BST();
bst.insert(10);
bst.insert(7);
bst.insert(5);
bst.insert(14);
bst.insert(12);
bst.insert(16);

console.log(BST.in_orderTraversal(bst.tree));
console.log(BST.post_orderTraversal(bst.tree));
console.log(BST.pre_orderTraversal(bst.tree));
console.log(BST.maxDepth(bst.tree));
console.log(BST.findLowestCommonAncestor(bst.tree, 5, 14));
console.log(BST.findLowestCommonAncestor(bst.tree, 7, 12));
console.log(BST.findLowestCommonAncestor(bst.tree, 5, 7));
console.log(BST.findLowestCommonAncestor(bst.tree, 12, 16));
console.log(BST.findLowestCommonAncestor(bst.tree, 1, 3));