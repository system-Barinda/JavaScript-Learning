// let obj = {
//      sum(a,b){
//        return a + b;
//     }
// }
// console.log(obj.sum(10,20));

let users = {
    name:"barinda system",
    age:12,
    location:"huye",
    getInfo:function(){
        return "this is the name of " + this.name + " and age is " + this.age + " and the location is " +  this.location + " thanks ";

    },

};
console.table(users.getInfo());