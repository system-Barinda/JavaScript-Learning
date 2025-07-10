const userMethods = {
    greeting(){
        console.log(`hello, my name is ${this.name} and ${this.age}`);
    }
};

function createUser(name,age){
    const user = Object.create(userMethods);
    user.name = name;
    user.age = age;
    return user;
}
let me  = new createUser("barinda system",30);
me.greeting();