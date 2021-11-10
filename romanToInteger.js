let romanToInt = function (s) {
    let arr = [];
    let total = 0; 
    let roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    let a = s.split("");
    allEqual = a => a.every(v => v === a[0]);
    if (allEqual(a) === true) {
        a.every(v => arr.push(roman[v]));
        return arr.reduce((a, b) => a + b );
    } else {
        for (let i = 0; i <= s.length-1; i++) {
            if (roman[s[i]] >= roman[s[i + 1]]) {
                arr.push(roman[s[i]]);
                s = s.replace(s[i], " ");
            } else {
                if (s[i + 1] === undefined) {
                    arr.push(roman[s[i]]);
                } else {
                    arr.push(roman[s[i + 1]] - roman[s[i]]);
                    s = s.replace(s[i] + s[i + 1], " ");
                }
            }
        }
        return arr.reduce((a, b) => a + b )
    }
}
console.log(romanToInt("III"));
console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("LVIII"));