/* var plusOne = function (digits) {
    let arrayToInt =  digits.join("");
    BigInt(arrayToInt);
    console.log(typeof arrayToInt,arrayToInt);
    let finalArray = Array.from(String(arrayToInt), Number);
    return finalArray;
};
//console.log(plusOne([1, 2, 3]))
//console.log(plusOne([2, 9]))
//console.log(plusOne([9, 9]))
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7])); */


// var plusOne = function (digits) {
//     if (digits.length > 1 && digits[digits.length - 1] + 1 > 9) {
//         for (let i = digits.length - 1; i >= 0; i--) {
//             if (digits[i] + 1 > 9) {
//                 digits[i] = 0;
//                 /* if(digits[i-1] === digits[0] && digits[i-1]+1 > 9){
//                     digits[i-1] = 0;
//                     digits.unshift(0);
//                 } */
//                 console.log('digits', digits)
//                 digits[i - 1] += 1;
//                 //console.log('loop', i, digits)
//             }
//         }
//         return digits

//     } else if (digits.length === 1 && digits[0] >= 9) {
//         digits = digits.slice(1);
//         digits.push(1);
//         digits.push(0);
//         return digits;
//     } else if (digits[0] === 0) {
//         digits = digits.slice(1);
//         digits.push(1);
//         return digits;
//     } else {
//         digits[digits.length - 1] += 1;
//         return digits;
//     }
// };
// console.log(plusOne([1, 2, 3]))
// console.log(plusOne([1, 2, 3, 9, 9]))
// console.log(plusOne([9]))
// console.log(plusOne([0]))
// console.log(plusOne([1]))
// console.log(plusOne([8,9,9,9]))
// console.log(plusOne([2, 9, 9]))
// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 9, 6, 7, 0, 3, 5, 4, 9]));
// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7]));


// var plusOne = function (digits) {
//     console.log(digits.length)
//     let newDigtit = [];
//     let joinNum = digits.join('');
//     let num = Number(joinNum)
//     console.log(num)
//     num += 1;
//     while (num > 0) {
//         let reminder = num % 10;
//         newDigtit.push(reminder);
//         num = Math.floor(num/10);
//     }
//     return newDigtit.reverse().length;
// }
// console.log(plusOne([9,9,9]))
// console.log(plusOne([1, 2, 3]));
// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 9, 6, 7, 0, 3, 5, 4, 9]));


var plusOne = function (digits) {
    let carry = 0;
    if (digits.length < 2 && digits[0] + 1 > 9) {
        digits[0] = 0;
        digits.unshift(1)
        console.log('1');
        return digits
    }
    if (digits[digits.length - 1] + 1 < 10) {
        digits[digits.length - 1] = digits[digits.length - 1] + 1;
        console.log('2');
        return digits;
    } else {
        for (let i = digits.length - 1; i > 0; i--) {
            if (digits[i] + 1 > 9) {
                digits[i] = 0;
                carry = 1;
                digits[i - 1] = digits[i - 1] + carry;
                carry = 0;
                if (digits[i - 1] > 9) {
                    continue;
                } else {
                    return digits;
                }
            }
            
        }
        if(digits[0] > 9){
            digits[0] = 0;
            digits.unshift(1);
            console.log('3');
            return digits;
        }
    }
}
// console.log(plusOne([1, 2, 3]))
console.log(plusOne([1, 9, 9]));
console.log(plusOne([3, 9, 9, 9]));
console.log(plusOne([8, 9, 9, 9]));
console.log(plusOne([1]));
// console.log(plusOne([1, 2, 3, 9, 9]))
// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 9, 6, 7, 0, 3, 5, 4, 9]));
console.log(plusOne([9, 9, 9]));
console.log(plusOne([9]));
console.log(plusOne([9, 8, 9]));
console.log(plusOne([3, 3, 9]));


