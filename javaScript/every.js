function MyEvery(callBackFn,thiArg){

    const len = this.length;

    for(let i = 0; i < len; i++){
        if( i in this){
            const result = callBackFn.call(thiArg,this[i],i,this);
            if(!result) return false;
        }
    }
    return true;

}

Array.prototype.MyEvery = MyEvery;

const numberr = [2,3,4,5,6,8];

const barinda = numberr.MyEvery((char) => {
    return char < 7;
});
console.log(barinda)