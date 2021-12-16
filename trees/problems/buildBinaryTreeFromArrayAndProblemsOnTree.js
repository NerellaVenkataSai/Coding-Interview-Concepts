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

function isCousins(arr, x, y) {
  const tree = buildTree1(arr)
  console.log(tree)
  if(tree.val === x || tree.val === y) {
      return false;
  }
  let parent = -1;
  function caluclateCousins(root, parent, value, height) {
     if(!root) {
         return 0;
     }
     if(root.val === value) {
         return {height, parent};
     }

     parent = root.val
     console.log(parent)
     let left = caluclateCousins(root.left, parent, value, height + 1)
     console.log(parent, left)
     if(left)
      return left;
     parent = root.val;
     let right = caluclateCousins(root.right, parent, value, height + 1 )
     console.log(parent, right)
     return right

  }

  console.log(caluclateCousins(tree, parent, x, 0))
  console.log(parent)

}

console.log(isCousins([1,2,3,null,4,null,5], 4, 5))


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

