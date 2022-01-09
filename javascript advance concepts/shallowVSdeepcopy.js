/**
 *    shallow copy vs deep copy
 */
// Javascript data types

// primitive -- pass by value
// values are immutable and to change the value we need to reassign
/**
 *   undefined
 *   null
 *   number
 *   string
 *   bigInt
 *   symbol
 */

let x=10
let y=x
console.log(x,y)
y=20
console.log(x,y)

//Immutables
let str="abc";
str[0]='b'
// primitives are immutables
console.log(str)

//Structural -- pass by reference
// values are mutable
/**
 *  Object -- Array, Object, Set, Map, Datw
 *  function
 */

// pass by reference
let a={
    id: 1
}

let b=a

console.log(a,b)
b.id=2
console.log(a,b)


// shallow vs deep copy
/**
 *   shallow copy works only on flatten objects or arrays
 *   In nested objects or arrays if you try to mutate it will mutate in all references
 */

// deep copy

let obj = {id: 1, name: 'harsha', details: {address: {name: 'kavali'}}}

// with shallow copy
let temp1 = {...obj}
temp1.details.address.name = 'kavali1'
//parent obj also will be changed 
console.log(temp1)
console.log(obj)

// deep copy without libraties
//1. below logic won't work for dates, functions, Maps, sets, undefined, and other complex data types
let temp2 = JSON.parse(JSON.stringify(obj))

temp2.details.address.name = 'kavali2'
// deep copy wont change parent obj
console.log(temp2)
console.log(obj)

//2

const deepClone = (prop) => {
    if(typeof prop !== 'object' || prop === null) return prop;

    const newObj = Array.isArray(prop) ? [] : {}

    for(let key in prop) {
        const value = prop[key];

        newObj[key] = deepClone(value);
    }

    return newObj;
}

let cloned = deepClone(obj)
cloned.details.address.name = 'kavali5'
console.log(cloned)
console.log(obj)



