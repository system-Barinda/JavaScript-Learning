function myEvery(callBackFn,thisArg){
    for(let char = 0; char < this.length; char++){
        if( char in this){
            const result = callBackFn.call(thisArg,this[char],char,this); 
            if(! result) return false
        }

    }
    return true;
}

Array.prototype.myEvery = myEvery;

let numberArray = [3,4,5,6,7,8,9];

const syste = numberArray.myEvery(char => char > 2);
console.log(syste)