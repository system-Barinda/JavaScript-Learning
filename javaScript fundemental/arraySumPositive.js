// let arr = [1, -4, 7, 12] 
// function positiveSum(arr) {
//   let sumRusult = 0;
//   for(let key in arr){
//     if( arr[key] >= 0){
//        sumRusult += arr[key];
//     }
    
//   }
// return sumRusult;
// }
// console.log(positiveSum(arr));

let arrayNumber = [1, -4, 7, 12];
// function sum(arr){
//   let total = 0;
//   for(let i = 0; i < arr.length; i++){
//     if( arr[i] >= 0){
//         total += arr[i];
//     }
//   }
//   return total;
// }
// console.log(sum(arrayNumber));

function sumArray(arr){
    return arr.reduce((a,b) => a + (b > 0 ? b : 0),0);
}
console.log(sumArray(arrayNumber));
