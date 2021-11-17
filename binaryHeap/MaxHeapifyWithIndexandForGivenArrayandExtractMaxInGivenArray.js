/**
 *   Algos for 
 *   MaxHeapOnGivenIndex
 *   MaxHeapOnGivenArray
 *   Insert
 *   ExtractMax
 *   IncreaseKey
 *   DecreaseKey
 *   HeapSort
 *   
 * 
 */


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
        if(arr && arr.length === 1) {
            return arr
        }
       const internalNode = Math.floor(arr.length/2) - 1;

       let arrTemp;
       for(let i=internalNode; i>=0; i--) {
          //In MaxHeapifyOnGivenIndex we are updating arr ref so in next turns we are using updated arr for heapifying
          arrTemp = MaxHeapifyOnGivenIndex(arr, i)
       }
       return arrTemp;
   }


   console.log(MaxHeapifyForGivenArray([3,6,5,0,8,2,1,9]))

function heapInsert(arr, valToInsert) {
    arr.push(valToInsert)
    let values = arr;
    function bubbleUp() {
        let indx = values.length - 1;
        let value = values[indx];
        while(indx > 0) {
            let parentIndx = Math.floor((indx - 1) / 2);
            let parentValue = values[parentIndx];
            if(parentValue >= value) break;
            console.log(parentIndx)
            values[parentIndx] = value;
            values[indx] = parentValue;
            indx = parentIndx;
        }
    }
   bubbleUp();
   return values;
}

function ExtractMax(arr = []) {
    const MaxHeapArr = MaxHeapifyForGivenArray(arr);
    const parentNode = MaxHeapArr[0];
    const lastLeaf = MaxHeapArr.pop()
    MaxHeapArr[0] = lastLeaf;

    return {root: parentNode , heapifiedArray:MaxHeapifyOnGivenIndex(MaxHeapArr, 0)};
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

//Increase key on heapified array
function IncreaseKey(arr, i, key ) {
  let heapArr = arr;
//   let index = i;
  heapArr[i] = key;

  while(i > 0 && heapArr[Math.floor((i-1)/2)] < heapArr[i]) {
    const parentIndexValue = heapArr[Math.floor((i-1)/2)];
    heapArr[Math.floor((i-1)/2)] = heapArr[i];
    heapArr[i] = parentIndexValue;
    i = Math.floor((i-1)/2)
  }
  return heapArr;
}

console.log('Increasekey---', IncreaseKey([ 9, 8, 5, 6, 3, 2, 1, 0 ], 7, 10))


// Decrease key on heapified array
// As it's decrease key we can use maxheap algorithm to heapify sub tree

function DecreaseKey(arr, i , key) {

    arr[i] = key;

    return MaxHeapifyOnGivenIndex(arr, i)

}

console.log('decreasekey--', DecreaseKey([ 9, 8, 5, 6, 3, 2, 1, 0 ], 1, 4))


// HeapSort

/**
 *  1. Build Heap for given Array (MaxHeapForGivenArray)
 *  2. ExtractMax till 0th index of given array
 * 
 */

function HeapSort(arr) {

    let sortedArray = [];
    let updatedArray = arr;
    while(updatedArray.length > 1) {
       const extractMaxResult = ExtractMax(updatedArray);
       sortedArray.push(extractMaxResult.root);
       updatedArray = extractMaxResult.heapifiedArray;
    }

    return sortedArray.concat(updatedArray)

}

console.log('heapSort---', HeapSort([3,6,5,0,8,2,1,9]))

console.log('heapInsert---', heapInsert([ 9, 8, 6, 5, 3, 2, 1, 0 ], 10 ))

/**
 *  problems
 */

/**
 *  Last Stone Weight
 *  You are given an array of integers stones where stones[i] is the weight of the ith stone.

    We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

    If x == y, both stones are destroyed, and
    If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
    At the end of the game, there is at most one stone left.

    Return the smallest possible weight of the left stone. If there are no stones left, return 0.


    Approach -- Use Heap
    1. Build Heap
    2. 2 times Extract Max and 1 Insert if we get some extra weight after substraction from two Max stones till last Element
    3. last if any element left in array after all loop then return last element otherwise return 0
 */

    function LastStoneWeight(arr) {
        let heapifiedArray = MaxHeapifyForGivenArray(arr);
        console.log('heapifiedArray---', heapifiedArray);

        let updatedArray = heapifiedArray;
        while(updatedArray.length >= 2) {
            console.log(updatedArray)
            const firstMax = ExtractMax(updatedArray);
            const secondMax = ExtractMax(firstMax.heapifiedArray);
            if((firstMax.root - secondMax.root) > 0) {
              updatedArray = heapInsert(secondMax.heapifiedArray, firstMax.root - secondMax.root);
              continue;
            }

            updatedArray = secondMax.heapifiedArray;

        }
        console.log(updatedArray)

        return updatedArray.length ? updatedArray : 0

    }

/**
 *    [2,7,4,1,8,1] --> 
 *    heapified Array = [8, 7, 4, 1, 2, 1]
 *    (8-7)
 *    [4,2,1,1,1]
 *    (4-2)
 *    [2,1,1,1]
 *    (2-1)
 *    [1,1,1]
 *    (1-1)
 *    [1]
 * 
 * 
 *  */    

console.log(LastStoneWeight([2,7,4,1,8,1]))
// console.log(LastStoneWeight([1,3]))

