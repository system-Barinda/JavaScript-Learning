function alphabetPosition(text) {
  return text
         .toUpperCase()
         .split("")
         .filter(char => char >= 'A' && char <= 'Z')
         .map(char => char.charCodeAt(0) - 64)
         .join(' ')
}
console.log(alphabetPosition('barinda'));

// let letterNumber = {};
// for(let i = 65; i <= 90; i++){
//     letterNumber[String.fromCharCode(i)] = i - 64;
//     console.log(letterNumber);
// }

// let characters = "abcdefghijklmnopqrstuvwxyz".split("")
// let text = "valens@".split("")
// text.forEach(elem=>{
//   let index = characters.filter((a,b)=>{
//     if(a==elem){
//       // console.log(b)
//       return b
//     }
//   })
//   console.log(index)
// })