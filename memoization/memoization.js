/**
 *    Memoization should be done on pure functions
 *    Take Input ----> process  ------> Output
 * 
 *    If we get same input return cached value directly without processing expensive operation.
 */


// simple memoization implementation using closure

const memoizeMultiplyBy10 = () => {
    const cache = {}

    return (num) => {
        if(num in cache) {
            console.log('in cache', cache)
            return cache[num]
        }
        const result = num * 10;
        cache[num] = result;
        return result;
    }
}

const multiplyBy10 = memoizeMultiplyBy10();

console.log(multiplyBy10(10))
console.log(multiplyBy10(10))
console.log(multiplyBy10(10))
console.log(multiplyBy10(5))
console.log(multiplyBy10(5))

/**
 *   Instead of creating memoizedFunction every time. 
 *   We can create decorated fucntion which takes any function as param and memoizes it
 */

const memoize = (fn) => {
    const cache = {}
    
    return (...args) => {
        if(args.toString() in cache) {
            console.log(cache)
            return cache[args.toString()]
        }

        const result = fn(...args);
        cache[args.toString()] = result;
        return result;
    }
}

const addMany = (...args) => {
   return args.reduce((acc, num) => acc + num)
}

const memoizedAddMany = memoize(addMany);

console.log(memoizedAddMany(10,1,3))
console.log(memoizedAddMany(10,1,3))
console.log(memoizedAddMany(10,1,3))
console.log(memoizedAddMany(5,2))
console.log(memoizedAddMany(5,2))


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
  
   const memoizedFib= memoize(Fibonacci);
  console.log(memoizedFib(4))
  console.log(memoizedFib(28))
  console.log(memoizedFib(30))
  console.log(memoizedFib(30))




