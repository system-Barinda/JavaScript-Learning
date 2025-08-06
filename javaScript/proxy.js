const users = {
    name:"Barinda system sylvere",
    age:21,
    location:"Muhanga",
    college:"tumba"
};

function barinda(operation){
    
    const system = new Proxy({},{
        get(obj,prop){
            return operation.then(res => res[prop]);
        },
        set(obj,prop,value){
            return operation.then((res) => {
                if(res[prop] !== value){
                    res[prop] = value;
                    return true;
                }
                else{
                    throw new Error('data are existed');
                    return false;
                }
            })
            .catch((err) => {
                console.log(err.message);
            });
        },
    });
    return system;

}
const data = Promise.resolve(users);
const n = barinda(data);
n.name.then(console.log);