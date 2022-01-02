/**
 *  https://leetcode.com/problems/transpose-matrix/
 *  Transpose matrix
 *          C
 *  I/p R [[1,2,3],   
 *         [4,5,6]]
 * 
 *   result= CxR = [[0,0],
 *                  [0,0],
 *                  [0,0]]
 * 
 *   loop I/p matrix
 *   result[C][R] = ip[R][C]
 * 
 * 
 */

function transposeMatrix(matrix) {
    let result = Array.from({length: matrix[0].length}, () => Array(matrix.length).fill(0));

    for(let R=0; R<matrix.length; R++) {
        for(let C=0; C < matrix[0].length; C++) {
            result[C][R] = matrix[R][C]
        }
    }
    
    console.log(result);
    return result;
}

console.log(transposeMatrix([[1,2,3],[4,5,6]]))
