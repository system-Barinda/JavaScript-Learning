// const kvArray = [
//     {key:1,value:10},
//     {key:2,value:20},
//     {key:3,value:30},
// ];
// const reformatted = kvArray.map(({key,value}) => ({[key] : value}));
// console.log(reformatted)
// console.table(kvArray);

// function barinda (){
//     console.log(Array.prototype.join.call(arguments, "+"));
// };
// barinda("a","b");

// const getMax = (a,b) => Math.max(a,b);
// console.log([20,100].reduce(getMax,100));

let person = [
    {a:1},
    {a:2},
    {a:3},
    
];
const sum = person.reduce((acc,val) => acc + val.a,0)
console.log(sum);