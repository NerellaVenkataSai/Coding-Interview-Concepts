//post-- 2 7 5 12 16 13 10

//In --  2 5 7 10 12 13 16
//              m


 function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function buildTree(postOrder, inOrder) {
    if(!inOrder.length || !postOrder.length) return null;


    const root = new TreeNode(postOrder[postOrder.length -1]);
    const midIndex = inOrder.indexOf(root.val);
    console.log(postOrder)
    console.log(inOrder)
    console.log(midIndex)
    root.left = buildTree(postOrder.slice(0, midIndex), inOrder.slice(0, midIndex));
    root.right = buildTree(postOrder.slice(midIndex, postOrder.length -1), inOrder.slice(midIndex+1));

    return root;
}


// expected output preOrder -- 10 5 2 7 13 12 16
/**
 *       10
 *    5       13
 *  2   7   12  16
 */
console.log(buildTree([2, 7, 5, 12, 16, 13, 10], [2, 5, 7, 10, 12, 13, 16]))


