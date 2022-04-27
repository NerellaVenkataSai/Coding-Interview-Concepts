class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    // root of a binary seach tree
    this.root = null;
  }

  // function to be implemented
  insert(data) {
    // Creating a node and initailising
    // with data
    var newNode = new Node(data);

    // root is null then node will
    // be added to the tree and made root.
    if (this.root === null) this.root = newNode;
    // find the correct position in the
    // tree and add the node
    else this.insertNode(this.root, newNode);
  }

  // Method to insert a node in a tree
  // it moves over the tree to find the location
  // to insert a node with a given data
  insertNode(node, newNode) {
    // if the data is less than the node
    // data move left of the tree
    if (newNode.data < node.data) {
      // if left is null insert node here
      if (node.left === null) node.left = newNode;
      // if left is not null recur until
      // null is found
      else this.insertNode(node.left, newNode);
    }

    // if the data is more than the node
    // data move right of the tree
    else {
      // if right is null insert node here
      if (node.right === null) node.right = newNode;
      // if right is not null recur until
      // null is found
      else this.insertNode(node.right, newNode);
    }
  }
  remove(data) {
    // root is re-initialized with
    // root of a modified tree.
    const root = this.removeNode(this.root, data);
    debugger;
    this.root = root;
  }

  // Method to remove node with a
  // given data
  // it recur over the tree to find the
  // data and removes it
  removeNode(node, key) {
    // if the root is null then tree is
    // empty
    if (node === null) return null;
    // if data to be delete is less than
    // roots data then move to left subtree
    else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      debugger;
      return node;
    }

    // if data to be delete is greater than
    // roots data then move to right subtree
    else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    }

    // if data is similar to the root's data
    // then delete this node
    else {
      // deleting node with no children
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // deleting node with one children
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // Deleting node with two children
      // minumum node of the rigt subtree
      // is stored in aux
      var aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  // returns root of the tree
  getRootNode() {
    return this.root;
  }

  findMinNode(node) {
    // if left of a node is null
    // then it must be minimum node
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }

  // Performs inorder traversal of a tree
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  // Performs preorder traversal of a tree
  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  // Performs postorder traversal of a tree
  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  bfs(root) {
    let stack = [root.data];
    let tempNode = root;
    let bfsRecursive = (root) => {
      while (root.left || root.right) {
        if (root.left) {
          stack.push(root.left.data);
          bfsRecursive(root.left);
          return stack;
        } else if (root.right) {
          stack.push(root.right.data);
          bfsRecursive(root.right);
          return stack;
        }
      }
    };
    bfsRecursive(tempNode);
    debugger;
  }

  // Helper function
  // findMinNode()
  // getRootNode()
  // inorder(node)
  // preorder(node)
  // postorder(node)
  // search(node, data)
}

// create an object for the BinarySearchTree
var BST = new BinarySearchTree();

// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

//		 15
//		 / \
//	 10 25
//	 / \ / \
//	 7 13 22 27
//	 / \ /
// 5 9 17

//var root = BST.getRootNode();

// prints 5 7 9 10 13 15 17 22 25 27
//BST.inorder(root);

// Removing node with no children
// BST.remove(5);

//		 15
//		 / \
//	 10 25
//	 / \ / \
//	 7 13 22 27
//	 \ /
//	 9 17

// BST.remove(7);

//		 15
//		 / \
//	 10 25
//	 / \ / \
//	 9 13 22 27
//		 /
//		 17

// Removing node with two children
// BST.remove(15);

//		 17
//		 / \
//	 10 25
//	 / \ / \
//	 9 13 22 27

var root = BST.getRootNode();
console.log("inorder traversal");

BST.bfs(root);

// // prints 9 10 13 17 22 25 27
// BST.inorder(root);

// console.log("postorder traversal");
// BST.postorder(root);
// console.log("preorder traversal");
// BST.preorder(root);
