function barindaCount(){
    let count = 0;
    return function countt(){
        count += 1;
        return count;
    }
}
let systemm = barindaCount();
console.log(systemm());
console.log(systemm());
console.log(systemm());
console.log(systemm());
console.log(systemm());

let bars= barindaCount();
console.log(bars());
console.log(bars());
console.log(bars());