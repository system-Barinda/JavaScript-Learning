const users = {
    name:"systen sylvere Barinda",
    age:12,
    location:"muhanga",
};

const data = Promise.resolve(users);

function barinda(operation){

    let tagert = {};
    const proxy = new Proxy({},{
        get(_,prop){
            return operation.then(resolve => resolve[prop]);
        },
        set(_,prop,value){
            
            return operation.then((res) => {
                if(res[prop] !== value){
                    res[prop] = value;
                    return true;
                }
                else{
                    throw new Error(`the data of this "${prop}" are existed before"`);
                }
            }).catch(err => {
                console.error(err.message);
                return false;
            })
        }
    });
    return proxy;

}
const system = barinda(data);
system.name.then(console.log)
system.name = "systen sylvere Barinda ntwali gambila";
system.location.then(console.log)
