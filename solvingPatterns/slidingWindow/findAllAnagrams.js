/**
 *   find all anagrams in string
 */

 function findAllAnagrams(str, anagram) {
   if(str.length < anagram) {
     return undefined
   }
   let finalArr = []
   const anagramLength = anagram.length;

   const anagramObj = {}
   const tempAnagramObj = {}
   
   for(let i of anagram) {
     anagramObj[i] = anagramObj[i] ? anagramObj[i] + 1 : 1
   }

   function compareHash(anaObj) {
    console.log(anagramObj, anaObj)
    let match = true;
    if(Object.keys(anagramObj).length === Object.keys(anaObj).length) {
      match = true;
      for(let i in anaObj) {
        if(anagramObj[i] !== anaObj[i]) {
          match = false;
          break;
        }    
      }
      console.log(match);
      return match;
    } else {
      match = false;
    }
    return match;  
   }

   for(let i=0; i < anagramLength; i++) {
     console.log(str[i])
     const char = str[i]
     tempAnagramObj[char] = tempAnagramObj[char] ? tempAnagramObj[char] + 1 : 1
   }
   compareHash(tempAnagramObj) && finalArr.push(0);

   for(let i=anagramLength; i < str.length; i++ ) {
    // ---- delete starting char ----- // 
    const deleteSChar = tempAnagramObj[str[i - anagramLength]];
    if(deleteSChar === 1) {
      delete tempAnagramObj[str[i - anagramLength]];
    } else if(deleteSChar > 1) {
      tempAnagramObj[str[i - anagramLength]] = tempAnagramObj[str[i - anagramLength]] - 1;
    }
    // ---- delete starting char ----- // 

    // Add present index char into obj //
    tempAnagramObj[str[i]] = tempAnagramObj[str[i]] ? tempAnagramObj[str[i]] + 1 : 1;
    // Add present index char into obj //

    console.log(tempAnagramObj);
    if(compareHash(tempAnagramObj)) {
      console.log(tempAnagramObj);
      
      // push starting index of anagram
      finalArr.push(i - anagramLength + 1)
    }

   }
   return finalArr
 }

 console.log(findAllAnagrams('abcdebacb', 'abc'))
            
 /**
  * a b c d e b a c d   i/p
          i
  *  
  * */ 