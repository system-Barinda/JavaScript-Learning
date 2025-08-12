const words = ["spray", "elite", "exuberant", "destruction", "present"];

function myFilter(callBackFn,thisArg){
    let result = [];
    
    for(let char = 0; char < this.length; char++){
        if(char in this){
            const condition = callBackFn.call(thisArg,this[char],char,this);
            if(condition){
                result.push(this[char]);
            }
        }
    }
    return result;
}
Array.prototype.myFilter = myFilter;

const barinda = words.myFilter((char) => {
    return char.length > 6;
})
console.log(barinda)