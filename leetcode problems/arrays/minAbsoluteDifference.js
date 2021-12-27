var minimumAbsDifference = function(arr) {
    
    const sortedArray = arr.sort((a,b) =>  a-b);
    let min=Infinity
    let result=[]
    
    for(let i=0; i<sortedArray.length-1; i++) {
        let diff = sortedArray[i+1] - sortedArray[i]
        console.log(diff)
        min = Math.min(diff, min)
    }
    for(let i=0; i<sortedArray.length-1; i++) {
        let diff = sortedArray[i+1] - sortedArray[i]
        
        if(min === diff) {
            result.push([sortedArray[i],sortedArray[i+1]])
        }
    }
    
    return result
    
};

console.log(minimumAbsDifference([1,3,6,10,15]))