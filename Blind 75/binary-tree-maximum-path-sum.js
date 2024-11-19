function maxPathSum(tree) {
  let max = -Infinity;

  function dfs(node) {
    if(!node) return 0;
    
    let left = Math.max(0, dfs(node.left));
    let right = Math.max(0, dfs(node.right));
    let currentMax = node.val + left + right;
    max = Math.max(max, currentMax)

    return node.val + Math.max(left, right);
  }

  dfs(tree);

  return max;
}

const binaryTree = {
  "val": -10,
  "left": {
    "val": 9,
    "left": null,
    "right": null
  },
  "right": {
    "val": 20,
    "left": {
      "val": 15,
      "left": null,
      "right": null
    },
    "right": {
      "val": 7,
      "left": null,
      "right": null
    }
  }
}

console.log(maxPathSum(binaryTree));