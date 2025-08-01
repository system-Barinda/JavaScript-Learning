class Users {
    constructor(name,age,gender,location){
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._location = location;
    }
     get allInformation(){
        console.log(`the name: ${this._name} \n I have  ${this._age} years old \n gender:${this._gender} \n the location is : ${this._location}`);

    }
    set name(newName){
       if( typeof newName === 'string' && newName.length > 0){
        this._name = newName;
       }
       else{
        throw new Error('inter the valid names');
        
       }
    }
}
const system = new Users('system sylvere Barinda',12,'male','muhanga');
system.allInformation;
system.name = '89';
system.allInformation