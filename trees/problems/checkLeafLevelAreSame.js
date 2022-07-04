
// A binary tree node
class Node
{
	constructor(item)
	{
		this.data = item;
		this.left = this.right = null;
	}
}

let	leafLevel = 0;

let root;

// Recursive function which checks
// whether all leaves are at same level
function checkUtil(node, level)
{
	
	// Base case
	if (node == null)
		return true;
		
	// If a leaf node is encountered
	if (node.left == null && node.right == null)
	{
		
		// When a leaf node is found first time
		if (leafLevel == 0)
		{
			
			// Set first found leaf's level
			leaflevel = level;
			return true;
		}

		// If this is not first leaf node,
		// compare its level with first leaf's level
		return (level == leafLevel);
	}

	// If this node is not leaf, recursively
	// check left and right subtrees
	return checkUtil(node.left, level + 1) &&
		checkUtil(node.right, level + 1);
}

// The main function to check if all
// leafs are at same level. It mainly
// uses checkUtil()
function check(node)
{
	let level = 0;
	return checkUtil(node, level);
}

// Driver code

// Let us create the tree as shown in the example
root = new Node(12);
root.left = new Node(5);
root.left.left = new Node(3);
root.left.right = new Node(9);
root.left.left.left = new Node(1);
root.left.right.left = new Node(1);


check(root)
