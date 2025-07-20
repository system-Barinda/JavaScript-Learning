// let arrayNumber = [1,2,3,4,5,6,7,8,19,28,11,23];
// let arrA = arrayNumber.splice(3,3,1000);

// console.log(arrA);
// console.log(arrayNumber);

const fruits = ["apple", "banana", "cherry", "date","system","iradukunda","Gambira"];
// let barinda = fruits.splice(2,2,"barinda system  sylvere");
// console.log(barinda);
// console.log(fruits);
let bar = fruits.filter(a =>  a !== 'system');
console.log(bar);
console.log(fruits);