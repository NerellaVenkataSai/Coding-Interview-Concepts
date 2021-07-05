function getArrayOfString(obj) {
   let tempArr = []
   for(i in obj) {
     if(typeof obj[i] === 'object') {
       let arr = getArrayOfString(obj[i]);
       tempArr = [...tempArr, ...arr]
     } else {
       if(typeof obj[i] === 'string') {
         tempArr.push(obj[i])
       }
     }
   }
   return tempArr;
}

let obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

console.log(getArrayOfString(obj))