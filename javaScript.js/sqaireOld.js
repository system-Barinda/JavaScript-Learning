function oddSquares(numbers) {
    // console.log(numbers)
  return numbers.filter((num) => {
    return num % 2 !== 0;   // Keep odd numbers only
  }).map(function(num) {
    return num * num;       // Square them
  });
}

console.log(oddSquares([1,2,3,4,5,6]));