// longest substring with atmost k distinct characters
/**
 *  Given a string and integer k return the length of longest substring with atmost k distinct characters
 * 
 *  // examples
 *   i/p: eceba k =2
 *   o/p: 3 ("ece" substring)
 * 
 *   i/p: "aa" k =1
 *   o/p: 2 ("aa" substring)
 */


function longestSubStringWithAtmostKDistinctChars(str, k) {
    let startWindow = 0;
    let seenChar = new Map();
    let max = 0;
    for(let i=0; i<str.length; i++) {
      
        if(!seenChar.get(str[i])) seenChar.set(str[i], 1)
        else seenChar.set(str[i], seenChar.get(str[i]) + 1)
        console.log(seenChar)
        while(seenChar.size > k) {
            if(seenChar.get(str[startWindow]) > 1) seenChar.set(str[startWindow], seenChar.get(str[startWindow]) - 1)
            else seenChar.delete(str[startWindow]);
            startWindow++;
        }
        console.log(seenChar)
        max = Math.max(max, i - startWindow + 1)
    }

    return max
}

console.log(longestSubStringWithAtmostKDistinctChars('eceba', 2))
