function orderWordsByNumber(text){
    if(! text) return "";

    return text
           .split(' ')
           .sort((a,b) => {
            const numA = a.match(/\d/);
            const numB = b.match(/\d/);
            return numA - numB;
           })
           .join(' ');
}
console.log(orderWordsByNumber("is2 Thi1s T4est 3a"))