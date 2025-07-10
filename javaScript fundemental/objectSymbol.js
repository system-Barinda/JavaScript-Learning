// const obj = Symbol("my name is barinda");
// const objectSymbol ={
//     [obj] : "barinda system is high educated",
// };
// console.log(objectSymbol);

let person = Symbol("my name is barinda system sylvere");
let information = {
    names :"iradukunda",
    age:30,
    location:"muhanga",
    [person]:"me and my friend",
}
// console.log(information[person]);
// console.log(Object.keys(information)) // [ 'names', 'age', 'location' ];
console.log(Object.getOwnPropertySymbols(information));// [ Symbol(my name is barinda system sylvere) ]
