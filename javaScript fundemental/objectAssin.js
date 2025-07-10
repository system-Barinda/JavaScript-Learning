// let person1 = {
//     name:"barinda system",
//     age:20,
//     location:"muhanga",
// }
// let newPerson = {
//     name:"gambira",
//     age:30,
//     location:"Burera",
// }
// let  person2 = Object.assign(person1,newPerson);
// console.log(person1);


let users = {};
Object.defineProperties(users,{
    name : {
        value : "barinda",
        writable:true,
        enumerable:true,
        configurable:true,
    },
    age:{
        value:30,
        writable:false,
        enumerable:true,
        configurable:false,
    }
});
console.log(users.name);
users.name = "bobo",
console.log(users.writable);