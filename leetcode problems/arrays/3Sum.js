/**
 *   3Sum
 *   Given an integer array nums, 
 *   return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0
 *   https://leetcode.com/problems/3sum/
 *   
 * 
 *   [-1,0,1,2,-1,-4]
 *   
 *   result=[]
 *   1. sort the array
 *      [-4,-1,-1,0,1,2]
 *   2. take three pointers i,j,k  j < k
 *      [-4,-1,-1,0,1,2]  // target = a[i](-4) * -1 and do two pointer sum on j and k if it is equal to target add that subset to result
 *        i  j        k
 *      [-4,-1,-1,0,1,2] // -1+2= 1 !== 4 ; 1 < 4 j++
 *        i  j        k
 *      [-4,-1,-1,0,1,2] // -1+2= 1 !== 4 ; 1 < 4 j++
 *       i      j     k
 *      [-4,-1,-1,0,1,2] // 0+2= 2 !== 4 ; 2 < 4 j++
 *       i        j   k
 *      [-4,-1,-1,0,1,2] // 1+2= 3 !== 4 ; 3 < 4 j++ i++
 *       i          j k
 *      [-4,-1,-1,0,1,2] //-1+2= 1 == 1 ; result=[[-1,-1,2]]; j++ ; k--
 *           i  j     k
 *      [-4,-1,-1,0,1,2] //0+1= 1 == 1 ; result=[[-1,-1,2],[-1,0,1]]; j++ ; k--; i++
 *           i    j k
 *      
 *      o/p [[-1,-1,2],[-1,0,1]]
 */       

function threeSum(arr) {
    if(!arr.length) return arr;
    if(arr.length < 2 && arr[0] === 0) return arr;
    let sortedArray = arr.sort((a,b) => a-b);
    let result = [];
    for(let i=0; i < sortedArray.length; i++) {
        let e=sortedArray.length-1;
        let target = sortedArray[i] * -1;

        for(let s=i+1; s < e; s++) {
            let sum = sortedArray[s] + sortedArray[e];
            if(sum < target) {
                continue;
            } else if(sum > target) {
                e--;
                continue;
            } else if(sum === target){
                result.push([sortedArray[i], sortedArray[s], sortedArray[e]])
                e--;
                continue;
            }
        }
    }
    console.log(result)
    return result;
}

console.log(threeSum([-1,0,1,2,-1,-4]))