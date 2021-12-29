/**
 *  return minPath sum from triangle arr
 * 
 *           [2], 
 *          [3,4],
 *         [6,5,7],
 *        [4,1,8,3]
 * 
 *            [2],           
 *           [0,0],
 *          [0,0,0],
 *         [0,0,0,0]
 * 
 *            [2], 
 *           [5,6],
 *          [0,0,0], --> [11,10,13]
 *         [0,0,0,0] --> [15,11,18,16]
 */

function minPathSumFromTriangle(triangle) {
   let result = [];
   result.push(triangle[0]);
   for(let i=1; i < triangle.length; i++) {
       if (i === 1) {
         const firstIndexArray = triangle[1].map(value => value + triangle[0][0]);
         result.push(firstIndexArray)
       }
       if( i > 1) {
        let arr = Array(i+1).fill(0);
        for(let j=0; j < arr.length; j++) {
            if (j === 0) {
                arr[j] = result[i-1][j] + triangle[i][j];
            }else if (j === arr.length -1) {
                arr[j] = result[i-1][j-1] + triangle[i][j];
            }else {
                console.log(result[i-1],j)
                arr[j] = Math.min(result[i-1][j-1], result[i-1][j]) + triangle[i][j];
            }
        }
        result.push(arr)
       }
   }
   console.log(result)
   return Math.min(...result[result.length-1])

}


console.log(minPathSumFromTriangle([[2],[3,4],[6,5,7],[4,1,8,3]]))
//[[2],[3,4],[6,5,7],[4,1,8,3]]