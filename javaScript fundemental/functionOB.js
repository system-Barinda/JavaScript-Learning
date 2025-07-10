
// function isNumber(values){
//     return Array.prototype.toString.call(values) === '[object Number]';
// }
// console.log(isNumber("barinda"));

function isNumber(value){
    return typeof value === 'number';
}
console.log(isNumber(123));