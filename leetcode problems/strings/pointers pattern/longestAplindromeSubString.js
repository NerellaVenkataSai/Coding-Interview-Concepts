// Longest Palindrome Substring

/**
 *   we will use inside out approach
 * 
 *   for odd 'bab' we will check left as i-1 and right as i+1 and move to next element if both are equal
 *             i
 *              
 *   for even 'cbbd' we will check left as i-1 and right i and move to next element if both are equal
 *               i
 * 
 *   max in both even and odd
 */

const getDrone = (left, right, s) => {
    while(left >= 0, right < s.length) {
        // console.log(left, right)
        if(s[left] !== s[right]) break;
        left--;
        right++;
    }
    console.log(left, right)
    return [left+1, right]
}

function longestPalindrome(str) {
    // if str length is 1 then max is 1
    let max = [0,1]

    for(let i=0; i< str.length; i++){

        let even = getDrone(i-1, i, str);
        let odd = getDrone(i-1, i+1, str);

        console.log(even);
        console.log(odd)

        let currentMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even;

        max = currentMax[1] - currentMax[0] > max[1] - max[0] ? currentMax : max 

        console.log(max)

    }

    return str.slice(max[0], max[1])
}

console.log(longestPalindrome('aba'))