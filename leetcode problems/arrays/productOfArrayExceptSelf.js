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