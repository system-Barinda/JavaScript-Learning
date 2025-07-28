// function uniqueInOrder(str){
    
//     let item = [];
//     let wordSplit = toString(str).split('');
    
//     for(let i = 0; i < wordSplit.length; i++){
//         if(wordSplit[i] !== wordSplit[i + 1]){
//             item.push(wordSplit[i]);
//         }
//         else{
//              item;
//         }
//     }
//     if(typeof item === 'string'){
//         return item;
//     }
//     else if(typeof item === 'number'){
//         return Number(item);
//     }
// }
// let barinda = [1,2,2,3,3];
// console.log(uniqueInOrder(barinda));
function uniqueInOrder(sequence) {
  const result = [];
  let prev;

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] !== prev) {
      result.push(sequence[i]);
      prev = sequence[i];
    }
  }

  return result;
}





// var uniqueInOrder = function(iterable){
//     return [...iterable].filter((item, index, arr) => item !== arr[index - 1]);
// }