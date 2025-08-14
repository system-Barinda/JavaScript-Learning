function myReduce(callBackFn,initialValue){
    let accumalator = initialValue;
    let startIndex = 0;

    if(accumalator === undefined){
        accumalator = this[0];
        startIndex = 1;
    }

    for(let char = startIndex; char < this.length; char++){
        accumalator = callBackFn(accumalator,this[char],char,this);
    }
    return accumalator;
}
Array.prototype.myReduce = myReduce;
let result = [1,2,3,4,5,6,7,8,9,10].myReduce((a,b) => a + b,0);
console.log(result);