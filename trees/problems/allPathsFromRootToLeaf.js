/**
 *  All paths from root to leaf of tree
 * 
 */
 function newNode(val) {
    this.val = val === undefined ? undefined : val;
    this.left=null;
    this.right=null;
}

function buildBT(arr) {
    function treeTraversal(i) {
        if(!arr[i]) return null;
        let node = new newNode(arr[i]);
        
        node.left = treeTraversal(2*i+1)
        node.right = treeTraversal(2*i+2)

        return node
    }

    console.log(treeTraversal(0))
    return treeTraversal(0)
}

function allPathsFromRootToLeaf(arr) {
    let tree = buildBT(arr);

    let result=[]
    function allPaths(node, sum) {
        if(!node) return null;
        let value = sum*10 + node.val; 
        if(!node.left && !node.right) {
            result.push(value)
        }
        allPaths(node.left,value);
        allPaths(node.right,value)
    }

    allPaths(tree,0)
    console.log(result)
}


allPathsFromRootToLeaf([1,2,3,4,5])
