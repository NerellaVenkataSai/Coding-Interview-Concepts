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