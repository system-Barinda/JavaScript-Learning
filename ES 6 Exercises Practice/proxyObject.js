const users = {
    name:"system barinda",
    location:"muhanga",
    college:"Tumba college",
    age:12,
}

let hundle = {
    get(target,value){
        return target[value].length;
    }
}

const barinda = new Proxy(users,hundle);
console.log(barinda.location)