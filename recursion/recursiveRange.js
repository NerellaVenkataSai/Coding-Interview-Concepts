function recursiveRange(num) {
  if(num === 0) 
    return 0;

  return num + recursiveRange(num - 1)  
}

/**
 * n(n+1)/2
 */

console.log(recursiveRange(6))