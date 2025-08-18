function sum(a,b){
    while( b !== 0){
        const carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }
    return a;
}
console.log(sum(9,9))