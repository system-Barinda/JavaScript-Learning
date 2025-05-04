function * fibinociries(limit = 30)
{
    let a = 0;
    let b = 1;
    while(a <= limit)
    {
        // yield a;
        [a,b] = [b,a+b];
        //0 +1 = 1 = 1 + 1 = 2 
        // b = a + b =2 = 1 + 2
    }

}
// const fib = 50;
const result = fibinociries();
for(let num of result)
{
    console.log(num)
}