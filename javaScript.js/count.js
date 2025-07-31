// function count(string) {
//     if(string.length === '') return {};
// let countt = {};
//   for(let word of string){
//     const key = String(word);
//    if(countt[key]){
//     countt[key]++;
//    }
//    else{
//     countt[key] = 1;
//    }
//   }
//   return countt;
// }
// console.log(count('barinda'));\

function countChars(str) {
  const result = {};
  for (let char of str) {
    const key = String(char); 
    result[key] = (result[key] || 0) + 1;
  }
  return result;
}

// Example usage:
console.log(countChars("aba")); // { 'a': 2, 'b': 1 }
console.log(countChars("112")); // { '1': 2, '2': 1 }