class sumDigitPower {
    sumdP(a,b){
     let result = [];
     for(let i = a; i < b; i++){
        const digit = String(i).split("").map(Number);
        const sum = digit.reduce((a,b,c) => a + Math.pow(b, c + 1), 0);
        if(sum === i){
            result.push(sum);
        }
     }
     return result;
    }
    deleteNumber(sumdP){
        console.log(sumdP);
    }
    
}
let newOperator = new sumDigitPower();
let b = newOperator.sumdP(1,100)

newOperator.deleteNumber(b);