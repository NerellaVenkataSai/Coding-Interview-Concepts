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

class Node {
	constructor(val) {
		this.data = val;
		this.left = null;
		this.right = null;
	}
}

var root;

	/*
	* Given a binary tree, print out all of its root-to-leaf paths, one per line.
	* Uses a recursive helper to do the work.
	*/
	function printPaths(node) {
		var path = Array(1000).fill(0);
		printPathsRecur(node, path, 0);
	}

	/*
	* Recursive helper function -- given a node, and an array containing the path
	* from the root node up to but not including this node, print out all the
	* root-leaf paths.
	*/
	function printPathsRecur(node , path , pathLen) {
		if (node == null)
			return;

		/* append this node to the path array */
		path[pathLen] = node.data;
		pathLen++;

		/* it's a leaf, so print the path that lead to here */
		if (node.left == null && node.right == null)
			printArray(path, pathLen);
		else {
			/* otherwise try both subtrees */
			printPathsRecur(node.left, path, pathLen);
			printPathsRecur(node.right, path, pathLen);
		}
	}

	/* Utility function that prints out an array on a line. */
	function printArray(ints , len) {
		var i;
		for (i = 0; i < len; i++) {
			document.write(ints[i] + " ");
		}
		document.write("<br/>");
	}

	// driver program to test above functions
		root = new Node(10);
		root.left = new Node(8);
		root.right = new Node(2);
		root.left.left = new Node(3);
		root.left.right = new Node(5);
		root.right.left = new Node(2);

		/* Let us test the built tree by printing Inorder traversal */
		printPaths(root);

