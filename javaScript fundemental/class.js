Array.range = function(start,count){
  return Array.from({length:count},(_,i) => start + i);
};
Array.prototype.sum = function(){
  return this.reduce((a,b) => a + b,0);
};
let numbers = Array.range(0,3);
console.log(numbers);
console.log(numbers.sum());