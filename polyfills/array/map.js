/**
 * Map
 * return new array
 */

 var arr = [1,2,3];

 //normal map
 console.log(arr.map((val) => val * 2))

 //polyfill
 Array.prototype.myMap = function(callback) {
   const arr = this;
   let tempArray = [];
   for(let i=0; i < arr.length; i++) {
     tempArray.push(callback(arr[i],i,arr))
   }
   return tempArray
 }

 console.log(arr.myMap((currentValue,index,array) => currentValue *2))
 console.log(arr)
