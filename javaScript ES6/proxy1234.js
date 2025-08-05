const user = {
    username:"admin",
    password:"secrects",
}
const newUser = new Proxy(user, {
    set(obj,prop,value){
        return obj[prop] = value;
    },
    get(obj,prop,condition){
        
    }
})