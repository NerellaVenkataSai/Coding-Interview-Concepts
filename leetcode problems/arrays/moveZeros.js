// move zeros without extra space

function moveZeros(arr) {
    let left=0
    for(let right=0; right< arr.length; right++) {
        if(arr[right] === 0) {
            continue;
        }
        if(arr[right] > 0){
            let leftValue = arr[left];
            arr[left]=arr[right]
            arr[right] = leftValue
            left++
        }
    }
    return arr
}

console.log(moveZeros([0,1,0,0,3,12]))

/** if F is 0 increment F
 *  if F is freater than 0 swap F and S then increment both
 *    F
 *   [0,1,0,0,3,12]
 *    S
 *      F
 *   [0,1,0,0,3,12]
 *    S
 *        F
 *   [1,0,0,0,3,12]
 *      S
 *          F
 *   [1,0,0,0,3,12]
 *      S
 *            F
 *   [1,0,0,0,3,12]
 *      S
 *               F
 *   [1,3,0,0,0,12]
 *        S
 *               F
 *   [1,3,12,0,0,0] // o/p
 *        S
 * 
 * 
 */