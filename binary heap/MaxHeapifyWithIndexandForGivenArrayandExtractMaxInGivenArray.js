const arr=[3,6,5,0,8,2,1,9]

console.log(Math.floor(arr.length/2))// no. of leaves Math.floor(N/2)

console.log(Math.floor(arr.length/2) - 1) // no. of internal nodes Math.floor(N/2) - 1 

// to get max no. of nodes based on height of complete binary tree (2*h+1)

console.log(2*3+1)

// to get no. of nodes at specific level (2 * h)

console.log(2*1)
console.log(2*2)

// heapify with 0th index
// Note: when you are doing heap from oth index all sub tree should be heapified

function MaxHeapifyOnGivenIndex(arr, index) {
    // to track the flow of MaxHeapifyForGivenArray enable below console
    //console.log(arr)
    const heapSize = arr.length
    const leftChild = 2*index+1
    const rightChild = 2*index+2

    let largest = index;



    if(leftChild <= heapSize && arr[leftChild] > arr[index]) {
        largest = leftChild;
    } 

    if(rightChild <= heapSize && arr[rightChild] > arr[index] && arr[rightChild] > arr[leftChild]) {
        largest = rightChild;
    }

    if(largest !== index) {
        const parentIndexValue = arr[index];
        arr[index] = arr[largest];
        arr[largest] = parentIndexValue;
        MaxHeapifyOnGivenIndex(arr, largest)
    }

    return arr;
}


// Basic example of MaxHeapify using 0th index by considering that all subtrees are heapified 

console.log(MaxHeapifyOnGivenIndex([1,14,10,8,7,9,3,2,4,6], 0))
console.log(MaxHeapifyOnGivenIndex([2,3,4], 0))

/**
 *                  1(1->14)                            
 *       14(1->8)               10
 *    8(8->1->4)      7       9     3
 *  2   4(4->1)   6 
 * 
 */  


// Build MaxHeap for given array

/**
 *   If we know that sub tress are not heapified then we will follow up bottom-up approach
 *    
 *   First heapify internal node sube trees and then heapify parental internal nodes
 * 
 *   [3,6,5,0,8,2,1,9]   ==>                    3
 *                                          6       5
 *                                       0    8   2   1
 *                                    9
 * 
 *   To get internal nodes of tree from 0th index --> 0 to Math.floor(N/2) - 1
 * 
 *   To get no. of leaves of tree of 0th index  --> Math.floor(N/2)
 * 
 *   To get max no. of nodes based on height of complete binary tree (2*h+1)
 * 
 *   [3,6,5,0,8,2,1,9]       internal nodes = 0 to Math.floor(8/2)-1 = 0 to 3 ; leaves = Math.floor(8/2) = 4
 *    ------- -------
 *   internal  leaves
 * 
 *   [3,6,5,0,8,2,1,9]
 *   <-------
 *  
 * */ 

   function MaxHeapifyForGivenArray(arr) {
       const internalNode = Math.floor(arr.length/2) - 1;

       let arrTemp;
       for(let i=internalNode; i>=0; i--) {
          //In MaxHeapifyOnGivenIndex we are updating arr ref so in next turns we are using updated arr for heapifying
          arrTemp = MaxHeapifyOnGivenIndex(arr, i)
       }
       return arrTemp;
   }


   console.log(MaxHeapifyForGivenArray([3,6,5,0,8,2,1,9]))


function ExtractMax(arr) {
    const MaxHeapArr = MaxHeapifyForGivenArray(arr);
    const lastLeaf = MaxHeapArr.pop()
    MaxHeapArr[0] = lastLeaf;

    return MaxHeapifyOnGivenIndex(MaxHeapArr, 0);
}

/**
 *              9
 *         8         5
 *     6      3    2    1
 *   0
 * 
 *              
 *                 
 */

console.log(ExtractMax([3,6,5,0,8,2,1,9]))

