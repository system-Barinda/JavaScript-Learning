// function correct(string)
// {
// 	let word = string.replace('0','O');
//     let word1 = word.replace('5','S');
//     let final = word1.replace('1','I');
//     return final;
   
// }
// let word = "DUBL1N"
// console.log(correct(word));

function correct(text) {
  return text
    .replace(/5/g, 'S')
    .replace(/0/g, 'O')
    .replace(/1/g, 'I');
}
console.log("DUBL1N");
