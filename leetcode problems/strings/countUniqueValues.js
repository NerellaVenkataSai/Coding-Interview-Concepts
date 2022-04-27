

  // /Red(?!head)/ matches Red only if it not followed by head:

  //https://www.smashingmagazine.com/2019/02/regexp-features-regular-expressions/

  console.log(/(\w\w)\1/.test('abab')); // \1 


  str='ewew r rrfvfvr';str1=str[0].toUpperCase();
for (var i=1 ;i< str.length;i++) {
    if( str[i -1] === ' ') { 
        str1 += str[i].toUpperCase()
        console.log(str[i], str[i+1], str[i+1].toUpperCase());
    } else {
        str1 += str[i];
    }

} // Capitalize first char in word




// var a, b = a = 'A';  assignng two variables correct way

function list() {
    return Array.prototype.slice.call(arguments);
  }

  const list1 = list(1, 2, 3);

  function countUniqueValues(arr){
    console.log(arr)
      var count = 0, flag=0, flag2=1
      while( flag < arr.length){
          //console.log(arr[flag] , arr[flag2])
          if(arr[flag] != arr[flag2]) {
              count++
              flag = flag2
              //console.log('count',count)
          }
          flag2++
      }
      console.log(count)
      return count;
    }