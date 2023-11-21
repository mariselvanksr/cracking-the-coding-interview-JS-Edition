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
}

let bst = new BST();
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(3);

console.log(bst)
console.log(bst.find(2));
console.log(bst.find(15));
console.log(bst.find(17));