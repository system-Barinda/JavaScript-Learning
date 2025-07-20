let counter = (() =>{
    let count = 0;
    return {
        increment(){
         count++;
         return count;
        },
        dicrement(){
            count--;
            return count;
        }
    };
})();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.dicrement());