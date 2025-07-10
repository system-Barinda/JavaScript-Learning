// let b = [1,,3];
// for (let i in b){
//     console.log(`the index is ${i} and value is ${b[i]}`);
// }
const color = ["red","yellow","blue"];
color[5] = "green";
const iterate = color.keys();
for( let i of iterate){
console.log(`the index:  ${i} : ${color[i]}`);
}

