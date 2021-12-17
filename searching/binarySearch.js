function binarySearch(arr, value, i=0, j=0, p= 0 ){
    var first = i ? i : 0;
    var last = j ? j : arr.length -1
    var pivot = p ? p : Math.floor((first+last)/2)
    if(first > last)
    return -1;
    if(arr[first] === value) 
    return first;
    if(arr[last] === value)
    return last;
    if(arr[pivot] === value)
    return pivot;
    
    if(value > arr[pivot]) {
        var Tfirst = pivot + 1;
        var Tlast = last
        var Tpivot = Math.floor((Tfirst + Tlast) / 2)
        return binarySearch(arr, value, Tfirst, Tlast, Tpivot)
    }
    if(value < arr[pivot]) {
        var Lfirst = first;
        var Llast = pivot - 1;
        var Lpivot = Math.floor((Lfirst + Llast) / 2)
        return binarySearch(arr, value, Lfirst, Llast, Lpivot)
    }

}


console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 9))