function * fibinociries(limit)
{
  let a =0;
  let b = 1;

  while( a <= limit )
  {
    yield a;
    [a,b] = [b,a+b];
  }
}
const n = 50;
const result = fibinociries(n);
for(let num of result)
{
  console.log(num);
}

