/**
 *  largest number formed from an Array
 *  https://leetcode.com/problems/largest-number/
 * 
 *  [3,30,34,9]
 * 
 *  take two indixes ij and compare `ij` < `ji` then swap i and j and continue loop
 *   i
 *  [3,30,34,9]
 *     j
 *  330 < 303 F 
 *   i
 *  [3,30,34,9]
 *        j
 *  334 < 343 T = [34,30,3,9]
 *   i
 *  [34,30,3,9]
 *           j
 *  349 < 934 T = [9,30,3,34]
 *      i
 *  [9,30,3,34]
 *        j
 *  303 < 330 T = [9,3,30,34]
 *     i
 *  [9,3,30,34]
 *          j
 *  334 < 343 = [9,34,30,3]
 *         i
 *  [9,34,30,3]
 *           j
 *  303 < 330 T = [9,34,3,30] = 934330 O/p
 *  
 *  
 */


 function myCompare(X, Y)
 {
     // // first append Y at the end of X
     let XY = X + Y;
  
     // // then append X at the end of Y
     let YX = Y + X;
  
     // // Now see which of the two
     // // formed numbers is greater
     return (YX - XY)
 }
  
 // The main function that prints
 // the arrangement with the
 // largest value. The function
 // accepts a vector of strings
  
 function printLargest(arr)
 {
      
     // Sort the numbers using
     // inbuilt sort function. The
     // function uses our comparison
     // function myCompare() to
     // compare two strings.
     arr.sort(myCompare);
     for(let i = 0; i < arr.length; i++)
     document.write(arr[i])
  
     // join method creates a string out of the array elements.
     document.write(arr.join(""))
 }
  
 // Driver code
  
 let arr = [];
  
 // output should be 6054854654
 arr.push("54");
 arr.push("546");
 arr.push("548");
 arr.push("60");
 printLargest(arr);