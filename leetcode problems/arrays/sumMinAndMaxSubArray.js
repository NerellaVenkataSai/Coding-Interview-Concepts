
// JavaScript program to find sum of all minimum and maximum

function SumOfKsubArray(arr , k)
{
	let sum = 0; // Initialize result

	// The queue will store indexes of useful elements
	// in every window
	// In deque 'G' we maintain decreasing order of
	// values from front to rear
	// In deque 'S' we maintain increasing order of
	// values from front to rear
	let S = [];
	let G = [];

	// Process first window of size K
	let i = 0;
	for (i = 0; i < k; i++)
	{

	// Remove all previous greater elements
	// that are useless.
	while ( S.length != 0 && arr[S[S.length - 1]] >= arr[i])
		S.pop(); // Remove from rear

	// Remove all previous smaller that are elements
	// are useless.
	while ( G.length != 0 && arr[G[G.length - 1]] <= arr[i])
		G.pop(); // Remove from rear

	// Add current element at rear of both deque
	G.push(i);
	S.push(i);
	}

	// Process rest of the Array elements
	for ( ; i < arr.length; i++ )
	{

	// Element at the front of the deque 'G' & 'S'
	// is the largest and smallest
	// element of previous window respectively
	sum += arr[S[0]] + arr[G[0]];

	// Remove all elements which are out of this
	// window
	console.log(S,G)
	while ( S.length != 0 && S[0] <= i - k)
		S.shift(0);
	while ( G.length != 0 && G[0] <= i - k)
		G.shift(0);

	// remove all previous greater element that are
	// useless
	while ( S.length != 0 && arr[S[S.length-1]] >= arr[i])
		S.pop(); // Remove from rear

	// remove all previous smaller that are elements
	// are useless
	while ( G.length != 0 && arr[G[G.length - 1]] <= arr[i])
		G.pop(); // Remove from rear

	// Add current element at rear of both deque
	G.push(i);
	S.push(i);
	console.log(S,G)

	}

	// Sum of minimum and maximum element of last window
	sum += arr[S[0]] + arr[G[0]];
	return sum;
}

// Driver code

	let arr = [-2,-3,4,-1,-2,1,5,-3];
	let k = 2;
	console.log(SumOfKsubArray(arr, k));
