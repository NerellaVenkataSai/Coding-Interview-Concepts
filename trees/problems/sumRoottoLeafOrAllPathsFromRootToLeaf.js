function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }


function buildBinaryTreeFromArray(arr) {

    function treeTraversal(node, i) {
        if(!arr[i]) return node 
        node = new TreeNode(arr[i]);
        node.left = treeTraversal(node.left, 2*i+1)
        node.right = treeTraversal(node.right, 2*i+2)

        return node;
    }

    return treeTraversal(null, 0)
}

function sumRootToLeafNumbers(treeArr) {
    const tree = buildBinaryTreeFromArray(treeArr);
    console.log(tree);

    let result = 0
    function sumOfTree(root, value){
        if(!root) {        
           return 0;     
        } 
        console.log(root.val)
        console.log(value)
        value = value * 10 + root.val
        console.log(value)

        if(!root.left && !root.right) {
            
            result += value
            console.log(result)
        }
        
        sumOfTree(root.left, value) 

        sumOfTree(root.right, value)

    }
    console.log(sumOfTree(tree, 0))
    console.log(result)
    return result

}

console.log(sumRootToLeafNumbers([1,2,3]))