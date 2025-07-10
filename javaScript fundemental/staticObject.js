class User{
    constructor(name){
        this.name = name;
    }
    greet(){
        return `hi i'm ${this.name} and thanks`;
    }
    static createUsers(){
        return new User("fuck you");
    }
}
const person = User.createUsers("ishimwe erik");
console.log(person.greet());