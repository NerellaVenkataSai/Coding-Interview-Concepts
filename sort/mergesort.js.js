// Merge function from earlier
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

// Recrusive Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

mergeSort([10, 24, 76, 73, 2, 12, 74]);

// Iterative merge sort

/**
 * Merges to arrays in order based on their natural
 * relationship.
 * @param {Array} left The first array to merge.
 * @param {Array} right The second array to merge.
 * @return {Array} The merged array.
 */
function merge(left, right) {
  var result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  result = result.concat(left).concat(right);

  //make sure remaining arrays are empty
  left.splice(0, left.length);
  right.splice(0, right.length);

  return result;
}

function mergeSort(items) {
  // Terminal condition - don't need to do anything for arrays with 0 or 1 items
  if (items.length < 2) {
    return items;
  }

  var work = [],
    i,
    len;

  for (i = 0, len = items.length; i < len; i++) {
    work.push([items[i]]);
  }
  work.push([]); //in case of odd number of items

  for (var lim = len; lim > 1; lim = Math.floor((lim + 1) / 2)) {
    for (var j = 0, k = 0; k < lim; j++, k += 2) {
      work[j] = merge(work[k], work[k + 1]);
    }
    work[j] = []; //in case of odd number of items
  }

  return work[0];
}
