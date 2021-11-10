var maxSubArray = function(nums) {
    let currentSum = nums[0];
    let maxSum = currentSum;
    const n = nums.length;
    for (let i = 1; i < n; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
};
console.log(maxSubArray([5, 4, -1, 7, 8]))
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))