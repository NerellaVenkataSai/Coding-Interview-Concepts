
	// TreeNode class
	class Node
	{
		constructor(key) {
		this.left = null;
		this.right = null;
		this.key = key;
		}
	}
	
	function newNode(key)
	{
		let temp = new Node(key);
		return temp;
	}
	
	// Stores the minimum number of
	// cameras required
	let cnt = 0;

	// Utility function to find minimum
	// number of cameras required to
	// monitor the entire tree
	function minCameraSetupUtil(root)
	{
		
		// If root is NULL
		if (root == null)
			return 1;

		let L = minCameraSetupUtil(root.left);
		let R = minCameraSetupUtil(root.right);

		// Both the nodes are monitored
		if (L == 1 && R == 1)
			return 2;

		// If one of the left and the
		// right subtree is not monitored
		else if (L == 2 || R == 2) {
			cnt++;
			return 3;
		}

		// If the root node is monitored
		return 1;
	}

	// Function to find the minimum number
	// of cameras required to monitor
	// entire tree
	function minCameraSetup(root)
	{
		let value = minCameraSetupUtil(root);

		// Print the count of cameras
		document.write(cnt + (value == 2 ? 1 : 0) + "</br>");
	}
	
	// Given Binary Tree
	let root = newNode(0);
	root.left = newNode(0);
	root.left.left = newNode(0);
	root.left.left.left = newNode(0);
	root.left.left.left.right = newNode(0);

	minCameraSetup(root);
