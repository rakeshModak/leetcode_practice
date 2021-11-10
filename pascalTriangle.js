var generate = function (numRows) {
    let pascleArray = [[1]];
    let newarr = [];
    for(let j = 1; j < numRows; j++){
        let lastElem = pascleArray[pascleArray.length - 1]
        console.log("lastElem", lastElem);
        newarr.push(1);
        for (let i = 0; i < lastElem.length - 1; i++) {
            console.log("newarr 1", newarr);
            let counter = lastElem[i] + lastElem[i + 1];
            console.log("counter", counter);
            newarr.push(counter);
            console.log("newarr 2", newarr);
        }
        newarr.push(1);
        console.log("newarr 3", newarr)
        pascleArray.push(newarr);
        console.log("pascleArray", pascleArray)
        newarr = [];
    }
    return pascleArray;
};
console.log(generate(5));