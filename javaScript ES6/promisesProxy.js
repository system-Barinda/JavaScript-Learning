

function createAsyncProxy(promise){
    return new Proxy({},{
        get(_,prop){

            return promise.then(resolved => resolved[prop]);
        }
    });
}

const data = Promise.resolve({ name: 'Alice', age: 30 });

const proxy = createAsyncProxy(data);


proxy.name.then(console.log); 
proxy.age.then(console.log);  


