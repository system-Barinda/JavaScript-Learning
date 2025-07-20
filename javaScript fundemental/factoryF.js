function CreateUser(name, age){
    return {
        name,
        age,
        getInfo(){
            console.log(`the name is: ${name} and age is ${age}`);
        },
    };
}
let barina = new CreateUser("barinda system sylvere",23);
let barina1 = new CreateUser("barinda system ",23);
barina.getInfo();
barina1.getInfo();