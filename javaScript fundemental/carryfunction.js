function addBarinda(a){
    return function (b){
        return function(c){
            return a + b + c ;
        }
    }
}
console.log(addBarinda(2)(3)(5));