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