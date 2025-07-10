// const arrayNumber = [[20,40],[100,600],[32,67],[10,20]];
// function checkAll(number){
//     return arrayNumber.map(([a,b]) => a > 40 && b > 60 ? "barinda":"system");
// }
// console.log(arrayNumber);
// console.log(checkAll(arrayNumber));

// const arrayWord = [1,2,3,4,5,6,7,8,9,10];

function addArray(number){
    let min = Math.min(...arrayWord);
    let max = Math.max(...arrayWord);
    let tatol =  number.reduce((a,b) => a + b, 0);
    let getFinal = tatol - min - max;
    return getFinal;
}
console.log(addArray(arrayWord));

// let word = "barinda";
// function revWord(string){
//     let rev = ' ';
//     for(let i = string.length - 1; i >= 0; i--){
//         rev += string[i];
//     }
//     return rev;
// }
// console.log(revWord(word));

// let word = 'barinda';
// var changed = word.split("").reverse();
// console.log(changed.join(""))