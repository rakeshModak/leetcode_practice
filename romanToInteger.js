var romanToInt = function (s) {
    let arr = [];
    let roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,

    }
    s = s.split("");
    /* for (let i = 0; i < s.length; i++) {
        if (s[i] < s[i + 1]) {
            arr.push(s[i] + s[i + 1])
            s = s.replace(s[i] + s[i + 1], " ");
            console.log("if",s , i);
        } else {
            arr.push(s[i])
            s = s.replace(s[i], " ");
            console.log("else",s , i);
        }

    } */
    console.log(arr)
    console.log(roman)
    return arr;
    

}
console.log(romanToInt("III"));
console.log(romanToInt("MCMXCIV"));