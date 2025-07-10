// let word = "bariiiiiiinda systemmm";
// let wordArray = word.split(" ");
// let result = wordArray.reduce((a,b) => {
//     if( a.length > b.length){
//         return a;
//     }
//     else{
//         return b;
//     }
// });
// console.log(result);

const getCode = ( function(){
    let names = "I thank the people helped me in carreer I started in last year from in my heart";

    return function(){
        console.log(names);
    }
}());
getCode();