let addBinary = function (a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = "";
    while (i >= 0 || j >= 0) {
        let m = i < 0 ? 0 : a[i] | 0;
        let n = j < 0 ? 0 : b[j] | 0;
        console.log('loop', i, 'm =', m, 'n=', n);
        carry += m + n; // sum of two digits
        result = carry % 2 + result; // string concat
        carry = carry / 2 | 0; // remove decimals,  1 / 2 = 0.5, only get 0
        i--;
        j--;
        console.log('carry', carry, 'result', result);
    }
    if (carry !== 0) {
        console.log('before result', result)
        result = carry + result;
        console.log(' final carry', carry, 'final result', result);

    }
    return result;
};
console.log(addBinary("111", "11"))