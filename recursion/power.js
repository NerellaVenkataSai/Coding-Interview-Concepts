function Power(base, power) {
  if(power === 0) {
    return 1;
  }
  return base * Power(base, power - 1)
}


console.log(Power(2, 0))
console.log(Power(2, 2))

/**
 *  Power(2,2)
 * 
 *  2 * power(2, 1)
 *      2 * power(2,0)
 * 
 *  2 * power(2,1)
 *      2 * 1 = 2
 * 
 *  2 * 2
 * 
 *  4
 * 
 */


