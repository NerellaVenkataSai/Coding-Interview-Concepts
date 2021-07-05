function nestedEvenSum(obj) {
  let sum = 0;

  for(i in obj) {
    if(typeof obj[i] === 'object') {
       sum = sum + nestedEvenSum(obj[i])
    }
    else {
      if(typeof obj[i] === 'number' && obj[i] % 2 === 0) {
        sum = sum + obj[i]
      }
    }
  }
  return sum
}

let obj1 = {
  a: 4,
  b: 'ball',
  c: 2
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

var obj3 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

console.log(nestedEvenSum(obj3))






