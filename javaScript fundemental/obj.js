// let barinda = {
//     name:"barind system sylvere",
//     age:57,
//     location:"muhanga",
//     action:function(){
//         return 'the man is called barinda system sylvere';
//     },
// };
// console.log(barinda.action());

// let person = Object.create(barinda);
// person.store = 'iradukunda'
// person.neee = function(){
//     return 'I sleep it at harry too ';
// }
// console.table(person);

let band = {
     vocals:" barinda system",
     guitar:"jimmy pages",
     bass:" barinda system sylvere",
     drum:"iradukunda",
};
//  let { vocals,guitar, bass, drum } = band;
 
 function sings({vocals}){
    return `the name is:${drum}`;
 };
 console.log(sings(band));



