/* var findKthPositive = function (arr, k) {
    let unique = [];
    for (let i = 1; i <= arr[arr.length - 1] + k; i++) {
        let exist = false;
        for (let j = 0; j < arr.length; j++) {
            if (i === arr[j]) {
                exist = true
            }
        }
        if (exist === false) {
            unique.push(i);
        }
    }
    console.log(unique[k-1])
};
console.log(findKthPositive([2, 3, 4, 7, 11], 5))
console.log(findKthPositive([1, 2, 3, 4], 2)) */


/* var findKthPositive = function (arr, k) {
    let unique = [];
    for (let i = 1; i <= arr[arr.length - 1] + k; i++) {
        if(arr.indexOf(i) === -1){

            unique.push(i)
        }
    }
    console.log(unique[k-1])
};
console.log(findKthPositive([2, 3, 4, 7, 11], 5))
console.log(findKthPositive([1, 2, 3, 4], 2)) */

let a = [0,0];
 a.unshift(1);

//b=b+1;
//console.log(b+1);
//const c = Array.from(String(b), Number);
console.log(a);



/* var findKthPositive = function (arr, k) {
    let count = 0;
    if (k < arr[0]) {
        return k;
    }
    count = arr[0] - 1;
    if ((arr[arr.length - 1] - arr[0] - arr.length + 1) < (k - count)) {
        return arr[arr.length - 1] + (k - count) - (arr[arr.length - 1] - arr[0] - arr.length + 1)
    }
    for(let i = arr[0]; i < arr[arr.length-1]; i++){
        if(arr.indexOf(i) === -1){
            count++;
            if(count === k){
                return i;
            }
        }
    }

};
console.log(findKthPositive([5, 6, 8, 9], 2))
console.log(findKthPositive([5, 6, 8, 9], 8))
console.log(findKthPositive([5, 6, 10, 11], 7)) */

