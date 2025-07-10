let sparse = [1,2,3,4,5,,6,7];
for(let i = 0;   i < sparse.length; i++){
    if( i in sparse){
        console.log(` the index is : ${i} and value is ${sparse[i]}`);
    }
    else{
        console.log(`the index is : ${i}  and value is : <empty>`);
    }
}