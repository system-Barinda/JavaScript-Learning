function sortArray(array) {
  let odds = array.filter(num => num % 2 !== 0).sort((a,b) => a - b);
  return array.map(num => (num % 2 !== 0 ? odds.shift() : num))
  
   
}
console.log(sortArray([5, 3, 2, 8, 1, 4]))



// function sortArray(array) {
//   const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//   return array.map((x) => x % 2 ? odd.shift() : x);
// }