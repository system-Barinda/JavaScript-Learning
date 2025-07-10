let numbers = "12334556";
function convertNumbeer(num){
    let numm = num.split('');
    let numArray = new Set([...numm]);
    return Array.from(numArray).join('');
}
console.log(convertNumbeer(numbers));
