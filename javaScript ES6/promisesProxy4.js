const users = {
    name:"System sylvere Barinda",
    age:21,
    location:"Muhanga",
    gender:"male",
    college:"tumba rp college",
};

function createAsyncProxy(operationProx){
     let target = {};

    const system = new Proxy({},{
          get(_,prop){
           return operationProx.then(res => res[prop].split(""));
          },
          set(_,prop,value){
            return  operationProx.the((res) => {
                  if(res[prop !== value]){
                    res[prop] = value;
                    return true;
                  }
                  else{
                    throw new Error(`data are exist of this propert: "${prop}"`);
                    return false;
                  }
            })
            .catch((err) => {
                console.error(err.message);
            });
          },
    });
    return system;
     
}
const data = Promise.resolve(users);

let gambira = createAsyncProxy(data)

setInterval(() => {
    
       gambira.name.then(console.log)
    
  
},1000)

