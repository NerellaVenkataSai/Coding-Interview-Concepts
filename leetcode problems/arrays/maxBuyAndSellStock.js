/**
 *   buy and sell stock and get max out
 * 
 *   [7,1,5,3,6,4] R < L -> R++ and L++; R > L --> Math.max(result, R-l) and R++
 *   
 *   let result = 0;
 *   [7,1,5,3,6,4]
 *    L R
 * 
 *   [7,1,5,3,6,4] R < L --> L++ R++
 *    L R
 * 
 *   [7,1,5,3,6,4] R > L --> result = Math.max(result, R-L)//4; R++
 *      L R
 * 
 *   [7,1,5,3,6,4] R > L --> result = Math.max(result, R-L)//4; R++
 *      L   R
 * 
 *   [7,1,5,3,6,4] R > L --> result = Math.max(result, R-L)//5; R++
 *      L     R
 * 
 *   [7,1,5,3,6,4] R > L --> result = Math.max(result, R-L)//3; R++
 *      L       R
 * 
 *   //R reaches end max sell is 5 (6-1)
 * 
 */