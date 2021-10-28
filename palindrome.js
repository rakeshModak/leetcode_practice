let isPalindrome = function (x) {
  let arr = []
  if(x < 0){
    return false;
  }
  while (x > 0) {
    arr.push(x % 10);
    x = Math.floor(x / 10);

  }
  //console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;

}
console.log(isPalindrome(123));
console.log(isPalindrome(121));
console.log(isPalindrome(-514));
