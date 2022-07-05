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

/**
 *                      0
 *                1          2
 *              3   4      5    6
 *                7   8  9 10 11  12
 */


// JavaScript implementation to find
// lowest common ancestor of
// n1 and n2 using one traversal of binary tree

class Node
{
  constructor(item) {
  this.left = null;
  this.right = null;
  this.data = item;
  }
}

//Root of the Binary Tree
let root;

function findlCA(n1, n2)
{
  return findLCA(root, n1, n2);
}

// This function returns pointer to LCA of two given
// values n1 and n2. This function assumes that n1 and
// n2 are present in Binary Tree
function findLCA(node, n1, n2)
{
  // Base case
  if (node == null)
    return null;

  // If either n1 or n2 matches with root's key, report
  // the presence by returning root (Note that if a key is
  // ancestor of other, then the ancestor key becomes LCA
  if (node.data == n1 || node.data == n2)
    return node;

  // Look for keys in left and right subtrees
  let left_lca = findLCA(node.left, n1, n2);
  let right_lca = findLCA(node.right, n1, n2);

  // If both of the above calls return Non-NULL, then one key
  // is present in once subtree and other is present in other,
  // So this node is the LCA
  if (left_lca!=null && right_lca!=null)
    return node;

  // Otherwise check if left subtree or right subtree is LCA
  return (left_lca != null) ? left_lca : right_lca;
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
console.log("LCA(4, 5) = " ,  findlCA(4, 5).data );
console.log("LCA(4, 6) = " ,  findlCA(4, 6).data );
console.log("LCA(3, 4) = " ,  findlCA(3, 4).data );
console.log("LCA(2, 4) = " ,  findlCA(2, 4).data );
