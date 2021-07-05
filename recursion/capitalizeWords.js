function capitalizeWords(arr) {
  if(arr.length === 1) {
    return arr[0].toUpperCase();
  }
  return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words))

