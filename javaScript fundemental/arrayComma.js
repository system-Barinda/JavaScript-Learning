let barinda = [1,2,3,4,5,6,7,8,9];
function findBarinda(array){
    let s = ' ';
    for(let i = 0, j = 1; i < array.length; i++, j++){

        s += barinda[i] + ' ';
        if( j % 3 == 0){
            console.log(s);
            s = ' ';
        }
    }
}
findBarinda(barinda)