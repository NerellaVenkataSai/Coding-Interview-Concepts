/**
 *   es5 Object 
 *   1. writable enumerable configurable
 */

 var newObject = {a: 1};

 // set Property
newObject.a = 2
newObject.b = 2
console.log(newObject)

Object.defineProperty(newObject, 'a', {writable: false})
// now we can't change value of 'a'
newObject.a = 3
console.log(newObject)

Object.defineProperty(newObject, 'a', {writable: false, enumerable: false})
// now 'a' property will not be accessible in loops
console.log(newObject)
console.log(Object.keys(newObject))
for(let i in newObject) {
    console.log(i)
}

Object.defineProperty(newObject, 'a', {writable: false, enumerable: true, configurable: false});
//now you wont be able to delete 'a' property

delete newObject.a
console.log(newObject)

