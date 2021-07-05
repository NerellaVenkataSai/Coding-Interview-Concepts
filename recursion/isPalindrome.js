function isPalindrome(str) {
   const realString = str;
   const reverseString = function (istr) {
    if(istr.length <= 1){
      return istr;
    }
    return reverseString(istr.slice(1)) + istr[0];
   }
   return reverseString(realString) === realString
  
}

console.log(isPalindrome('tacocat'))
console.log(isPalindrome('amanaplanacanalpanama'))
console.log(isPalindrome('amanaplanacanalpandemonium'))
