class persons {
    constructor(name,age,location){
        this.name = name;
        this.location = location;
        Object.defineProperty(this,'age',{
            value:age,
            enumerable:true,
            configurable:false,
            writable:false
        });
    }
    get info(){
        console.log(`the name: ${this.name} \n age : ${this.age} \n location: ${this.location}`)
    }
   
}
const system = new persons('system sylvere barinda',20,'muhanga');
system.info
delete system.age
system.info