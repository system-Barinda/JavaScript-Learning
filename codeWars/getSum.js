function getSum(a, b) {
  if (a === b) return a;

  let start = Math.min(a, b);
  let end = Math.max(a, b);

  let result = 0;
  for (let i = start; i <= end; i++) {
    result += i;
  }

  return result;
}

console.log(getSum(1, 0));   
console.log(getSum(1, 2));   
console.log(getSum(0, 1));   
console.log(getSum(1, 1));   
console.log(getSum(-1, 0));  
console.log(getSum(-1, 2));  
