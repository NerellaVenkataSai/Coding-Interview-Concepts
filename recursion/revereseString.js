let reverseString = function(str) {
  if(str.length <= 1) {
    console.log(str)
    return str;
  }
  console.log(str)
  return reverseString(str.slice(1)) + str[0]
  
}

console.log(reverseString("bfg"))