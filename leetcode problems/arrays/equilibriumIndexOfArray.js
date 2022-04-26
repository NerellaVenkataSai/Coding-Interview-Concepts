/**
 *   Equilibrium index of an array
 * 
 *   https://www.geeksforgeeks.org/equilibrium-index-of-an-array/
 * 
 *   sum of lower indexes and higher indexes of an index should be same 
 *   then that point index is equilibrium
 * 
 *   I/p [1,2,6,4,0,-1]
 *   boundery conditions
 *   if array length 1 then return that index
 *   if array length 2 then return false no equilibrium
 * 
 *   if array length > 3 then below process
 * 
 *   obj for sum at each index
 *   sum = {
 *      0: 1
 *      1: 3
 *      2: 9
 *      3: 13
 *      4: 13
 *      5: 12 --> TotalSumOfArray = 12
 *   }
 * 
 *   leftSum                             ===  rightSum
 *   currentIndexSum - CurrentIndexValue ===  TotalSumOfArray - currentIndexSum
 * 
 *   loop start from first Index and check above condition return when it's true
 *   [1,2,6,4,0,-1]
 *   1stIndex
 *   3 - 2 === 12-3 false
 *   2ndIndex
 *   9-6 === 12 - 9 true 
 *   o/p equilibriumIndex is 3
 */

 function equilibrium(arr, n)
 {
     sum = 0; // initialize sum of whole array
     leftsum = 0; // initialize leftsum
   
     /* Find sum of the whole array */
     for (let i = 0; i < n; ++i)
         sum += arr[i];
   
     for (let i = 0; i < n; ++i)
     {
         sum -= arr[i]; // sum is now right sum for index i
   
         if (leftsum == sum)
             return i;
   
         leftsum += arr[i];
     }
   
     /* If no equilibrium index found, then return 0 */
     return -1;
 }
   
 // Driver code
  
 arr =new Array(-7, 1, 5, 2, -4, 3, 0);
 n=arr.length;

