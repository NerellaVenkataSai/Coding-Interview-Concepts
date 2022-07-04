/**
 *   Max Sum of array such that no two elements are adjacent
 *   [5,5,10,40,50,35]
 * 
 *   loop from i=1
 *   formula // (inc,exc) previous values in loop
 *   inc = exc + arr[i]
 *   exc = Max(inc,exc) 
 * 
 *   loop-----
 *   exc = 0
 *   1st
 *   inc = 0 + 5
 *   exc = Max(0,5) = 5
 *   2
 *   inc = 5 + 10 = 15
 *   exc = Max(5,5) = 5
 *   3
 *   inc = 5 + 40 = 45
 *   exc = Max(15,5) =15
 *   4
 *   inc = 15 + 50 = 65
 *   exc = Max(45,15) = 45
 *   5
 *   inc = 45 + 35 = 80
 *   exc = Max(65,45) = 65
 * 
 *   // Max(80,65) = 80
 */


// Javascript program for the above approach

// Function to return max sum such that
// no two elements are adjacent
function FindMaxSum(arr, n)
{
	let incl = arr[0];
	let excl = 0;
	let excl_new;
	let i;

	for(i = 1; i < n; i++)
	{
		
		// Current max excluding i
		excl_new = (incl > excl) ? incl : excl;

		// Current max including i
		incl = excl + arr[i];
		excl = excl_new;
	}

	// Return max of incl and excl
	return ((incl > excl) ? incl : excl);
}

// Driver code
let arr = [ 5, 5, 10, 100, 10, 5 ];

/////////////////////////
function findMaxSum(arr, N)
{

	// Declare dp array
	let dp = new Array(N);
	for(let i = 0; i < N; i++)
	{
		dp[i] = new Array(2);
	}
	if (N == 1)
	{
		return arr[0];
	}
	
	// Initialize the values in dp array
	dp[0][0] = 0;
	dp[0][1] = arr[0];
	
	// Loop to find the maximum possible sum
	for (let i = 1; i < N; i++) {
		dp[i][1] = dp[i - 1][0] + arr[i];
		dp[i][0] = Math.max(dp[i - 1][1],
					dp[i - 1][0]);
	}
	
	// Return the maximum sum
	return Math.max(dp[N - 1][0], dp[N - 1][1]);
}

// Driver Code

// Creating the array
let arr1 = [ 5, 5, 10, 100, 10, 5 ];
let N = arr.length;

// Function call
console.log(findMaxSum(arr1, N));

