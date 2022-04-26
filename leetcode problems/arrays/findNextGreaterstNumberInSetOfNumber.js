
function nextPermutation(n, arr)
{
	// If number of digits is 1 then just return the vector
	if (n == 1)
		return arr;

	// Start from the right most digit and find the first
	// digit that is
	// smaller than the digit next to it.
	let i = 0;
	for (i = n - 1; i > 0; i--) {
		if (arr[i] > arr[i - 1])
			break;
	}

	// If there is a possibility of a next greater element
	if (i != 0)
	{
	
		// Find the smallest digit on right side of (i-1)'th
		// digit that is
		// greater than number[i-1]
		for (let j = n - 1; j >= i; j--)
		{
			if (arr[i - 1] < arr[j])
			{
				// Swap the found smallest digit i.e. arr[j]
				// with arr[i-1]
				
				let temp = arr[i - 1];
				arr[i - 1] = arr[j];
				arr[j] = temp;
				break;
			}
		}
	}

	// Reverse the digits after (i-1) because the digits
	// after (i-1) are in decreasing order and thus we will
	// get the smallest element possible from these digits
	arr = arr.slice(0,i).concat(arr.slice(i,arr.length).reverse());

	// If i is 0 that means elements are in decreasing order
	// Therefore, no greater element possible then we just
	// return the lowest possible
	// order/element formed from these digits by just
	// reversing the vector
	return arr;
}

let v = [5,3,4,9,7,6];
let n = 6;
let res = nextPermutation(n, v);
for (let i = 0; i < res.length; i++) {
	console.log(res[i] + " ")
}
