
function stringifyNumbers(obj) {
  let returnObj = {};
    
       for(i in obj) {
         if(typeof obj[i] === 'object') {
          console.log(i)
          returnObj[i] = stringifyNumbers(obj[i]);
          console.log(returnObj)
         } else {
           if(typeof obj[i] === 'number') {
            returnObj[i] = obj[i].toString()
           } else {
            returnObj[i] = obj[i]
           }
         }
       }

  return returnObj;
}

var o = {
  a: 1,
  b: 'a',
  c: {
    c1: 'a',
    cI: {
      d: 2
    }
  }
}

console.log(stringifyNumbers(o))





var obj = {
  num: "1",
  test: [],
  data: {
      val: "4",
      info: {
          isRight: true,
          random: "66"
      }
  }
}