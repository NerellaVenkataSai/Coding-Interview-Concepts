/**
 * Filter 
 * return new filtered array
 */

 const arr = [1,2,3,4,5,6,7,8,9];

 console.log(arr.filter((val, index, arr) => val % 2 === 0))

 //polyfill

 Array.prototype.myFilter = function(callback) {
   const arr = this;
   let tempArry = [];

   for(let i=0; i<arr.length; i++) {
     console.log(callback(arr[i], i, arr))
     callback(arr[i], i, arr) && tempArry.push(arr[i])
   }
   return tempArry;
 }

 console.log(arr.myFilter((value) => value%2 !== 0))
 console.log(arr)