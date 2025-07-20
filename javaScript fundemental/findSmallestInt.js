// function findSmallestInt(arr) {
//     return arr.reduce((a,b) => a < b ? a : b);
 
// }
// let ann = [34, 15, 88, 2,-10];
// let abb = [34, -345, -1, 100];
// console.log(findSmallestInt(ann));

class barinda{
    findSmallestN(arr){
        return Math.min(...arr);
    }
}
let finder = new barinda();
let abb = [34,345,-1,100];
console.log(finder.findSmallestN(abb));