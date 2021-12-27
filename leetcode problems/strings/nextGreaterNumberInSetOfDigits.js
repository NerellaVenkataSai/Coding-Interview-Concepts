/**
 *    Next greater number from given set of digits
 * 
 *    1. start scanning from right
 *    2. Find a digit D1 which is not in ascending order from right.
 *    3. Find a digit D2 which is right of D1, such that which is the smallest no. greater than DD1
 *    4. swap D1 and D2
 *    5. reverse or sort asc after swapping from the index next to D1.
 * 
 *    6. if D1 is 0 means Digits are in desc order which means we can't get next greater number
 */

function nextGreaterNumber(n) {
   let nS = `${n}`.split('')

   console.log(nS.length)

   if(!nS.length || nS.length === 1) {
       return -1;
   }

   let D1=null
   let D2=0

   // Find D1 which is breaking asc order from right
   for(let i=nS.length; i >=0; i--) {
       
        if(nS[i] > nS[i-1]) {
            D1 = i-1
            break;
        }
   }

   console.log(D1)
   if(!D1 && D1 !== 0) {
       return -1
   }


  // Find D2 which is min greater than D1
   for(let i=nS.length; i >=0 ; i--) {
         if(nS[D1] < nS[i]) {
            D2 = i;

            //swap D1 and D2
            let temp = nS[D1];
            nS[D1] = nS[D2];
            nS[D2] = temp;
            break;
         }
         
   }

   console.log(D2)

   if(D1 === nS.length -2) {
    return parseInt(nS.join(''))
   }
   
   const reverseRightMost = nS.splice(D1+1).reverse()
       
   return parseInt([...nS, ...reverseRightMost].join(''))
   

}

console.log(nextGreaterNumber(230241))

var s = "123"
s = s[2] = 4
console.log("abc".split(''))

