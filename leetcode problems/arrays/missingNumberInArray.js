/**    missing number in array 
 * 
 *    goal TC: O(n) SC: O(1)
 * 
 *    Two Approaches
 *     
 *    1. hashing array of numbers and looping through the array and finding missing number
 *       TC:O(n) SC: O(n)
 * 
 *    best approach
 *    get sum of numbers by n =  n(n+1)/2
 */


function MissingNumberInArray(arr) {
    const length = arr.length;

    const arrSum = arr.reduce((acc, value) => acc + value)

    console.log(arrSum)

    return (length * (length + 1)/2) - arrSum
}

console.log(MissingNumberInArray([0,1,3]))
console.log(3*(3+1)/2)