function myReduce(callbackFn,initialValue){
    let acc = initialValue;
    let startIndex = 0;

    if(acc === undefined){
        acc = this[0];
        startIndex = 1;
    }

    for(let i = startIndex; i < this.length; i++){
        acc = callbackFn(acc,this[i],i,this);
    }
    return acc;
}
Array.prototype.myReduce = myReduce;

let b = [1,2,3,4,5,6,7,8,9];
let result = b.myReduce((a,b) => a + b,0);
console.log(result);