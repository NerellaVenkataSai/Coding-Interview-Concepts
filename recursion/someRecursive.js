
const isOdd = val => val % 2 !== 0;
function someRecursive(arr, callback) {
   function calSome(iarr) {
      console.log(iarr)
      if(iarr.length === 0) {
        console.log('in o')
        return false
      }
      if(callback(iarr[0])){
        console.log('in true')
        return true
      }
      return calSome(iarr.slice(1))
   }
   return calSome(arr)
}

console.log(someRecursive([2,4], isOdd))

console.log(someRecursive([2,4,3], isOdd))

console.log(someRecursive([], isOdd))