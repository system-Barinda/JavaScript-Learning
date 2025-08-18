// var number= function(array){
//     let letter=[];
//     let count = {};
  
//       for(let char in array){
//         letter[char] = (letter[char] || 0) + 1;
//       }

//       for(let char in letter){
//         count[char] = array[char]
//       }
      
//      for(let char in count){
//         const numkey = Number(char);
//         console.log(numkey, (count[char]).join(' '))
//      }
// }

// number(["a","a","b","c","d"]);

function numberLines(lines) {
  return lines.map((line, index) => `${index + 1}: ${line}`);
}


console.log(numberLines(["a", "b", "c"])); 

