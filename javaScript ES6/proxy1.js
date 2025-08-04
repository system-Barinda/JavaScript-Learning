const person = {
      name:"Barinda system sylvere",
      age:12,
      gender:"Male",
      location:"Muhanga",
      college:"Tumba",
};
const hundlers = {
    get(object,prop){
        console.log(`the name of property:"${prop}": ${object[prop]}`);
        return object[prop];
    },
    set(object,prop,value){
       console.log(`the name of  propert:"${prop}": ${object[prop]}`);
       return object[prop] = value;
    }
};
const user = new Proxy(person,hundlers);
console.log(user.age);
user.age = 100;
console.log(user.age);