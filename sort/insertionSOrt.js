// function insertionSort(arr){
// 	var currentVal;
//     for(var i = 1; i < arr.length; i++){
//         currentVal = arr[i];
//         for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j+1] = arr[j]
//         }
//         arr[j+1] = currentVal;
//     }
//     return arr;
// }

// insertionSort([2,1,9,76,4])

var arr = `2 5 1 3 4`.split(' ');
console.log(arr)
for(let i=0;i<=arr.length;i++){
    let index = i+1;
    let currentVal = arr[i+1];
    let count = 0
    if(typeof currentVal == 'undefined') break;
    for(var j=index-1;j>=0&&arr[j]>currentVal;j--){
            arr[j+1] = arr[j];
            if(++count > 2) {break;}
        
    }
    console.log(count)
    if(count>2) { console.log(count);break; }
    arr[j+1] = currentVal

}
console.log(arr)