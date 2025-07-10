let arrayWord =["barinda","system","red","apple","great","school"];
function filterItem(array,query){
    return array.filter((el) => el.toLowerCase().includes(query.toLowerCase()));


}
console.log(filterItem(arrayWord,'s'))