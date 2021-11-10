var removeElement = function(nums, val) {
    for(let i = 0; i < nums.length; i++){
        if(nums.indexOf(val, 0) >= 0){
            nums.splice(nums.indexOf(val, 0), 1)
        }
    }
    return nums;
};
console.log(removeElement([3,2,2,3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2));
console.log(removeElement([3,3], 3));

// var removeElement = function(nums, val) {
//     while(nums.indexOf(val, 0) >= 0){
//         nums.splice(nums.indexOf(val, 0), 1)
//     }
//     return nums;
// };
// console.log(removeElement([3,2,2,3], 3));
// console.log(removeElement([3,3], 3));
// console.log(removeElement([0,1,2,2,3,0,4,2], 2));