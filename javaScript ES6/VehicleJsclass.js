class Vehicle {
    constructor(type = 'Generic Vehicle', wheels = 0){
        this.type = type;
        this.wheels = wheels;
    }
    describle(){
        console.log(`this is type: ${ this.type  } and ${ this.wheels }  wheels`);
    }
    start(){
        console.log(`the ${this.type} is starting.......`);
    }
}

class Car extends Vehicle {
    constructor(brand = 'toyota'){
        super('Car',4);
        this.brand = brand;
    }
    describle(){
        super.describle();
        console.log(`the brand is: ${this.brand}`);
    }
    drive(){
      console.log(`${this.brand} the car is driving`);
    }
}

class bike extends Vehicle {
    constructor(color = 'red'){
        super('bike',2);
        this.color = color;
    }
    describle(){
        super.describle();
        console.log(` the color of car : ${this.color}`);
    }
    pedal(){
        console.log(`the ${this.color} the bike is being pedaled .`)
    }
}


 const barinda = new Car('Honda');
 barinda.describle();
 barinda.drive()
 barinda.start()

 console.log('-----------------------------------------------');

 const system = new bike()
 system.describle()
 system.pedal()
 system.start()
