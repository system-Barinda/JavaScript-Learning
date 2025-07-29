function altenativeText(str){
    let intoArray = str.split('');
    let result = [];
    for(let i = 0; i < intoArray.length; i++){
        if(/^[A-Z]$/.test(intoArray[i])){
            result.push(intoArray[i].toLowerCase())
        }
        else{
            result.push(intoArray[i].toUpperCase())
        }
    }
    return result.join('')
}
console.log(altenativeText('Hello world'));

// function barinda(text){
//     return text.split("").map(a => a === a.toUpperCase() ? a.toLowerCase():a.toUpperCase()).join('');
// }
// console.log(barinda('Hello world'));