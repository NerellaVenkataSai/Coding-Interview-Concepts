/**
 *  https://leetcode.com/problems/rotate-image/
 *  Rotate image in 90 degress
 * 
 *   [  C              
 *   R [1,2,3],  
 *     [4,5,6],   
 *     [7,8,9]
 *   ]
 *   
 *   loop matrix and swap (2,4)(3,7) and (6,8) looks like
 *   [
 *     [1,4,7],
 *     [2,5,8],
 *     [3,6,9]
 *   ]
 *   
 *   and reverse each index to get o/p [[7,4,1],[8,5,2],[9,6,3]]
 * 
 */

function rotateImage(matrix) {
    for(let r=0; r < matrix.length; r++) {
        for(let c=r; c < matrix[0].length; c++) {
            [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]]
        }
    }

    console.log(matrix)
    return matrix.map(row =>  row.reverse())

}

console.log(rotateImage([[1,2,3],[4,5,6],[7,8,9]]))