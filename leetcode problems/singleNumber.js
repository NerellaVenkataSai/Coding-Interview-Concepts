//q: https://leetcode.com/problems/single-number/
// Given a non-empty array of integers nums, every element appears twice except for one. 
// Find that single one.

// This solution only works for elements appear twice in array.

let singleNumber = function(nums) {
    let result = 0;
    for(let i=0; i < nums.length; i++) {
      result = result ^ nums[i]
    }
    return result
};

console.log(singleNumber([1,2,1,2,4])) //4