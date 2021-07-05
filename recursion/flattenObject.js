let flattenObj = function(obj) {
  let returnObj = {};
  for(let i in obj) {
    if(typeof obj[i] === 'object') {
      const flatObj = flattenObj(obj[i])
      console.log(flatObj)
      for(let innerI in flatObj) {
        returnObj[`${i}.${innerI}`] = flatObj[innerI]
        console.log(i,innerI, returnObj);
      }
    } else {
      returnObj[i] = obj[i];
      console.log(returnObj)
    }
  }
  return returnObj;
}

const obj = {
  'd': '1',
  'a':{ 
  'b':{ 'b2':2 }, 
  'c':{ 'c2':2, 
        'c3':3 
      } 
  },
  e: 1    
}
console.log(flattenObj(obj))