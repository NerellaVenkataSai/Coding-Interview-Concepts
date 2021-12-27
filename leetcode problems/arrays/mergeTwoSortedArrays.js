/**
 *   https://leetcode.com/problems/merge-sorted-array/
 */

 var merge = function(nums1, m, nums2, n) {

    if(m===0 && n){
        return nums2
    }

    console.log(nums1)
    let i=m-1;
    let j=n-1;
    let r= m+n-1
    console.log(i,j,r)
    
    while(true) {
        if(j < 0) break;

        if(nums1[i] <= nums2[j]) {
            nums1[r] = nums2[j];
            r--;
            j--;
        }

        if(nums1[i] > nums2[j]) {
            nums1[r] = nums1[i];
            r--;
            i--;
        }
    }
    console.log(nums1)
    return nums1
};

console.log(merge([1,2,3,0,0,0], 3,[2,5,6], 3))



/**    nums1            nums2
 *    [1,2,3,0,0,0]    [2,5,6]  m=3 n=3
 *         i     r          j
 * 
 *    if(i<=j) nums1[r]=j; r--;  j--;
 *    
 *    if(i>j) nums1[r]=i r--; i--;
 * 
 *     nums1            nums2
 *    [1,2,3,0,0,6]    [2,5,6]  m=3 n=3
 *         i   r          j
 * 
 *    nums1            nums2
 *    [1,2,3,0,5,6]    [2,5,6]  m=3 n=3
 *         i r          j
 *      
 *    nums1            nums2
 *    [1,2,3,3,5,6]    [2,5,6]  m=3 n=3
 *       i r            j
 * 
 *    nums1            nums2
 *    [1,2,2,3,5,6]    [2,5,6]  m=3 n=3
 *       i
 *       r
 * 
 * 
 *    result =  [1,2,2,3,5,6]            
 *   
 */
