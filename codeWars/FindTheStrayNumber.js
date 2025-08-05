function stray(numbers) {
    return numbers.find(num => numbers.indexOf(num) === numbers.lastIndexOf(num));
  
 
}
console.log(stray([17, 17, 3, 17, 17, 17, 17]))
