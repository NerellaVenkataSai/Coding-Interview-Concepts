/**
 * find 
 * return first value in order
 */

 var arr = [1,2,3,5,6,7,8];

 //normal Find
console.log(arr.find((val) => val === 2))

//Polyfill

Array.prototype.myFind = function(callback) {
  console.log(this)
  const arr = this;
  let val;
  for(let i=0; i<arr.length; i++) {
    // console.log(i in arr)
    if(callback(arr[i],i, arr)) {
      console.log(i)
      return arr[i];
    }
  }
  return val
}

var arr1 = undefined
console.log(arr.myFind((currentValue, index, arr) => currentValue === 6))
 
