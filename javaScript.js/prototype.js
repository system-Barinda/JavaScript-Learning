// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.greeting = function(){
//     console.log(` the name is : ${this.name} and age is : ${this.age} years old`);
// }

// let newPerson = new Person("barinda system sylvere",20);
// newPerson.greeting()

let personObject = {
    greeting:function(){
        console.log(` the name I have is ${this.name} and I am ${this.age} years old`);
    },
};

let barinda = Object.create(personObject);
barinda.name = "barinda";
barinda.age = 20;
barinda.greeting();