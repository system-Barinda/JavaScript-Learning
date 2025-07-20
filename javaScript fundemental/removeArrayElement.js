// const arr = [10, 20, 30, 40];
// console.table(arr);
// let newArray = arr.filter((_,index) => index !== 2);
// console.table(newArray);

let arraNumber = [20,30,40,50,60,80];

console.table(arraNumber);

let nan = 3;

let newNumber = arraNumber.slice(0,nan).concat(arraNumber.slice(nan + 1));
console.table(newNumber);