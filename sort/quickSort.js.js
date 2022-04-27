function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]);

// [4,6,9,1,2,5,3] 3,1,2,4,9,5,6
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1

function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)], // pivot value is middle item
    i = left, // starts from left and goes right to pivot index
    j = right; // starts from right and goes left to pivot index

  // while the two indices don't match
  while (i <= j) {
    // if the item on the left is less than the pivot, continue right
    while (items[i] < pivot) {
      i++;
    }

    // if the item on the right is greater than the pivot, continue left
    while (items[j] > pivot) {
      j--;
    }

    // if the two indices still don't match, swap the values
    if (i <= j) {
      swap(items, i, j);

      // change indices to continue loop
      i++;
      j--;
    }
  }

  // this value is necessary for recursion
  return i;
}

/**
 * A quicksort implementation in JavaScript. The array
 * is sorted in place.
 * @param {Array} items An array of items to sort.
 * @return {Array} The sorted array.
 */
function quickSort(items, left, right) {
  var index;

  // performance - don't sort an array with zero or one items
  if (items.length > 1) {
    // fix left and right values - might not be provided
    left = typeof left != "number" ? 0 : left;
    right = typeof right != "number" ? items.length - 1 : right;

    // split up the entire array
    index = partition(items, left, right);

    // if the returned index
    if (left < right) {
      quickSort(items, left, index - 1);

      quickSort(items, index + 1, right);
    }
  }

  return items;
}
