/**
 *  Javascript Hoisting
 * 
 *  https://thejs.dev/jmitchell/what-is-hoisting-and-how-it-works-in-javascript-e1e
 *  Moves all variable and function declarations to the top(in memory)
 * 
 *  And 
 */

console.log(x)
x1=6
console.log(x1)

var x = 5
var x1
console.log(x1)

console.log(foo); // prints 'undefined'
var foo = "bar";

// let and const are not hoisted

// console.log(y)
// let y=10

// Function declaration will be hoisted

stepOne()
function stepOne(){
    console.log('hello')
}

// Function initialization wont be hoisted

// fOne()
// const fOne = () => {
//     console.log('in fOne')
// }
// fOne()