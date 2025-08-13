function myForEach(callBackFn,thisArg){
    let result = [];

    for(let char = 0; char < this.length; char++){
        if(char in this){
            const conditional = callBackFn.call(thisArg,this[char],char,this);
            result.push(conditional);
        }
    }
    return result;
}

Array.prototype.myForEach = myForEach;

let barinda = [1,2,3,4,5,6,7,8,9];

 let ch = barinda.myForEach((el) => {
    return el;
});

const sumFunction = (a,b) => a + b;

let useSum = 0;

(async() => {
     for(let char of ch){
        useSum = await sumFunction(useSum,char);
     }
     console.log(useSum)
})();