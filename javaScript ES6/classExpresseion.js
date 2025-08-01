const barinda = class {
   constructor(name,location){
    this.name = name
    this.location = location;
   }
   getInfo(){
    console.log(`the name:${this.name} and location is : ${this.location}`);
   }
}
const system = new barinda('barinda','muhanga');
system.getInfo();