// function reverseWords(str) {
  
//     let barinda = str.split("").reverse().join("");
//    return barinda.split(' ').reverse().join(" ");

// }
// console.log(reverseWords("This is an example!"))



function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}
console.log(reverseWords("This is an example!"))