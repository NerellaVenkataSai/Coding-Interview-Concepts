/**
 *    search in sorted array of unknown size
 * 
 *    steps
 *    1. Take left and right pointer start at 0 index
 *    while true
 *    2. Increment right pointer twice and left pointer to previuos right pointer
 *    3. validate whether target is in the range
 *    4. if in range take that left and right range do binary search to fing target index
 *    5. else return -1
 *    
 */

// JavaScript program to demonstrate working of an algorithm that finds
// an element in an array of infinite size

// Simple binary search algorithm
function binarySearch(arr, l, r, x)
{
	if (r>=l)
	{
		let mid = l + Math.floor((r - l)/2);
		if (arr[mid] == x)
			return mid;
		if (arr[mid] > x)
			return binarySearch(arr, l, mid-1, x);
		return binarySearch(arr, mid+1, r, x);
	}
	return -1;
}

// function takes an infinite size array and a key to be
// searched and returns its position if found else -1.
// We don't know size of arr[] and we can assume size to be
// infinite in this function.
// NOTE THAT THIS FUNCTION ASSUMES arr[] TO BE OF INFINITE SIZE
// THEREFORE, THERE IS NO INDEX OUT OF BOUND CHECKING
function findPos(arr, key)
{
	let l = 0, h = 1;
	let val = arr[0];

	// Find h to do binary search
	while (val < key)
	{
		l = h;	 // store previous high
		h = 2*h;	 // double high index
		val = arr[h]; // update new val
	}

	// at this point we have updated low and
	// high indices, Thus use binary search
	// between them
	return binarySearch(arr, l, h, key);
}

// Driver program
	let arr = [3, 5, 7, 9, 10, 90, 100, 130,
							140, 160, 170];
	let ans = findPos(arr, 10);
	if (ans==-1)
		document.write("Element not found");
	else
		document.write("Element found at index " + ans);


