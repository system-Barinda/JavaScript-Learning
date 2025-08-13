const ratings = [5,4,5];

let sum = 0;

const sumFunction = (a,b) => a + b;

(async() => {
  for(const rating of ratings){
    sum = await sumFunction(sum,rating);
  }
  console.log(sum)
})();