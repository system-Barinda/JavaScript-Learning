const words = ["spray", "elite", "exuberant", "destruction", "present"];

function myFilter(callBackFn, thisArg){
    let result = [];

    for(let char = 0; char < this.length; char++){
        if( char in this){
            const b = callBackFn.call(thisArg,this[char],char,this);
            if(b){
                result.push(this[char]);
            }
        }
    }
    return result;
}
Array.prototype.myFilter = myFilter;

const bb = words.myFilter((char) => {
    return char.length >10;
})
console.log(bb);