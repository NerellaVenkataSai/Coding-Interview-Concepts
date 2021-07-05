
let flattenArray = function(arr) {
  let returnArr = [];
  for(let i of arr) {
    // console.log(i)
    if(Array.isArray(i)) {
      const flatArr = flattenArray(i);
      // console.log(flatArr);
      returnArr = [...returnArr, ...flatArr]
    } else {
      returnArr.push(i)
      // console.log(returnArr)
    }
  }
  return returnArr;
}




console.log(flattenArray([1, 2, 3, [4, 5] ]) )
console.log(flattenArray([1, [2, [3, 4], [[5]]]]) )
console.log(flattenArray([[1],[2],[3]]) )
console.log(flattenArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) )

