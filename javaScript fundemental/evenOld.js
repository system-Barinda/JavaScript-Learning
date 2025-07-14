// function evenOrOdd(number) {
//   if(number % 2 === 0){
//     return 'even'
//   }
//   else{
//     return 'old'
//   }
// }
// console.log(evenOrOdd(42))

function lovefunc(flower1, flower2){
   if( flower1 % 2 === 0 && flower2 % 2 === 0){
    return false;
   }
   else if(flower1 % 2 === 0 || flower2 % 2 === 0){
    return true;
   }
   else{
     return false
   }
}
console.log(lovefunc(0,0));