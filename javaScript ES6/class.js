

class users {
    constructor(firstName,lastName,location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.location = location;
    }
    getAllInfo(){
        console.log(`the first name : ${this.firstName} and last name : ${this.lastName} and the location is : ${this.location}`);
    }
}
class humanity extends users{
    constructor(firstName,lastName,location){
        super(firstName,lastName,location);
        
    }
}
const person = new humanity('Barinda','system sylvere','muhangaaaa');
 person.getAllInfo()