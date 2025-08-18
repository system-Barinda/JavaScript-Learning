function barindaSum(num1,num2){
    while(num1 !== 0){
        const carry = num1 & num2;
        num2 = num1 ^ num2;
        num1 = carry << 1;
    }
    return num2;
}
console.log(barindaSum(4,10))