// let sparse = [1,2 ,3];
// console.log(sparse[1])
// console.log(1 in sparse)

let barinda = [1,2,3,4,5,,7];
console.log(Object.keys(barinda));
console.log(barinda.length);
barinda.forEach((value, index) => {
    console.log(` Index  are ${index} : value is ${value}`);
})

console.log(barinda);