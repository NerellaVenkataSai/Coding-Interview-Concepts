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