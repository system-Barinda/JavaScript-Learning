// function filter_list(l) {
//    return l.filter(e => Number(e)).filter(r => !Number.isNaN(r));

// }
// let word =[1,2,'a','b','34'];
// console.log(filter_list(word));
let word =[1,2,'a','b','34'];
function filter_list(list) {
  return list.filter(item => typeof item === 'string');
}
console.log(filter_list(word));