/**
 *  pascals triangle
 */

function pascalsTriangle(numRows) {
    let result=[]
    for(let i=1; i <= numRows; i++) {
        let arr = Array(i).fill(1);
        if(arr.length > 2) {
            let prevArray = result[i-2];
            console.log(prevArray)
            let prevArrSum = [];
            for(let s=0; s < prevArray.length - 1; s++) {
                prevArrSum.push(prevArray[s]+prevArray[s+1])
            }
            console.log(prevArrSum)
            
            for(let j=1; j < arr.length-1; j++) {
                arr[j] = prevArrSum[j-1]
            }
        }

        result.push(arr)

    }

    return result;

}

console.log(pascalsTriangle(5))
