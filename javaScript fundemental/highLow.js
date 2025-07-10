// function highAndLow(numbers) {
//   const nums = numbers.split(' ').map(Number);
//   const max = Math.max(...nums);
//   const min = Math.min(...nums);
//   return `${max} ${min}`;
// }
// console.log(highAndLow("12345"));

function highAndLow(numbers){
    numbers = numbers.split('').map(Number);
    return Math.min.apply(null,numbers) + ' ' + Math.max.apply(null,numbers);
}
console.log(highAndLow("123"));