// const indeces = [];
// const arrayNumber = ["a", "b", "a", "c", "a", "d"];
// const element = "a";
// let idex = arrayNumber.indexOf(element);
// while( idex !== -1){
//     indeces.push(idex);
//     idex = arrayNumber.indexOf(element,idex + 1);
// }
// console.log(indeces);

let letter = ["a","b","c","a","d","f","a"];
let element = "a";
let indece = [];
let index = letter.indexOf(element);
while( index !== -1){
    indece.push(index);
    index = letter.indexOf(element,index + 1);
}
console.log(indece);
