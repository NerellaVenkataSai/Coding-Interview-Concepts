/**
 * compose
 * takes multiple function and calculate those functions from right to left and return result 
 */


 function compose(...fns) {
   const length = fns.length;
   let result;
   return function(...args) {
     for(let i = length -1; i >= 0; i--) {
       result = i === length -1 ? fns[i](...args) : fns[i](result)
     }
     return result;
   }
 }

 //simplerCompose
 const simplerCompose = (...fns) => 
  (...args) => fns.reduceRight((acc, fn, i) => { 
   acc = i === fns.length -1 ? fn(...args) : fn(acc)
   return acc
  }, 0) 



 function multiplyTwoValues(x,y) {
   return x * y;
 }

 function add5(x) {
   return x + 5;
 }

 function square(x) {
   return x * x;
 }

 let c1 = compose(add5, square, multiplyTwoValues)
 let c2 = simplerCompose(add5, square, multiplyTwoValues)
 console.log(c1(5,5))
 console.log(c2(5,5))
