function createAsyncProxy(data){
    return new Proxy({},{
        get(_,prop){
            return data.then(resolved => resolved[prop]);
        }
    });
}

const user = Promise.resolve({name:"barinda system sylvere",age:22});
const proxy = createAsyncProxy(user);
proxy.name.then(console.log);
proxy.age.then(console.log);