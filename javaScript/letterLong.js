const words = ["spray", "elite", "exuberant", "destruction", "present"];

function myFilter(back,thisArg){
    let result = [];

    for(let char = 0; char < this.length; char++){
        if( char in this){
            const condition = back.call(thisArg,this[char],char,this);
            if(condition){
                result.push(this[char]);
            }
        }
    }
    return result;
}
Array.prototype.myFilter = myFilter;

const barinda = words.myFilter((char,stri) => {
    return char.length > 10
})

console.log(barinda)