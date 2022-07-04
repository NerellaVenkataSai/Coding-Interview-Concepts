// JavaScript program to print cousins of a node

// A Binary Tree Node
class Node {
  constructor() {
    this.data = 0;
    this.left = null;
    this.right = null;
  }
}

// A utility function to create
// a new Binary Tree Node
function newNode(item) {
  var temp = new Node();
  temp.data = item;
  temp.left = null;
  temp.right = null;
  return temp;
}

/* It returns level of the node
if it is present in tree,
otherwise returns 0.*/
function getLevel(root, node, level) {
  // base cases
  if (root == null) return 0;
  if (root == node) return level;

  // If node is present in left subtree
  var downlevel = getLevel(root.left, node, level + 1);
  if (downlevel != 0) return downlevel;

  // If node is not present in left subtree
  return getLevel(root.right, node, level + 1);
}

/* Print nodes at a given level
such that sibling of node is
not printed if it exists */
function printGivenLevel(root, node, level) {
  // Base cases
  if (root == null || level < 2) return;

  // If current node is parent of a node with
  // given level
  if (level == 2) {
    if (root.left == node || root.right == node) return;
    if (root.left != null) document.write(root.left.data + " ");
    if (root.right != null) document.write(root.right.data + " ");
  }

  // Recur for left and right subtrees
  else if (level > 2) {
    printGivenLevel(root.left, node, level - 1);
    printGivenLevel(root.right, node, level - 1);
  }
}

// This function prints cousins of a given node
function printCousins(root, node) {
  // Get level of given node
  var level = getLevel(root, node, 1);

  // Print nodes of given level.
  printGivenLevel(root, node, level);
}

// Driver code
var root = newNode(1);
root.left = newNode(2);
root.right = newNode(3);
root.left.left = newNode(4);
root.left.right = newNode(5);
root.left.right.right = newNode(15);
root.right.left = newNode(6);
root.right.right = newNode(7);
root.right.left.right = newNode(8);
printCousins(root, root.left.right);
