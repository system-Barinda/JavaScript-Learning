class product {
    constructor(name,price)
    {
        this.name = name;
        this.price = price;
    }
    speak() {
        console.log(`${this.name}  and ${this.price}.`);
    }
}
// const product1 = new product("system barinda",100);
// console.log(product1);
class digitalProduct extends product{
    constructor(name,price,breed)
    {
        super(name,price);
        this.breed = breed; 
    }
    getElement()
    {
        return `the name is:${super.name} and ${super.price}`;
    }
}
speak() {
    console.log(`${this.name} barks.`);
}


fetch() {
    console.log(`${this.name} is fetching the ball.`);
}

const product1 = new product()
console.log(digitalProduct.getElement());
