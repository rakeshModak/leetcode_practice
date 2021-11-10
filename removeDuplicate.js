// var removeDuplicates = function(nums) {
//     let unique = [];
//     for(let i = 0; i < nums.length; i++){
//         let counter = false;
//         for(let j= 0; j < unique.length; j++){
//                if(unique[j] === nums[i]){
//                   counter = true;
//                   }
//         }
//         if(counter === false){
//            unique.push(nums[i])
//            }
//     }
//     return unique.length;
// };
// console.log(removeDuplicates([1,1,2]))
// console.log(removeDuplicates([4,4,5,5,8,9,11,11]))


var removeDuplicates = function(nums) {
    let i = 0;
    console.log(i)
    for (let j = 0; j < nums.length; j++) {
        console.log(nums[j] != nums[i])
        if (nums[j] != nums[i]) {
            nums[++i] = nums[j];
        }
    }
    return ++i;
   
};
// console.log(removeDuplicates([4,4,5,5,8,9,11,11]))
console.log(removeDuplicates([1,1,2]))