const users = {
    name:"systen sylvere Barinda",
    age:12,
    location:"muhanga",
};

const data = Promise.resolve(users);
function barinda(operation){
    
    const system = new Proxy({},{
        get(_,propert){
           return operation.then((resolve) => {
            return resolve[propert];
           });
        },
        set(object,property,value){
            if(object[property] !== value){
                return object[property] = value;
            }
            else{
                throw new Error('the data are existed ');
            }
        },
    });
    return system;
}
const m = barinda(data);
m.name.then(console.log);
m.name  = "jfajljsakjflsajkfsf ";
m.name.then(console.log);