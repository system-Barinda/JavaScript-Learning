function myRed(calll,initialV){
    let acc = initialV;
    let startI = 0;

    if(acc === undefined){
        acc = this[0];
        startI = 1;
    }

    for(let i = 0; i < this.length; i++){
        acc = calll.call(acc,this[i],i,this);
    }
    return acc
}

Array.prototype.myRed = myRed;
const b = [1,2,3,4,5,6,7,8,9];
let result = b.myRed(function(curent){
    return this + curent
},0)
console.log(result)
