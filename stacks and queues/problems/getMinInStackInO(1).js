/**
 *   design stack to get min in O(1) time
 */

 function getMinInStack(arr) {

   if(arr.length === 1) return arr[0]

   let minStack = [arr[0]];

   for(let i = 1; i < arr.length; i++) {
     if(arr[i] <= minStack[minStack.length - 1]) {
       minStack.push(arr[i])
       continue;
     }
     if(arr[i] > minStack[minStack.length - 1]) {
       minStack.push(minStack[minStack.length - 1])
     }
   }
   console.log(minStack)
   return minStack[minStack.length - 1]
 }

 /**
  *  approach
  *  [8, 10, 6, 3, 7]
  *  Take two stacks 
  *  Push element in to stack
  *    compare with last element in minStack  
  *    if(stack[stack.length - 1] < minStack[minStack.length -1 ]) { minStack.push(stack.length - 1)}
  *    else minStack.push(minStack.length -1 )
  *    
  *  stack = [8]
  *  minStack = [8]
  * 
  *  stack = [8, 10]
  *  minStack = [8, 8]  
  * 
  *  stack = [8, 10, 6]
  *  minStack = [8, 8, 6] 
  * 
  *  stack = [8, 10, 6, 3]
  *  minStack = [8, 8, 6, 3]
  *  
  *  stack = [8, 10, 6, 3, 7]
  *  minStack = [8, 8, 6, 3, 3]
  * 
  *  Now you can check by popping in both stack and minStack and get minStack of original stack in O(1) time.
  * 
  *  space complexity O(N) timeComplexity O(1)
  */

  var ip = [8, 10, 6, 6, 3, 7]
  console.log(getMinInStack(ip)) //3
  ip.pop()
  console.log(getMinInStack(ip)) //3
  ip.pop()
  console.log(getMinInStack(ip))//3
  ip.pop()
  console.log(getMinInStack(ip))// 6
  ip.pop()
  console.log(getMinInStack(ip))// 8
  ip.pop()
  console.log(getMinInStack(ip))// 8