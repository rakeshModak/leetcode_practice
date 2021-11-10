var mySqrt = function (x) {
    let y = 1;
    for (let i = 1; i < x + 2; i++) {
        let sum = ((x / y) + y) / 2;
        y = sum;
    }
    return Math.floor(y)
};
console.log(mySqrt(144));
console.log(mySqrt(172));
console.log(mySqrt(11));
console.log(mySqrt(35));


// let mySqrt = function (x) {
//     let a
//     let x1 = x / 2;

//     do {
//         a = x1;
//         x1 = (a + (x / a)) / 2;
//     } while (a !== x1);
//     return a | 0;
// }
// console.log(mySqrt(8));
