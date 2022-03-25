/**
 *  same approach can be used for merge n sorted lists
 *  merge two sorted array using merge sort 
 *  i < j --> push i and i++; i > j --> push j and j++ ; i===j push i or j and i or j ++
 * 
 *  [1,2,3] [2,5,6]  
 *   i       j
 * 
 *   stack: [1] 1<2 i++
 *  [1,2,3] [2,5,6] 
 *     i     j
 *  stack: [1,2] 2==2 j++
 * 
 *  [1,2,3] [2,5,6] 
 *     i     j
 *  stack: [1,2] 2==2 i++
 * 
 *  [1,2,3] [2,5,6] 
 *       i   j
 *  stack: [1,2,2] 3>2 j++
 * [1,2,3] [2,5,6] 
 *      i     j
 *  stack: [1,2,2,3] 5>3 i++
 *  
 *  //i reached end push remaining elements in j
 *  [1,2,3] [2,5,6] 
 *       i     j
 *  stack: [1,2,2,3,5,6]
 *  
 */

