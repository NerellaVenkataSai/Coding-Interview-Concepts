/**    missing number in array 
 * 
 *    goal TC: O(n) SC: O(1)
 * 
 *    Two Approaches
 *     
 *    1. hashing array of numbers and looping through the array and finding missing number
 *       TC:O(n) SC: O(n)
 * 
 *    best approach
 *    get sum of numbers by n =  n(n+1)/2
 */


function MissingNumberInArray(arr) {
    const length = arr.length;

    const arrSum = arr.reduce((acc, value) => acc + value)

    console.log(arrSum)

    return (length * (length + 1)/2) - arrSum
}

console.log(MissingNumberInArray([0,1,3]))
console.log(3*(3+1)/2)

/////// 2nd step
function findFirstMissing(arr, start, end, first)
{
	if (start < end)
	{
		let mid = (start + end) / 2;
	
		/** Index matches with value
		at that index, means missing
		element cannot be upto that po*/
		if (arr[mid] != mid + first)
			return findFirstMissing(arr, start,
									mid, first);
		else
			return findFirstMissing(arr, mid + 1,
									end, first);
	}
	return start + first;
}

// Program to find Smallest
// Missing in Sorted Array
function findSmallestMissinginSortedArray(arr)
{
	
	// Check if 0 is missing
	// in the array
	if (arr[0] != 0)
		return 0;
	
	// Check is all numbers 0 to n - 1
	// are present in array
	if (arr[arr.length - 1] == arr.length - 1)
		return arr.length;
	
	let first = arr[0];
	
	return findFirstMissing(
		arr, 0, arr.length - 1, first);
}

// Driver code
let arr = [ 0, 1, 2, 3, 4, 5, 7 ];
let n = arr.length;
