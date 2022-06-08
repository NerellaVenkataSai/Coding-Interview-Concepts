/**
 *  https://leetcode.com/problems/product-of-array-except-self/ 
 *  product of array except self element in array
 * 
 *  edge cases 
 *  1. if there are more than one zeros in array return array of zeros
 *     [-1,1,0,-3,3,0] --> [0,0,0,0,0,0]
 *  2. if there is one zero in array return array of zeros except the index with 0
 *     [-1,1,0,-3,3]  --> [0,0,9,0]
 * 
 *  else there are two approcahes 
 *  1. by division calucalte whole product of array and loop thorugh array by dividing the product value with index value
 *     [1,2,3,4]  product=24
 *     0/p [24/1,24/2,24/3,24/4] = [24,12,8,6]
 * 
 *  2. using DP approach
 *     I/p : [2,3,4]
 *     
 *     left: [1,       (2*1)=2, (3*2)=6] // here 1 is constant => [1, 2,6]  final o/P = [(1*12),(2*4),(6*1)]=[12,8,6]
 *    right: [(3*4)=12,(4*1)=4,       1] // here 1 is constant => [12,4,1]
 * 
 * 
 *  
 *  
 */


/**
 *     [2,3,4]
 *  
 *  l= [1,2,6]
 *  r= [12,4,1]
 */

// Javascript program for the above approach
function productExceptSelf(a, n)
{
	let prod = 1;
	let flag = 0;

	// Product of all elements
	for(let i = 0; i < n; i++)
	{
		
		// Counting number of elements
		// which have value
		// 0
		if (a[i] == 0)
			flag++;
		else
			prod *= a[i];
	}

	// Creating a new array of size n
	let arr = Array(n).fill(0);
	for(let i = 0; i < n; i++)
	{
		
		// If number of elements in
		// array with value 0
		// is more than 1 than each
		// value in new array
		// will be equal to 0
		if (flag > 1)
		{
			arr[i] = 0;
		}

		// If no element having value
		// 0 than we will
		// insert product/a[i] in new array
		else if (flag == 0)
			arr[i] = (prod / a[i]);

		// If 1 element of array having
		// value 0 than all
		// the elements except that index
		// value , will be
		// equal to 0
		else if (flag == 1 && a[i] != 0)
		{
			arr[i] = 0;
		}

		// If(flag == 1 && a[i] == 0)
		else
			arr[i] = prod;
	}
	return arr;
}
	
// Driver code
let n = 5;
let array = [ 10, 3, 5, 6, 2 ];
let ans = Array(n).fill(0);
ans = productExceptSelf(array, n);
	
