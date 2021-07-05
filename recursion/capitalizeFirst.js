function capitalizeFirst(arr) {
  if(!arr.length)
    return [];
  if(arr.length === 1) {
    return arr[0][0].toUpperCase() + arr[0].slice(1)
  }
    return [arr[0][0].toUpperCase() + arr[0].slice(1)].concat(capitalizeFirst(arr.slice(1)))
}

/**
 *  ['abc', 'bcd', 'efg']
 * 
 *  ['Abc'].concat(capitalizeFirst('bcd', 'efg'))
 * 
 *  ['Abc'] ['Bcd'].concat(capitalizeFirst('efg'))
 * 
 *  ['Abc', 'Bcd', 'Efg']
 */


  console.log(capitalizeFirst(['abc', 'bcd', 'efg', 'ghi']))


