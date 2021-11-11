/** Max Binary Heap insert and remove */

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
       this.values.push(val);
       this.bubbleUp();
    }

    bubbleUp() {
       let indx = this.values.length - 1;
       let value = this.values[indx];
       while(indx > 0) {
           let parentIndx = Math.floor((indx - 1) / 2);
           let parentValue = this.values[parentIndx];
           if(parentValue >= value) break;
           console.log(parentIndx)
           this.values[parentIndx] = value;
           this.values[indx] = parentValue;
           indx = parentIndx;
       }
    }

    extractMax(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

    
}




/** // There is no specific order in binary heap, the only rule is children should be lesser than it's parent
 *   // to get left child of parent  2*index + 1
 *   // to get right child of parent 2*index + 2
 *   // to get parent index from child Math.floor(n - 1 /2)
 *  // heap.insert(41);
 *  // heap.insert(39);      values = [41, 39, 33, 18, 27, 12, 55] --> 55 parent 33  floor(6-1/2) = 2
    // heap.insert(33);      values = [41, 39, 55, 18, 27, 12, 33] --> 55 parent 41  florr(2-1/2) = 0
    // heap.insert(18);      values = [55, 39, 41, 18, 27, 12, 33]
    // heap.insert(27);   
    // heap.insert(12);
    // heap.insert(55);
 *              41                                  41                                       55
 *        39           33      ---->     39                    55     ------->    39                  41
 *    18      27   12      55        18       27         12          33        18     27          12      33
 */
let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

// heap.extractMax()
// heap.extractMax()
// heap.extractMax()
// heap.extractMax()
// heap.extractMax()
// heap.extractMax()
// heap.extractMax()

console.log(heap.values)



console.log([1,2,3].pop())