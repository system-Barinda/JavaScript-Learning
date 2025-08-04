// var summation = function (num) {
//     let result = [];
//     for(let i = 1; i <= num; i++){
//         result.push(i);
//     }
//     const sum = result.reduce((a,b) => a + b);
//     return sum;
// }
// console.log(summation(8))

const summation = function (num){
    return num * (num + 1) /2;
};
console.log(summation(8))