/**
 * 
 * TODO Problems
 *  1. Diameter of tree
 *  2. valid sequence from root to leaf 
 */

 function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}


function buildTree1(arr) {
    
    let traverseTree = (node, i) => {
        if(!arr[i]) return node
          node = new TreeNode(arr[i]);
          node.left = traverseTree(node.left, 2 * i + 1);
          node.right = traverseTree(node.right, 2 * i + 2);
        return node;
    }
    let root = traverseTree(null, 0);
    return root;
}

console.log(buildTree1([-10,9,20,null,null,15,7]))

// problems 

// cousins in binary tree https://leetcode.com/problems/cousins-in-binary-tree/

const isCousins = (root, x, y) => {
  let results = new Map();
  let level = 0;
  
  let stack = [[root, level]];
  
  if (root.val === x || root.val === y) return false;
  
  while (stack.length) {
      let data = stack.pop();
      let current = data[0];
      level = data[1];
      
      if (current.left) {
          if (current.left.val === x) results.set(x, { parent: current.val, level: level + 1 });
          if (current.left.val === y) results.set(y, { parent: current.val, level: level + 1 });
          stack.push([current.left, level + 1]);
      }
      
      if (current.right) {
          if (current.right.val === x) results.set(x, { parent: current.val, level: level + 1 });
          if (current.right.val === y) results.set(y, { parent: current.val, level: level + 1 });
          stack.push([current.right, level + 1]);
      }
      
      ++level;
  }
  
  if (results.get(x).parent !== results.get(y).parent &&
      results.get(x).level === results.get(y).level) return true;
  
  return false;
}

console.log(isCousins(buildTree1([1,2,3,null,4,null,5]), 4, 5))


// Q: https://leetcode.com/problems/binary-tree-maximum-path-sum/
function maxPathSumOfBinaryTree(arr) {
    let tree = buildTree1(arr)
    let result = 0
    console.log(tree)
    function maxSum(node, r) {

      if(!node) {
          console.log(node)
          return 0; // leaf node
      }

      let left = maxSum(node.left, result);
      let right = maxSum(node.right, result);

      console.log( left, right, node.val, result )

      // formula to get max path
      const mathStarightSum = Math.max(Math.max(left, right)+ node.val, node.val); // case1
      const mathSumRoot = Math.max(mathStarightSum, left+right+node.val); //case 2
      result = Math.max(mathSumRoot, result); // case 3

      return mathStarightSum
    }

    maxSum(tree, 0)
    return result

}

console.log(maxPathSumOfBinaryTree([-10,9,20,null,null,15,7]))

