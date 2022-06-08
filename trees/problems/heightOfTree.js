
class Node
{
	constructor(item)
	{
		this.data=item;
		this.left=this.right=null;
	}
}

	let root;
	
	/* Compute the "maxDepth" of a tree -- the number of
	nodes along the longest path from the root node
	down to the farthest leaf node.*/
	function maxDepth(node)
	{
		if (node == null)
			return -1;
		else
		{
			/* compute the depth of each subtree */
			let lDepth = maxDepth(node.left);
			let rDepth = maxDepth(node.right);

			/* use the larger one */
			if (lDepth > rDepth)
				return (lDepth + 1);
			else
				return (rDepth + 1);
		}
	}
	
	/* Driver program to test above functions */
	
		root = new Node(1);
		root.left = new Node(2);
		root.right = new Node(3);
		root.left.left = new Node(4);
		root.left.right = new Node(5);

		document.write("Height of tree is : " +
									maxDepth(root));

class Node{

	constructor(){
		this.key = 0
		this.left = null
		this.right = null
	}

}

// Utility function to create a new node
function newNode(key){

	let temp = new Node()
	temp.key = key
	temp.left = null
	temp.right = null
	return temp

}

// Function to find the height(depth) of the tree
function height(root){

	// Initialising a variable to count the
	// height of tree
	let depth = 0

	let q = []
	
	// pushing first level element along with null
	q.push(root)
	q.push(null)
	while(q.length>0){
		let temp = q.shift()
	
		// When null encountered, increment the value
		if(temp == null)
			depth += 1
		
		// If null not encountered, keep moving
		if(temp != null){
			if(temp.left)
				q.push(temp.left)
			
			if(temp.right)
				q.push(temp.right)
		}
			
		// If queue still have elements left,
		// push null again to the queue.
		else if(q.length>0)
			q.push(null)
	}
	return depth

}

// Driver program

// Let us create Binary Tree shown in above example
let root = newNode(1)
root.left = newNode(12)
root.right = newNode(13)

root.right.left = newNode(14)
root.right.right = newNode(15)

root.right.left.left = newNode(21)
root.right.left.right = newNode(22)
root.right.right.left = newNode(23)
root.right.right.right = newNode(24)

document.write(`Height(Depth) of tree is: ${height(root)}`,"</br>")

// This code is contributed by shinjanpatra


