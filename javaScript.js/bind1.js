// let barinda = {
//      name:"barinda",
//      muhanga:"location",
//      age:30,
// };
// function toArray (){
//     return Object.values(this)
// }
// let bari = toArray.call(barinda);
// console.log(bari);

function toArray(){
    return Array.prototype.slice.apply(this);
}
let barinda = {
    0:'b',
    1:'x',
    2:'a',
    length: 3
};

let realW = toArray.apply(barinda);
console.log(realW);