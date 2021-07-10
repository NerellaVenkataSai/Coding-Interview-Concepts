/**
 * find longest substring with all unique characters
 */

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)

    longest = Math.max(longest, i - start + 1);
    // console.log(longest)
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
    console.log(seen)
  }
  return longest;
}

console.log(findLongestSubstring("rithmschool"))
/**
 *   rithmschool
 *   
 *   longest = 0; seen={}; start = 0
 * 
 *   1st iteration
 *   longest = 1; {r: 1}
 * 
 *   2nd
 *   longest = 2; {r: 1, i: 2}
 *   
 *   |
 *   |
 *   6th = c
 *   longest = 7; {r: 1, i: 2 , t:3, h:4, m:5, s: 6, c: 7}
 * 
 *   7th
 *   longest =(longest, 7 - 4 + 1) = 7; start=4:
 */