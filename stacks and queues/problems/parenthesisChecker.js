/**
 *  parenthesis checker
 * 
 *  check  parenthesis are balanced or not
 */

 function parenthesisChecker(str) {
   let stack = [];
   let openParenthesis = {
     "[": "]",
     "(": ")",
     "{": "}",
   }
   let closeParenthesis = {
    "]": "[",
    ")": "(",
    "}": "{",
  }
   for(let i of str) {
     if(openParenthesis[i]) {
       stack.push(i);
       continue;
     }
     if(closeParenthesis[i]) {
       if(stack.pop() !== closeParenthesis[i])
         return false;
     }
   }
   console.log(stack)
   return !stack.length
 }


 /**
  *   https://www.youtube.com/watch?v=FPvAfpSXjRw&list=PLEJXowNB4kPzEvxN8ed6T13Meet7HP3h0&index=4
  *   process
  *   1.
  *   stack = push all the opening parenthesis
  *   when we get closing bracket pop the stack and verify closing bracket is matching the opening bracket otherwise return false
  *   2.
  *   after total iteration of string verify stack is empty or not if it's empty true else false
  */

  /**
   *   Test Inputs
   *   [{(})] // false
   *   [{()}] // true
   *   [{(})]( // false
   */

  console.log(parenthesisChecker('[{A*(B+C)}/D]'))