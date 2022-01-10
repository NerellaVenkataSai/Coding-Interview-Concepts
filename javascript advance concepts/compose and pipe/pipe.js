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

function dividedBy(num, divisor) {
  return num/divisor
}

let divideByCurry = (divisor) => (num) => num/divisor;

const divideBy5 = divideByCurry(5)

const p1 = pipe(add5, multiplyBy5, square)
const p2 = simplePipe(add5, multiplyBy5, square)
console.log(p1(5))
console.log(p2(5))

//pipe function with two parameters  
console.log(pipe(add5, multiplyBy5, square, (d) => dividedBy(d,5))(5))

// refactored above code
console.log(pipe(add5, multiplyBy5, square, divideBy5)(5))


// Example on strings using pipe

const lorem = 'harsha nerella'

const words = (str) => str.split(" ");
const wordsCount = (arr) => arr.length;

const countWords = pipe(words, wordsCount)

console.log(countWords(lorem))
