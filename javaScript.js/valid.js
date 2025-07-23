// function validNumber(num){
//     let real = /^(\d{10}|\d{3}[-]\d{3}[-]\d{4})$/;
//     return real.test(num);
// }
// console.log(validNumber("123-456-7890"))

function removeDeplicate(arr){
    let seen = {};
    let result = [];

    arr.forEach(item => {
        if(!seen[item]){
            seen[item] = true;
            result.push(item);
        }
    });
    return result;
}

console.log(removeDeplicate(["a","a","b","b","c","d"]));