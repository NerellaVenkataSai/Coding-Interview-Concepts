// two sum
/**
 *    first get all indexes into obj of array elements
 *    
 *    loop through array 
 *    if (target - current array value is in numsIndexes obj and !== current i )then 
 *    return [i, numsIndexes[target - current array value]]
 * 
 */

const twoSum = (array, target) => {
    const numsIndexes={}
    for(let i = 0 ; i< array.length; i++) {
        numsIndexes[array[i]] = i;
    }
    
    for(let i = 0 ; i< array.length; i++) {
        if(numsIndexes[target - array[i]] >= 0 && numsIndexes[target - array[i]] !== i) {
            return [numsIndexes[target - array[i]], i]
        }
    }
}

console.log(twoSum([3,3], 6))