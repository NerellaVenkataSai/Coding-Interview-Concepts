function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }

function buildBT(arr) {
    function traverseTree(node, i) {
        console.log(node, arr[i])
        if(arr[i] == null) return node
        node=new TreeNode(arr[i])
        node.left = traverseTree(node.left, 2 * i + 1)
        node.right = traverseTree(node.right, 2 * i + 2)

        return node;
    }

    return traverseTree(null, 0)

}

console.log(buildBT([1,0,0,0,1,1,null,null,null,0]))

function isValidSequence(treeArr, seqArr) {

    const tree = buildBT(treeArr);
    
    function isValidFromRootToLeaf(root, arrIndex) {
       console.log(root, arrIndex) 
       if(!root) return false

       if(root.val !== seqArr[arrIndex]) return false;

       if(root.val === seqArr[arrIndex]) {
           if(!root?.left && !root.right && arrIndex === seqArr.length - 1) return true
       }


       let left = isValidFromRootToLeaf(root.left, arrIndex + 1)
       if(left) return left

       let right = isValidFromRootToLeaf(root.right, arrIndex + 1)
       return right
    }

    return isValidFromRootToLeaf(tree, 0);
}

console.log(isValidSequence([1,0,0,0,1,1,null,null,null,0], [1,0,1]))



