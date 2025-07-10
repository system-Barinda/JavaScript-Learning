// const array = [1,2,[3,4,[5,6,[7,8,[9,10]]]]];
// console.log(array.flat(Infinity));

// const number = [1,2,3,4,5,6,7,8,9];
// const result = number.flatMap((num) => (num === 4 ? [2,2]:3));
// console.log(result);

const arr1 = ["it's Sunny in", "", "California"];
console.log(arr1);
console.log(arr1.flatMap((x) => x.split(" ")))