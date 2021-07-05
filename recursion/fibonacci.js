function Fibonacci(num) {
  if(num === 0) 
    return 0
  if(num === 1)
    return 1
  
  return Fibonacci(num - 2) + Fibonacci(num - 1)
}

/**
 *   Fibonacci(2) // 1 + Fibonacci(3) // 2 = // 3
 *                     1 + Fibonacci(2)//(1) = // 2
 *                            0 + 1
 */

console.log(Fibonacci(4))
console.log(Fibonacci(28))
console.log(Fibonacci(35))