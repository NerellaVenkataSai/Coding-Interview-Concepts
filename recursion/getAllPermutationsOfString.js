/**
 *  find all permutations in string
 */

let findPermutations = (string) => {
  
  if (!string || typeof string !== "string"){
   return "Please enter a string"
 } else if (string.length < 2 ){
   return string
 }

 let permutationsArray = [] 
 
 for (let i = 0; i < string.length; i++){
    let char = string[i]

    // To skip when there is a duplicate
    if (string.indexOf(char) != i)
    continue

    let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

   
   // Call procedure p recursively on each subproblem
   // Combine the results from the subproblems
    for (let permutation of findPermutations(remainingChars)){
      permutationsArray.push(char + permutation) 
    }
 }
 return permutationsArray
}

console.log(findPermutations("abc"))
