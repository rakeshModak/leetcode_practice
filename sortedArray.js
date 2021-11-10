/* var removeDuplicates = function (nums) {
    let arr = [];
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (arr[arr.length - 1] !== nums[i]) {
            arr.push(nums[i]);
            nums.splice(nums[i], 1);
        } else {
            count++;
        }
    }
    //console.log("count", count)
    return nums;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1, 1, 2])); */


var removeDuplicates = function (nums) {
 return nums.filter((item, index) => nums.indexOf(item) === index);
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1, 1, 2])); 