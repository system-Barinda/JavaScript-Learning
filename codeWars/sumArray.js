function myForEach(callBackFn,thisArg){
    
    let result = [];

    for(let char = 0; char < this.length; char++){
         if(char in this){
            const condition = callBackFn.call(thisArg,this[char],char,this);
            result.push(condition);
         }
    }
    return result;

}
Array.prototype.myForEach = myForEach;

const sumFunction = (a,b) => a + b;

const arrayNumber = [1,2,3,4,5];

let b = arrayNumber.myForEach((el) => {
    return el;
});
let sum = 0;
(async() => {
    for(let cha of b){
          sum = await sumFunction(sum,cha)
         
    }
     console.log(sum)
    
})();