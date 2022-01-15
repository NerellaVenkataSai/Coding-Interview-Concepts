/**
 *  Generators and iterators
 * 
 *  Generator functions provide a powerful alternative: 
 *  they allow you to define an iterative algorithm by 
 *  writing a single function whose execution is not continuous. 
 *  Generator functions are written using the function* syntax.
 * 
 *  When called, generator functions do not initially execute their code. 
 *  Instead, they return a special type of iterator, called a Generator.
 *  When a value is consumed by calling the generator's next method, 
 *  the Generator function executes until it encounters the yield keyword.
 */

//Examples

// Example 1

function* simpleGenerator() {
    // this wont be executed until it triggers first next. to test comment all nexts and test.
    console.log('before 1')
    yield 1;
    console.log('before 2')
    console.log('after 2')
    yield 2;
    console.log('before 3')
    console.log('after 3')
    yield 3;
    console.log('after 3')
}

// run generator
const generateObj = simpleGenerator()
console.log(generateObj)
// next will execute until it finds yield
console.log(generateObj.next())
console.log(generateObj.next())
// it will pause at 2 until we call next
// console.log(generateObj.next())
// console.log(generateObj.next())

// multiple generators
// we can have multiple generators on same generator function. As it returns brand new instance
const generateObj1 = simpleGenerator();
console.log(generateObj1)
// next will execute until it finds yield
console.log(generateObj1.next())
console.log(generateObj1.next())

// common use cases of generators

// Infinite loop

function* idGenerator() {
    let id = 0
    while(true) {
        yield id
        id++
    }
}

const idObject = idGenerator()
console.log(idObject.next())
console.log(idObject.next())
console.log(idObject.next())
console.log(idObject.next())

//To rest
const idObject1 = idGenerator()
console.log(idObject1.next())
console.log(idObject1.next())
console.log(idObject1.next())
console.log(idObject1.next())

// Generator with unique options 

function* idGeneratorWithMoreOptions() {
    let id = 0
    while(true) {
       // take value from yield sent using next param 
       const increment =  yield id
       console.log(increment)
       if(!!increment) {
           id += increment
       } else {
        id++
       }
    }
}

const idObjectwithOptions = idGeneratorWithMoreOptions()
console.log(idObjectwithOptions.next())
console.log(idObjectwithOptions.next())
console.log(idObjectwithOptions.next(3))
console.log(idObjectwithOptions.next())
console.log(idObjectwithOptions.next())
//To exit out of generator function
console.log(idObjectwithOptions.return(10))
console.log(idObjectwithOptions.next())


// Iterators using generators

function* iterateArray(arr) {
   for(let i=0; i<arr.length; i++) {
       yield arr[i]
   }
}

const arrIteratorObj = iterateArray([1,3,5]);
console.log(arrIteratorObj.next())
console.log(arrIteratorObj.next())
console.log(arrIteratorObj.next())
console.log(arrIteratorObj.next())
