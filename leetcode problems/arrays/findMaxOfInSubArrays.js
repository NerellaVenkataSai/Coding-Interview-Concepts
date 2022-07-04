
function findKMaxElement(arr, k, n)
{
	// creating the max heap ,to get max element always
		let queue = [];

		let res = [];
		let i = 0;

		for (; i < k; i++)
			queue.push(arr[i]);
		
		queue.sort(function(a,b){return b-a;});
		
		// adding the maximum element among first k elements
		res.push(queue[0]);

		// removing the first element of the array
		queue.splice(arr[0],1);

		// iterarting for the next elements
		for (; i < n; i++) {

			// adding the new element in the window
			queue.push(arr[i]);
			queue.sort(function(a,b){return b-a;});
			
			// finding & adding the max element in the
			// current sliding window
			res.push(queue[0]);

			// finally removing the first element from front
			// end of queue
			queue.splice(arr[i - k + 1],1);
			
		}

		return res;

		// this code is Contributed by Pradeep Mondal P
}

// Driver Code
let arr = [ 8, 5, 10, 7, 9, 4, 15, 12, 90, 13];
let k = 4, n = arr.length;
let res = findKMaxElement(arr, k, n);
for (let x of res)
	console.log(x + " ")
