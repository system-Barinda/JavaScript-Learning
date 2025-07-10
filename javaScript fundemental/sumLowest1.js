function sumLowest(number){
    var [a,b] = number.sort((a,b)=> a - b);
    return a + b;
}
let arrayNumber = [10, 343445353, 3453445, 3453545353453]
console.log(sumLowest(arrayNumber))