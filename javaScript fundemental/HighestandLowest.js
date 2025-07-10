function highAndLow(numbers){
    let convertNumber = numbers.split("").map(Number);
    let max = Math.max(...convertNumber).toString();
    let min = Math.min(...convertNumber).toString();
    let result = [];
   result.push(max,min);
     return result.join(" ").toString();
}
console.log(highAndLow("12345"));