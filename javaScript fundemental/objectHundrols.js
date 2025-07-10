// let barinda = {};
//   barinda.name = "barinda"
// console.log(barinda.hasOwnProperty("name"));

// let person = new Map();
// person.set("username","jhon");
// console.log(person.has("username"));

// function Personn(names,age){
//     this.names = names;
//     this.age = age;
// }
// let person1 = new Personn("barinda",20);
// console.log(person1.age);

let word = "barinda1123bsys";
// let result = word.split("").map((a) => {
//     return Number(a);
// });
// console.log(result);
// let num = word.match(/\d+/g);
// console.log(Number(num));

let bae = word.match(/[a-zA-Z]/g);
console.log(bae.join(""));
