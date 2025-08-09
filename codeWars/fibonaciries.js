function productFib(prod){
  
   let fib = [0,1];
   for(let i = 2; i < prod; i++){
    fib[i] = fib[i - 1] + fib[i - 2];
   }
   return fib;

}
console.log(productFib(5))