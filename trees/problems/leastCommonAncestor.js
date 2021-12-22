// lowest common ancestor

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }

function buildTreeFromArr(arr) {

    function buildTree(node, i) {
      if(!arr[i] && arr[i]!==0) return node;
      node = new TreeNode(arr[i]);
      node.left = buildTree(node.left, 2*i+1);
      node.right = buildTree(node.right, 2*i+2);

      return node;
    }

    return buildTree(null, 0)
}

console.log(buildTreeFromArr([1,2,3]))

function lowestCommonAncestor(arr, x, y) {
    let tree = buildTreeFromArr(arr);
    function LCA(root, path, nodeValue) {
        if(!root) return [];
        path = [...path, root.val]
        if(root.val === nodeValue) {
            return path
        }

        let left = LCA(root.left, path, nodeValue);
        if(left.length) return left

        let right = LCA(root.right, path, nodeValue);

        return right;
    }

    
    let xPath = LCA(tree,[], x);
    let yPath = LCA(tree,[], y);

    console.log(xPath)
    console.log(yPath)

    if(xPath.length && yPath.length) {
         let leastCommon = null

         xPath.forEach((v, i) => {
         if(v === yPath[i]) {
             console.log(v)
             leastCommon = v
         }
        })
         if(leastCommon !== null) {
             console.log(leastCommon)
             return leastCommon
         } else {
             return false
         }
    
    }
}

console.log(JSON.stringify(lowestCommonAncestor([0,1,2,3,4,5,6,null,null,7,8,9,10,11,12], 9,11)))