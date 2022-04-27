
function getSecondLargest(nums) {
    // Complete the function
    console.log(nums)
    var result=-Infinity, max = -Infinity, j=0
    for(var i=0; i< nums.length; i++) {
       // console.log(result, max, j)
       if(nums[i] > max) {
           [result, max] = [max, nums[i]]
       } else if(nums[i]<max && nums[i]>result) {
           result = nums[i]
       }
    }
    console.log( result )
  }
  
  getSecondLargest([1,1,2,3,6,4,5])