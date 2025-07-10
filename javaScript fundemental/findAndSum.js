// let arrayNumber = [1,2,3,4,5,6,7,8,9,10];
//  function arrayAdd(number){
//      return arrayNumber.reduce((a,b) => a + b,);
//  }
//  console.log(arrayAdd(arrayNumber));
// let arrayNumber = [1,2,3,4,5,6,7,8,9,10];
// function shortest(number){
//     let sum = 0;
//     for(let i = 0; i < number.length; i++){
//        sum += number[i];
//     }
//     return sum;
// }
// console.log(shortest(arrayNumber));
let arrayNumber = [1,2,3,4,5,6,7,8,9,10];
let min = Math.min(...arrayNumber);
let max = Math.max(...arrayNumber);

let tatalsum = arrayNumber.reduce((a,b) => a + b,0);
let getFinal = tatalsum - min - max;
console.log(getFinal);