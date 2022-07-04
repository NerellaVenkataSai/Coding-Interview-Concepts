// javascript code to find k'th largest element in BST

// A binary tree node
class Node {
  constructor(d) {
    this.data = d;
    this.left = this.right = null;
  }
}

// Root of BST
var root = null;

// Constructor

// function to insert nodes
function insert(data) {
  this.root = this.insertRec(this.root, data);
}

/* A utility function to insert a new node
	with given key in BST */
function insertRec(node, data) {
  /* If the tree is empty, return a new node */
  if (node == null) {
    this.root = new Node(data);
    return this.root;
  }

  if (data == node.data) {
    return node;
  }

  /* Otherwise, recur down the tree */
  if (data < node.data) {
    node.left = this.insertRec(node.left, data);
  } else {
    node.right = this.insertRec(node.right, data);
  }
  return node;
}

// class that stores the value of count
class count {
  constructor() {
    this.c = 0;
  }
}

// utility function to find kth largest no in
// a given tree
function kthLargestUtil(node, k, C) {
  // Base cases, the second condition is important to
  // avoid unnecessary recursive calls
  if (node == null || C.c >= k) return;

  // Follow reverse inorder traversal so that the
  // largest element is visited first
  this.kthLargestUtil(node.right, k, C);

  // Increment count of visited nodes
  C.c++;

  // If c becomes k now, then this is the k'th largest
  if (C.c == k) {
    document.write(k + "th largest element is " + node.data + "<br/>");
    return;
  }

  // Recur for left subtree
  this.kthLargestUtil(node.left, k, C);
}

// Method to find the kth largest no in given BST
function kthLargest(k) {
  c = new count(); // object of class count
  this.kthLargestUtil(this.root, k, c);
}

// Driver function

/* Let us create following BST
			50
		/	 \
		30	 70
		/ \ / \
	20 40 60 80 */
insert(50);
insert(30);
insert(20);
insert(40);
insert(70);
insert(60);
insert(80);

for (i = 1; i <= 7; i++) {
  kthLargest(i);
}
