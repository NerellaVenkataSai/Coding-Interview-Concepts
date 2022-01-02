/**
 * ForEach
 * return undefined
 *  */ 

console.log(Array.prototype)

var arr = [1,2,3];

//Normal forEach
arr.forEach((currentValue, index, arr) => {
   console.log(currentValue, index, arr);
})


Array.prototype.myForEach = function(callback) {

  // Here this points to the arr
  console.log(this)
  
  const array = this;
  for(let i=0; i < arr.length; i++) {
    callback(array[i], i, array)
  }
}


arr.myForEach((currentValue, index, arr) => {
  console.log(currentValue, index, arr)
})