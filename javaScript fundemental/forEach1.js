let arr = [1,2,3,4,5,6,7,8,9,10];
let sumFunction = async (a , b) => a + b;
let sum = 0;
let main = async () => {
    for( let i of arr){
        sum = await sumFunction (sum,i);
    }
    console.log(sum);
}
main();
console.log(Math.min(...arr));
console.log(Math.max(...arr));