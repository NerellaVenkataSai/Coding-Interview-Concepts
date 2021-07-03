/**
 * pipe take collection of functions and calculate those functions from left to right
 */

 function pipe(...fns) {
   let result;
   return function(...args) {
     fns.forEach((fn, i) => result = i === 0 ? fn(...args) : fn(result))
     return result;
   }
 }

 // simpler pipe

 const simplePipe = (...fns) => (...args) => fns.reduce((acc, fn) => acc ? fn(acc) : fn(...args) , 0)

 function multiplyBy5(x) {
  return x * 5;
}

function add5(x) {
  return x + 5;
}

function square(x) {
  return x * x;
}

const p1 = pipe(add5, multiplyBy5, square)
const p2 = simplePipe(add5, multiplyBy5, square)
console.log(p1(5))
console.log(p2(5))