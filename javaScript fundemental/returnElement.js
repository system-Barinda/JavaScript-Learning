function barinda(a,b,c){
    let n = [];
    if (a < b){
        for(let i = a; i < b; i++){
             if( i % c === 0){
              n.push(i);
             }
              else{
            n;
        }
        } 
       
    }
     return n.length; 
}
console.log(barinda(6,11,2))
