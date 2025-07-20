let userMethod = {
    getInfo(){
        console.log(`Hello, My name is : ${this.nam} and ${this.age} years old`);
    },
};

function CreateUser(name,age){
  let user = Object.create(userMethod);
  user.nam = name;
  user.age = age;
  return user;
}

let person1 = CreateUser("Barinda system sylvere",23);
let person2 = CreateUser("Iradukunda sandrine",21);
person1.getInfo();
person2.getInfo();