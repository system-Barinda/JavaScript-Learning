function middle(test){
    let testLength = test.length;
     let mid = Math.floor(testLength / 2);
     if( testLength % 2 === 0){
        return test[mid - 1] + test[mid];
     }
     else{
        return test[mid];
     }
}
console.log(middle('middle'))