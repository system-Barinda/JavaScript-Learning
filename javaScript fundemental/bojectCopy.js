let person = {
    names:"barinda",
     age:20
};
let newP = JSON.parse(JSON.stringify(person));

console.log(newP);


// let person = {
//     names:"barinda",
//      age:20
// };
// let barinda = {...person};
// console.log(barinda);