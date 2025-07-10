// function findShort(s){
//    return  Math.min(...s.split(' ').map(a => a.length));
// }
// const word = "barinda andaasa myyyaa name isd";
// console.log(findShort(word));

const word = "myy name ismmmmmm Barinda system sylvere ismmmmm the best software ingeneering inmm developing";
function findShort(string){
    return Math.min(...string.split(" ").map(str => str.length));
}
console.log(findShort(word));