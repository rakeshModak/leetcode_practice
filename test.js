/* var isValid = function (s) {

    let map = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i]);
            console.log("push", stack);
        } else if (stack[stack.length - 1] === map[s[i]]) {
            stack.pop();
            console.log("pop", stack);
        } else return false;
    }
    return stack.length ? false : true

};
//console.log(romanToInt("III"));
//console.log(romanToInt("MCMXCIV"));
console.log(isValid("()[]{}"));
//console.log(isValid("([)]")); */


/* var searchInsert = function (nums, target) {
    if (nums.indexOf(target) >= 0) {
        return nums.indexOf(target);
    } else {
        for (let i = 0; i < nums.length; i++) {
            if (target < nums[i]) {
                return i
            }
        }
        return nums.length
    }
};
console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 4))
console.log(searchInsert([1, 3, 5, 6], 7))
console.log(searchInsert([1], 1))
 */

/* var findKthPositive = function (arr, k) {
    let unique = [];
    let newarr = [];
    for (let i = 1; i <= arr[arr.length-1] + k; i++) {
        newarr.push(i);
    }
    console.log(newarr)
    for (let j = 0; j < newarr.length; j++) {
        let exist = false;
        for (let l = 0; l <= arr.length + k; l++) {
            if (newarr[j] === arr[l]) {
                exist = true;
            }
            
        }
        if (exist === false) {
            unique.push(newarr[j]);
        }
    }
    //console.log(unique[k-1]);
    return unique[k-1];
};
console.log(findKthPositive([2, 3, 4, 7, 11], 5))
console.log(findKthPositive([1,2,3,4], 2)) */




/* var findKthPositive = function (arr, k) {
    let unique = [];
    let newarr = [];
    for (let i = 1; i <= arr[arr.length-1] + k; i++) {
        newarr.push(i);
    }
    //console.log(newarr)
    const min = Math.min(...arr);
  const set = new Set(arr);
  return Array.from(
    { length: set.size },
    (_, i) => i + min
  ).find(numToFind => !set.has(numToFind));
    //console.log(unique[k-1]);
    return unique[k-1];
};
console.log(findKthPositive([2, 3, 4, 7, 11], 5))
console.log(findKthPositive([1,2,3,4,7], 2))
 */

/* var lengthOfLastWord = function(s) {
    s = s.split(" ")
    for(let i = s.length-1; i >= 0; i--){
        if(s[i].length){
            return s[i].length
        }
        //console.log(s[i])
    }
      //console.log(s);
      //console.log(s[s.length-1]);
  };
  console.log(lengthOfLastWord("Hello World"));
  console.log(lengthOfLastWord("   fly me   to   the moon  ")); */

  /* var lengthOfLastWord = function(s) {
   s = s.split(" ").filter(x =>  x.length > 0);
    return s[s.length-1].length
  };
  console.log(lengthOfLastWord("Hello World"));
  console.log(lengthOfLastWord("   fly me   to   the moon  ")); */


  var lengthOfLastWord = function(s) {
    s = s.replace(/((\s*\S+)*)\s*/, "$1").split(" ")
    console.log(s)
     //return s[s.length-1].length
   };
   console.log(lengthOfLastWord("Hello World"));
   console.log(lengthOfLastWord("   fly me   to   the moon  "));