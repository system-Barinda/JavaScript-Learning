// function towerBuilder(nFloors) {
//   let tower = [];
//   for(let i = 0; i < nFloors; i++){
//     const star = '*'.repeat(2 * i + 1);
//     const space = ' '.repeat(nFloors - i - 1);
//     tower.push(space + star + space);
//   }
//   return tower;
// }
// console.log(towerBuilder(10));


// const stringToNumber = function(str){
//  return parseFloat(str);
// }
// console.log(stringToNumber("12.34"))

function findOdd(A) {
  return A.reduce((acc, num) => acc ^ num, 0);
}
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));