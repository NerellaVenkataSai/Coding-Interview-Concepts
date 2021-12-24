/**
 *  Two Sum using get all subArrays of given sum gives 90% result for two sum problem
 *  https://leetcode.com/problems/two-sum/
 */

function twoSum(nums, target) {
    const prefixSumObj = {}
    const numsIndexes={}
    let currentIndexSum = 0;
    let subArrays = [];
    let subArraysIndexes = [];
    for(let i = 0 ; i< nums.length; i++) {
        numsIndexes[nums[i]] = i;
    }
    console.log(numsIndexes)
    for(let i=0; i < nums.length; i++) {
       currentIndexSum += nums[i];
       if(!prefixSumObj[currentIndexSum]) {
        prefixSumObj[currentIndexSum]  = i
       }
       console.log(prefixSumObj)
       
       if(currentIndexSum === target) {
           subArrays.push(nums.slice(0, i+1))
           subArraysIndexes.push([0, i])
       } else if(prefixSumObj[currentIndexSum - target] != undefined) {
            let startIndex = prefixSumObj[currentIndexSum - target]
            subArrays.push(nums.slice(startIndex + 1, i+1))
            subArraysIndexes.push([numsIndexes[nums[startIndex+1]], i])
       }

    }

    console.log(subArrays)
    console.log(subArraysIndexes)
    const twoIndexes = subArraysIndexes.filter(arr => arr.length === 2)
    return twoIndexes.length ? twoIndexes[0] : []
}

console.log(twoSum([2,7,11,5], 9))
