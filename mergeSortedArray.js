var merge = function (nums1, m, nums2, n) {
    nums1 = nums1.filter(x => x > 0);
   // console.log(nums1)
    nums2.forEach(element => {
        nums1.push(element)
    });
    if(nums1.sort().length === m+n){
        return nums1.sort()
    }
//console.log(nums1.sort())
};
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
console.log(merge([1], 1, [], 0))
console.log(merge([], 0, [1], 1))