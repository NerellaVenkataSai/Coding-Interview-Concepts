class Node {
  // Constructor to create a new Node
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// function to find height of binary tree
function height(root) {
  // base condition when binary tree is empty
  if (root == null) return 0;
  return Math.max(height(root.left), height(root.right)) + 1;
}

// function to check if tree is height-balanced or not
function isBalanced(root) {
  // Base condition
  if (root == null) return true;

  // for left and right subtree height
  let lh = height(root.left);
  let rh = height(root.right);

  // allowed values for (lh - rh) are 1, -1, 0
  if (
    Math.abs(lh - rh) <= 1 &&
    isBalanced(root.left) == true &&
    isBalanced(root.right) == true
  )
    return true;

  // if we reach here means tree is not
  // height-balanced tree
  return false;
}

// Driver function to test the above function
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.left.left = new Node(8);
isBalanced(root);
