var Trie = function() {
    this.root = {};
}

Trie.prototype.insert = function(word) {
    let currentNode = this.root;

    for(let char of word) {
        if(!currentNode[char]) {
            currentNode[char] = {};
        }

        currentNode = currentNode[char];
    }

    currentNode.isWord = true;
}

Trie.prototype.traversal = function(word) {
    let currentNode = this.root;

    for(let char of word) {
        if(!currentNode[char]) {
            return null;
        }

        currentNode = currentNode[char];
    }

    return currentNode;
}

Trie.prototype.search = function(word) {
    const node = this.traversal(word);

    return node && node.isWord ? true : false;
}


Trie.prototype.startsWith = function(prefix) {
    const node = this.traversal(prefix);

    return !!node;
}

const tree = new Trie();
tree.insert('apple');
tree.insert('orange');
console.log(tree.search('apple'))
console.log(tree.search('app'))
tree.insert('app');
console.log(tree.search('app'))

