// let person = {
//     name:"BARINDA system sylvere",
//     name:"BARINDA system sylvere",
// };
// console.log(Object.hasOwn(person, 'name'));

let barinda = {
    name:"barinda system sylvere",
    location:"muhangaa",
}
let person = {
    name:"barinda system sylvere",
    location:"muhanga",
};
console.log(Object.is(barinda,person)) // the unswer is false not true 
console.log(JSON.stringify(barinda) === JSON.stringify(person));