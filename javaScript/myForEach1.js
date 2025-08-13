const arrayy = [1,2,3,4,5,6,7,8,9];
let sum = 0;
let sumFunction = (a,b) => a + b;

(async() => {

    for(let rating of arrayy){
        sum = await sumFunction(sum,rating);
    }
    console.log(sum)
   
})();