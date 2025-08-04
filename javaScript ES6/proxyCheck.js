const person = {
    username:"admin",
    password:"scrects",
    system:"barinda",
}

const hundles = {
    get(object,prop){
        if( prop === 'password'){
            console.error('access denied');
        }
       else{

      
        return object[prop];
         }
    }
}
const barinda = new Proxy(person,hundles);

console.log(barinda.password);