/**
 *  merge intervals
 *  https://leetcode.com/problems/merge-intervals/
 * 
 *   [[1,3],[2,6],[8,10],[15,18]]
 *   o/p [[1,6],[8,10],[15,18]]
 * 
 *   1. first sort array by starting time
 *   2. loop through sort array and merge if current start time overlaps with prev end time
 */

function mergeIntervals(arr) {
    let result=[]
    arr.sort((a,b) => a[0] - b[0])
    console.log(arr)

    result.push(arr[0])
    console.log(result)
    for(let i=1; i < arr.length; i++) { 
       if(arr[i][0] <= result[result.length - 1][1]) {
         let next =  result[result.length - 1][1] > arr[i][1] ? result[result.length - 1][1] : arr[i][1]
         result[result.length - 1] = [result[result.length - 1][0],next]
       } else {
         result.push(arr[i])
       }
    }

    console.log(result)
    return result


}

//[[1,4],[0,1]]
console.log(mergeIntervals([[2,3],[5,5],[2,2],[3,4],[3,4]]))


/**
 *  [2,5,2,3,3]
*    i       j
 *  [0,0,0,0,0]
 */