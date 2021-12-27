var rotate = function(nums, k) {
    return [...nums.slice(nums.length-k), ...nums.slice(0,nums.length-k)]
};

console.log(rotate([1,2,3,4,5,6,7], 3))
