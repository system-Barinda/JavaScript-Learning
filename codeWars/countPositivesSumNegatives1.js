function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) return []; 

    let positives = [];
    let negatives = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            positives.push(input[i]);
        } else if (input[i] < 0) {
            negatives.push(input[i]); 
        }
    }
    let count = positives.length;

  
    function myReduce(callbackFn, initialInput) {
        let acc;
        let startIndex;

        if (initialInput !== undefined) {
            acc = initialInput;
            startIndex = 0;
        } else {
            acc = this[0];
            startIndex = 1;
        }

        for (let i = startIndex; i < this.length; i++) {
            if (i in this) {
                acc = callbackFn(acc, this[i], i, this);
            }
        }
        return acc;
    }

    Array.prototype.myReduce = myReduce;

    let sumNega = negatives.length > 0 ? negatives.myReduce((a, b) => a + b, 0) : 0;

    return [count, sumNega];
}


console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));

