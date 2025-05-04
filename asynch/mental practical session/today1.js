function multiply(factor, ...numbers) {
    return numbers.map(number => number * factor);
  }
  console.log(multiply(2, 1, 2, 3)); // Output: [2, 4, 6]
  