let person = {
    names:"barinda",
    age:30,
    location:"muhanga"
};
// for(let [key,value] of Object.entries(person)){
//     console.log(`${key} : ${value}`);
// }

let getNew = new Map(Object.entries(person));
console.log(getNew.get('location'));