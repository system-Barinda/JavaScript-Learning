const user = {
    username:"barinda",
    admin:"burikantu",
}
const newP = new Proxy(user, {
    get(obj,prop){
        if(prop === 'admin'){
            console.log('access denied')
        }
    }
});
console.log(newP.admin)