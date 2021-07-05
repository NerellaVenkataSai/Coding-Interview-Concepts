function Factorial(num) {
  if(!num) 
   return 0
  if(num === 1)
    return 1

  return num * Factorial(num - 1)
}

console.log(Factorial(4))
console.log(Factorial(7))