
//q: construct Binary Tree form PreOrder and InOrder and find post order
// solution 
//1. first construct binary tree
//2. Do post order traversal algo on binary tree 

 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }
 
 var buildTree = function(preorder, inorder) {
    if(!inorder.length || !preorder.length) return null;

    let root = new TreeNode(preorder[0]);
    let midIndex = inorder.indexOf(root.val);
    console.log(root.val)
    console.log(preorder)
    console.log(inorder)
    console.log(midIndex)

    root.left = buildTree(preorder.slice(1,midIndex+1), inorder.slice(0,midIndex))
    root.right = buildTree(preorder.slice(midIndex + 1), inorder.slice(midIndex+1))

    return root
};

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]))


/**
 *      3
 *   9     20
 *      15   17
 * 
 *   [3]   =  []
 * 
 *   [9,20] =  [3]
 * 
 *   [9,15,17]  = [3,20]
 * 
 *   [9,15] =  [3,20,17]
 * 
 *   [9] =  [3,20,17,15]
 * 
 *  [] =  [3,20,17,15, 9] // reverse --> [9,15,17,20,3] //postOrder
 */
console.log([3,9,20,15,7].slice(0,0))