// const colors = ['red', 'blue', 'green', 'blue', 'yellow', 'blue'];
// console.log(colors.indexOf('blue'));
// console.log(colors.lastIndexOf('blue'));

const array = ["a", "b", "a", "c", "a", "d"];
let element = "a";
let indece = [];
let index = array.lastIndexOf(element);
while( index !== -1){
    indece.push(index);
    index = index > 0 ? array.lastIndexOf(element, index - 1): -1;
    
}
console.log(indece);


