// const word = "barinda";
// let wordChanged = word.substring(1);
// console.log(wordChanged);
// console.log(wordChanged.slice(0,-1) + wordChanged[wordChanged.length - 1].toUpperCase());

// let nana = 1234;
// let call = toString(nana);
// console.log(typeof(nana));
// console.log(typeof(call));

// const number = "40";
// let b = + number;
// console.log(typeof(b));

// let user = {
//     fname : 'barinda'
// }
// console.log(user['fname']= 'system barinda good');

// var names  = {
//     'first name ' :'barinda',
//     'last name' : 'system sylver',
//     location:'muhanga'
// }
// delete names.location;
// console.log(names.location);

// let users = {
//     firstname:'system',
//     lastname:'sylvere barinda',
//     age:22,
//     location:'muhanga'
// }
// console.table(users);

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const me = new Person("Tyrone", "Jones");

console.table(me);
console.log("hiya friend!");


