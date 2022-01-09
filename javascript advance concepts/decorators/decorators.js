/**
 *   Decorator wrap a function in another function 
 * 
 *   These wrapper "decorate" the original function with new capabilities
 * 
 *   BEnifits Dont repeat yourself(D.R.Y) and clean code
 */

// Example 1 Add many

let sum = (...args) => {
    return args.reduce((acc, val) => acc + val)
}

let rectangle = (l, w) => {
    console.log(l,w)
    return l * w;
}

console.log(rectangle(1,2))

// below decorators add extra capabilities for above core rectangle function
let validateParams = (fn) => {

    return (...params) => {
        if(params.length !== fn.length) {
            throw new Error(`parmas length doesn't match with ${fn.name} params` )
        } else {
            console.log(...params)
            return fn(...params)
        }
    }
}

let NumberParamsCheck = (fn) => {

    return (...params) => {
        params.forEach(param => {
            if(!Number.isInteger(param)) {
                throw new Error(`${fn.name} params should be integers`)
            }
        });

        return fn(...params)
    }
}

// first decorator will check valid number of params and second decorator will check params are numbers or not
rectangle = validateParams(rectangle)
rectangle = NumberParamsCheck(rectangle)
console.log(rectangle(2, 3))