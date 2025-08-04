const barinda = {
    username:"user",
    password:"secrects",
};
const hundles = {
    get(obj,prop){
        if(prop === 'password')
        {
            console.log(`access denied`);
        }
        else{
            return obj[prop];
        }
    }
}
const newPros = new Proxy(barinda,hundles);
console.log(newPros.password)