// (Q). You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


var climbStairs = function (n) {
    let obj = {
        1: 1,
        2: 2
    }
    for (let i = 3; i <= n; i++) {
        obj[i] = obj[i-1] + obj[i-2];
        
        
    }
    console.log(obj)
   return obj[n];
}
console.log(climbStairs(10))