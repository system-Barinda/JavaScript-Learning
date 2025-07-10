let arrayNumber = [10, 343445353, 3453445, 3453545353453]
function sumTwoSmallestNumbers(numbers) {  
    let sortArray = numbers.sort((a,b) => a - b);
    let sum = 0;
    for(let i = 0; i < 2; i++){
        sum += sortArray[i];
    }
    return sum;
}
console.log(sumTwoSmallestNumbers(arrayNumber));