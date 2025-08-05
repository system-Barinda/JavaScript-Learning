function findlastindex(arr){
    return arr.reduce((a,b) => a ^ b);
}
console.log(findlastindex([1,1,2,3,3,4,5,6,4,5,6]))