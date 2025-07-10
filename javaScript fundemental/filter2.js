function eachMyMethod(doMe, barinda){
    let acountable = this.length;
    for(let i = 0; i < acountable; i++){
        if( i in this){
           const result = doMe.call(barinda,this[i],i,this);
           if(!result){
               return false;
           }
        }
    }
    return true;
}
let arr = [10,20,30,40,50,60];
arr.eachMyMethod = eachMyMethod;
let isProcessed = arr.eachMyMethod(function(value){
    return value > 9;
});
console.log(isProcessed);

