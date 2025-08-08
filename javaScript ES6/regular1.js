// let barinda = "barinda1234";
// const match = barinda.match(/[^a-z]/g);
// console.log(match.join(''));

let str = " My phone number is 12345 and zip code 67890";
let match = str.match(/[0-9]+/g)
console.log(match.join(','))