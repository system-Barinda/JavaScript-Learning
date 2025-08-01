class users {
    constructor(name,age){
        this.name = name;
        
        Object.defineProperty(this,'age',{
            value:'anonymous',
            enumerable:true,
        })
    }
    get all(){
        console.log(`the name : ${this.name} and age: ${this.age}`);
    }
}
const barinda = new users('barinda',20);
barinda.age = 'anonymous'
barinda.all



// class Config {
//     static #secretKey;
//     static isReady = false;

//     static {
//         // simulate fetching a secret key
//         Config.#secretKey = "abc123";
//         Config.isReady = true;
//         console.log("Static block ran");
//     }

//     static getSecret() {
//         return Config.#secretKey;
//     }
// }

// console.log(Config.isReady);         // true
// console.log(Config.getSecret());     // "abc123"
