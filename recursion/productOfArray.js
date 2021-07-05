function productOfArray(arr) {
  if(arr.length === 0) {
    return 0
  }
  if(arr.length == 1) {
    return arr[0]
  }

  return arr[0] * productOfArray(arr.slice(1))
}

console.log(productOfArray([1,2,3]))
console.log(productOfArray([1,2,3,10]))