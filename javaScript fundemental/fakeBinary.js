// function fakeBinary(string){
//     return string.split("").map(a => a < 5 ? "0":"1");
// }
// console.log(Array.of(fakeBinary("1234567").join('')));

// let users = {};
// const myName = users.contacts?.word?? "there is word I can tell is I love you";
// console.log(myName);

function fakeBinary(x){
    let result = ' ';
     for( let i = 0; i < x.length; i++){
        if(parseInt(x[i]) < 5){
            result += '0';
        }
        else{
            result += '1'
        }
     }
     return result;
}
console.log(fakeBinary('11345678'));

