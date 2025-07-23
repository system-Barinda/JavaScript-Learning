function countZiroes(n){
    let count = 0;
    let factor = 1;

    while(Math.floor( n / factor) > 0){
        let lower = n % factor;
        let current = Math.floor( n / factor) % 10;
        let higher = Math.floor(n / (factor * 10));

        if(current === 0){
            count += (higher - 1) * factor + (lower + 1);
        }
        else{
            count += higher * factor;
        }

        factor *= 10;
    }
    return count;
}
console.log(countZiroes(100));