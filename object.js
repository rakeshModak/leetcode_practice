function test(x, y) {
    /* for(let i = 0; i < x.length; i++){
        if(x[i].a === y[0]){
            y[0] = x[i].b;
        }
        if(x[i].a === y[1] ){
            y[1] = x[i].b
        }
    }
    return y; */


    /* let z = x.filter(i => 
           i.a === y[0] || i.a === y[1]
        )
        return z.map(i => i.b); */

     //return x.filter(i => i.a === y[0] || i.a === y[1]).map(i => i.b)
//x[0].a = x[0].b


// let obj = {};
// for(let i = 0; i < x.length; i++){
//     obj[x[i].a] = x[i].b
// }
// return y.map(i => obj[i])

// let obj = {};
// x.map(i => obj[i.a] = i.b)
// return y.map(i => obj[i])

let obj = {};
x.map(i => obj[i.a] = i.b)
return y.map(i => obj[i])

}
console.log(test([{ a: "delhi", b: "wb" },
{ a: "ranchi", b: "mumbai" },
{ a: "assam", b: "j & k" },
{ a: "goa", b: "odissa" }
], ["assam", "delhi"]));

// console.log(test([{ a: "delhi", b: "wb" },
// { a: "ranchi", b: "mumbai" },
// { a: "assam", b: "j & k" },
// { a: "goa", b: "odissa" }
// ], ["ranchi", "goa"]))

