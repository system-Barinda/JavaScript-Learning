function sumDigPow(a, b) {
   let result = []; 
  for(let i = a; i < b; i++ )
    {
    const digit = String(i).split("").map(Number);
    const sum = digit.reduce((acc,digitt,index) => acc + Math.pow(digitt,index + 1),0);
      if( sum === i){
        result.push(sum);
      }
  
  }
  return result.sort(function(a,b){ return a - b });
}
console.log(sumDigPow(1,10));