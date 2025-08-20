function findAverage(array) {
  if(array === '') return 0

  let n = array.length;
  let sum = 0;
  for(let i = 0; i < n; i++){
    sum += array[i];
  }
  let av = sum / n;
  return av
}
console.log(findAverage([1,2,3,4,5]))


// function findAverage(array) {
//   if (array.length === 0) return 0;   // handle empty array
//   let sum = array.reduce((a, b) => a + b, 0);
//   return sum / array.length;
// }


// console.log(findAverage([1, 2, 3, 4, 5])); 
// console.log(findAverage([10, 20, 30]));    
// console.log(findAverage([]));              
