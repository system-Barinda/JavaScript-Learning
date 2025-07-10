function reduceMine(callback, initialValue) {
    const length = this.length;
    let accumulator = initialValue;
    let startIndex = 0;

 
    if (accumulator === undefined) {
     
        while (!(startIndex in this) && startIndex < length) {
            startIndex++;
        }
        if (startIndex >= length) {
            throw new TypeError("Reduce of empty array with no initial value");
        }
        accumulator = this[startIndex];
        startIndex++; 
    }

    for (let i = startIndex; i < length; i++) {
        if (i in this) {
            accumulator = callback.call(undefined, accumulator, this[i], i, this);
        }
    }

    return accumulator;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.reduceMine = reduceMine;

let result = arr.reduceMine(function (a, b) {
    return a + b;
}, 0); 

console.log(result); 












