/**
 *  Find Next Greater Element in Array
 */

 function nextGreaterElementInArray(arr) {
   let finalArray = Array(arr.length).fill(-1);
   let stack = [0];

  function stackAndFinalArraySetter(stackArr, currentIndex) {
    const stockArrayClone = [...stackArr];
    const stackLastElement = stockArrayClone[stockArrayClone.length - 1];
    
    if(!stackArr.length || arr[stackLastElement] > arr[currentIndex]) {
       stockArrayClone.push(currentIndex)
       return stockArrayClone;
    }
    if(arr[stackLastElement] < arr[currentIndex]) {
      finalArray[stackLastElement] = arr[currentIndex]
      stockArrayClone.pop()
    }
    
    return stackAndFinalArraySetter(stockArrayClone, currentIndex)
    
  } 

  for(let i=1; i < arr.length; i++) {

    if(arr[i] <= arr[stack[stack.length-1]]) {
      stack.push(i);
      continue;
    }
    stack = stackAndFinalArraySetter(stack, i)
  }

  return finalArray;
 }


 /**
  *  [18, 7, 6, 12, 15]
  * 
  *  finalArray = Array(length).fill(-1)
  *  // push index of element if last element is less than or equal to inserting element otherwise pop until we reach that element in stack
  *  stack = []
  *  finalArray = [-1, -1, -1, -1, -1]
  *  stack = [0]
  *  stack = [0, 1]
  *  stack = [0, 1, 2]
  *  stack = [0, 1, 2] 
  *  // 12 --> 12 > 6 and 12 > 7 so pop 1, 2 indexes in stack
  *  stack = [0, 3]
  *  finalArray = [-1, 12, 12, -1, -1]  
  *  stack = [0, 4]
  *  finalArray = [-1, 12, 12, 15, -1] 
  */

  /**
   *  Test Inputs
   *  [18, 7, 6, 12, 20] // o/p [20, 12, 12, 20, -1]
   * */ 

  console.log(nextGreaterElementInArray([18, 7, 6, 12, 15]))

 