/**
 * https://leetcode.com/problems/set-matrix-zeroes/ 
 * set matrix zeros
 * 
 */

function setMatrixZeros(matrix) {
 let allZeroIndexes = [];
 for(let i=0; i < matrix.length; i++) {
     for(let j=0; j < matrix[0].length; j++) {
         if(matrix[i][j] === 0) {
             allZeroIndexes.push([i,j,matrix[i][j]])
         }
     }
 }
 console.log(allZeroIndexes)
   while(allZeroIndexes.length) {
       let [row, column, value] = allZeroIndexes.pop();
       for(let m=0; m < matrix.length; m++) {
         if(m === row) {
             matrix[m] = Array(matrix[0].length).fill(0)
         }
         matrix[m][column] = 0
       }
   }
   console.log(matrix)
   return matrix
}

console.log(setMatrixZeros( [[1,2,1],[1,0,1],[1,1,1]]))

/**
 *   [[0,1,2,0],
 *    [3,4,5,2],
 *    [1,3,1,5]
 *   ]
 */
let a = [[1,2,1],[1,0,1],[1,1,1]]
console.log(a[0][0-1])