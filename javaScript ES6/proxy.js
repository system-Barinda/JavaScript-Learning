
const person = {
    firstName:"system sylvere Barinda",
    age:20,
    location:"Muhanga",
    college:"Tumba"
}



const hundlers = {
    get(obj,prop){
        console.log(`Getting property "${prop}": ${obj[prop]}`);
        return obj[prop];
    },
    set(obj,prop,value){
        console.log(`setting property "${prop}" to ${value}`);
        obj[prop] = value;
    }
};
const newProxy = new Proxy(person,hundlers);
console.log(newProxy.age)
newProxy.age = 1000;
console.log(newProxy.age)