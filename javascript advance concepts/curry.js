//currying
// ** Checkout example 4 and 3 interesting and important concept ** //

/**
 *   currying takes a function that recieves more than one parameter and 
 *   breaks it into a series of unary (one parameter) functions
 * 
 *   Therefore curried function takes one parameter at a time
 */

// Example 1
function buildSandwich(ingredient1) {
    return (ingredient2) => {
        return (ingredient3) => {
            return `${ingredient1} ${ingredient2} ${ingredient3}`
        }
    }
}

console.log(buildSandwich('egg')('cabbage')('tomato'))

// refactored above curried function
const buildSammy = (ingredient1) => (ingredient2) => (ingredient3) => `${ingredient1} ${ingredient2} ${ingredient3}`

console.log(buildSammy('egg')('cabbage')('tomato'))

//Example 2
// partially applied functions are common use of currying (closure)
// function will wait until all parmeters has been called
const multiply = x => y => x * y;

console.log(multiply(2)(3))
const multipleBy10 = multiply(10)
console.log(multipleBy10)
console.log(multipleBy10(2))

// Example 3
// Another common use of currying is function composition
// Allows calling small functions in order (similar to decorators)

const addCustomer = fn => (...args) => {
    console.log('in add customer')
    return fn(args)
}

const processOrder = fn => (...args) => {
    console.log('in processing order');
    return fn(...args)
}

let completeOrder = (...args) => `Order id ${args} got completed`

// processOrder will have reference for completeOrder function
completeOrder = processOrder(completeOrder)
// addCustomer will have reference for processOrder function
completeOrder = addCustomer(completeOrder)
// wait till params are passed once it's passed it will trigger
// addCustomer --> processOrder --> completeOrder

console.log(completeOrder(1000))

// Example 4
//******* Important */
// How to convert multiple parameter function into curried function

const curry = (fn) => {

    return curried = (...args) => {
        if(args.length !== fn.length) {
            return curried.bind(null, ...args)
        }
        console.log(args)
        return fn(...args)
    }
}

const total = (x,y,z) => x+y+z;

const curriedTotal = curry(total);
console.log(curriedTotal(10,20,30))
console.log(curriedTotal(10)(20)(30))

const add30 = curriedTotal(10)(20);
console.log(add30)
console.log(add30(70))