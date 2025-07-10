for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.table("FizzBuzz");
  } else if (i % 3 === 0) {
    console.table("Fizz");
  } else if (i % 5 === 0) {
    console.table("Buzz");
  } else {
    console.table(i);
  }
}
