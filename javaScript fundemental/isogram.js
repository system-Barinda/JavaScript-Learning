// function isIsogram(str){
//     let wordd = str.toLowerCase().split("");
//     let filtered = wordd.every((a,b) => wordd.indexOf(a) === b);
//     return filtered;
// }
// let word = 'Dermatoglyphics';
// console.log(isIsogram(word));

function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}
let word = 'Dermatoglyphics';
console.log(isIsogram(word))