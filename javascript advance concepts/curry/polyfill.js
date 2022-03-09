
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