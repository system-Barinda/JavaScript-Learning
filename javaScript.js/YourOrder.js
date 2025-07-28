// function mixedWord (word){
//     return [...word].sort().join('');
// }
// console.log(mixedWord('B3A1C2'))

function sortLettersAndNumbers(sequence){
    let char = [...sequence];

    let number = char.filter(char => ! isNaN(char)).map(Number).sort((a,b) => a - b);
    let letter= char.filter(char => isNaN(char)).sort();

    return [...number, ...letter];
}
console.log(sortLettersAndNumbers('B3A1C2'));
