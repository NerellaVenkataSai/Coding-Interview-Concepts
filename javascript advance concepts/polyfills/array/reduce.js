/**
 * reduce 
 * return accumulated value
 * 
 */

 const arr = [{id:'123', name:'harsha'}, {place: 'hyd', state: 'ts'}]

 console.log(arr.reduce((acc, currentValue, index, arr) => ({...acc, ...currentValue}), {}))

 //polyfill

 Array.prototype.myReduce = function(callback, initialValue) {
   let accumulator = initialValue;

   for(let i=0; i<this.length; i++) {
     accumulator = callback(accumulator, this[i], i, this);
   }
   return accumulator;
 }

 console.log(arr.myReduce((acc, currentValue, index, arr) => ({...acc, ...currentValue}), {}))


 let sumarr = [1,2,3,4,5]
 console.log(sumarr.myReduce((acc, currentValue, index, arr) => (acc+currentValue), 0))
