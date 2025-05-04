class animal {
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }
    getting()
    {
        console.log(`${this.name}`);
    }
}
class dog extends animal{
    constructor(name,bread)
    {
        super(name);
        this.bread = bread;
    }
    getting()
    {
        console.log(`${this.name}`);
    }
}
const animal1 = new dog ("dog",20);
console.log(animal1);
