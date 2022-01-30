/**
 *  SUm of Two integers without + or -
 * 
 *  https://www.youtube.com/watch?v=qq64FrA2UXQ
 */

 var getSum = function(a, b) {
    if (b == 0) {
        return a;
    } else {
        return getSum(a ^ b, (a & b) << 1)
    }
};

console.log(getSum(1,3))