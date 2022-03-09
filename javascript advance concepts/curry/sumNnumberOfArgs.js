/**
 *   curry
 *   function sum with n arguments
 */

 const sum= (x) => (y) => (z) => x+y+z;
 console.log(sum(1)(2)(3));
 
 // for n arguments add(1)(2)...(n)
 function add(a) {
     return function(b) {
         if(b) {
             return add(a+b)
         }
         return a
     }
 }
 
 console.log(add(1)(2)(3)(4)())
 
 
 // add(1,2..n)(5,6…n)…(n)()
 function addN(...args) {
     let a = args.reduce((a, b) => a + b, 0)
     return function(...args){
       let b = args.reduce((a, b) => a + b, 0)
       if(b){
         return add(a+b)
       }
       return a
     }
   }
 
   console.log(addN(1,2)(3,4)())