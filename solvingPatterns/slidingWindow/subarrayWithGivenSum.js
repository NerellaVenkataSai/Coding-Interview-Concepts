/**
 *  return subarray which gives sum
 *  https://www.youtube.com/watch?v=Ofl4KgFhLsM
 */

 function getSubArrayOfGivenSum(arr, sum) {

    if(!arr) return undefined

    let start = 0
    let end = 0;
    let total = 0;

    while(start < arr.length) {

      if(total < sum && end < arr.length) {
          total = total + arr[end];
          end++
          console.log(total)
          if(total === sum) {
            return arr.slice(start, end)
          }
      }

      if(total >= sum) {
        total = total - arr[start];
        start++;
        console.log(total)
        if(total === sum) {
          return arr.slice(start, end)
        }
      }
    }
    return 'No SubArray';
 }

 /** s
  * [1, 4, 20, 3, 10, 5]  33
  *  E
  */

  console.log(getSubArrayOfGivenSum([1, 4, 20, 3, 10, 5], 10))
  console.log(getSubArrayOfGivenSum([1, 4, 20, 3, 10, 5], 33))
  console.log(getSubArrayOfGivenSum([1, 4, 20, 3, 10, 5], 5))
     