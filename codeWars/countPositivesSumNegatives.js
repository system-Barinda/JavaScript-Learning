function countPositivesSumNegatives(input) {
    if(input.length === 0) return [];
     let positives = [];
     let negatives = [];

     for(let i = 0; i < input.length; i++){
        if(input[i] > 0){
            positives.push(input[i]);
        }
        else {
            negatives.push(input[i])
        }
     
    }
     let count = positives.length;

// use of myReduce()
function myReduce (callbackFn,initialInput){
    let acc = initialInput;
    let startIndex = 0;
    while( acc === undefined){
        startIndex = 1;
        acc = this[0];
    }
    for(let num = startIndex; num < this.length; num++){
        if(num in this){
            acc = callbackFn(acc,this[num],num, this);
            
        }
    }
    return acc;
}
Array.prototype.myReduce = myReduce;
let sumNega = negatives.myReduce((a,b) => {
    return a + b;
});
return [count,sumNega];


   
}
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]))