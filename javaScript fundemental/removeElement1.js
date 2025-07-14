function removeEveryOther(arr){
    return arr.filter((_, index) => index % 2 === 0);
}
let arraWord = ["Keep", "Remove", "Keep", "Remove", "Keep"];
let arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(removeEveryOther(arrayNumber));