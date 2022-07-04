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
  
  
  